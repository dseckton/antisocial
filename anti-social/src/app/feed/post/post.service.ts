import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';
import { Friend } from 'src/app/friends/friend.model';
import { HttpClient } from '@angular/common/http';
import { FriendService } from 'src/app/friends/friend.service';

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();
    isEditing: boolean = false;
    constructor(private http: HttpClient, private friendService: FriendService) {

    }

    user = this.friendService.currentUser;

    getPosts() {
        this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/posts').subscribe((postData) => {
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts])
        });

        return [...this.posts];
    }
    
    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }

    addPost(content: string) {
        const post: Post = {
                time: Date.now().toString(),
                author: {name: this.user.name, picUrl: this.user.picUrl},
                content: content,
                comments: []
            };
            
            this.http.post<{message: String}>("http://localhost:3000/posts", post).subscribe((respData) => {
                this.posts.push(post);
                this.postsUpdated.next([...this.posts]);
            });
    }

    updatePost(postTime: string, newContent: string, postAuthorName: string, postAuthorPic: string) {
        const post: Post = {
            time: postTime,
            author: {
                name: postAuthorName,
                picUrl: postAuthorPic
            },
            content: newContent,
            comments: []
        };
        this.http.put("http://localhost:3000/posts/" + postTime, post).subscribe(response => {
            const updatedPosts = [...this.posts];
            const oldPostIndex = updatedPosts.findIndex(p => p.time === post.time);
            updatedPosts[oldPostIndex] = post;
            this.posts = updatedPosts;
            this.postsUpdated.next([...this.posts]);
        }
    );
    }

    deletePost(postTime: string) {
        this.http.delete("http://localhost:3000/posts/" + postTime).subscribe(() => {
            const updatedPosts = this.posts.filter(post => post.time !== postTime);
            this.posts = updatedPosts;
            this.postsUpdated.next([...this.posts]);
        })
    }
}