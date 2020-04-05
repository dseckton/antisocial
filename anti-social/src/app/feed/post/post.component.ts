import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { FriendService } from 'src/app/friends/friend.service';

@Component({
  selector: 'anti-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;

  constructor(private postService: PostService, private friendService: FriendService, ) { }

  currentUser = this.friendService.currentUser.name;
  editMode: boolean = false;

  ngOnInit() {
  }

  onDelete(postTime: string) {
    this.postService.deletePost(postTime);
  }

  onEdit(postTime: string) {
    this.postService.isEditing = true;
    this.editMode = true;
  }

  onSave(postTime: string, postAuthor, postAuthorPic) {
    let textarea = document.querySelector("textarea.update");
    let newText = textarea.innerHTML;
    this.postService.updatePost(postTime, newText, postAuthor, postAuthorPic);
    this.postService.isEditing = false;
    this.editMode = false;
  }

}
