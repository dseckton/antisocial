import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../post.model';

@Component({
  selector: 'anti-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }



}
