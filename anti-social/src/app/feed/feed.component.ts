import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './post/post.model';
import { PostService } from './post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anti-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private postService: PostService) { }
  
  postArray: Post[] = [];
  private postsSub: Subscription;

  ngOnInit() {
    this.postArray = this.postService.getPosts();
    this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.postArray = posts
    });
  }

  // ngOnDestroy(){
  //   this.postsSub.unsubscribe();
  // }


}
