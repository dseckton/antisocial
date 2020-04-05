import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'anti-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newPost = '';

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement) {
    this.postService.addPost(postInput.value);
  }
}
