import { Injectable } from '@angular/core';
import { FriendService } from 'src/app/friends/friend.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsArray: Comment[] = [];
  private commentsUpdated = new Subject<Comment[]>();

  constructor(private http: HttpClient, private friendService: FriendService) { }

  user = this.friendService.currentUser;

//   getComments() {
//     this.http.get<{message: string, comment: Comment[]}>('http://localhost:3000/comments').subscribe((data) => {
//             this.commentsArray = data.comment;
//             this.commentsUpdated.next([...this.commentsArray])
//         });

//         return [...this.commentsArray];
//     }

//     getCommentUpdateListener() {
//       return this.commentsUpdated.asObservable();
//   }

//   addComment(content: string, post: string) {
//     const comment: Comment = {
//       post: post,
//       time: Date.now().toString(),
//       author: this.user.name,
//       content: content
//     };

//     this.http.post<{message: String}>("http://localhost:3000/comments", comment).subscribe((data) => {
//       console.log(data.message);
//       this.commentsArray.push(comment);
//       this.commentsUpdated.next([...this.commentsArray]);
//     })
  }


