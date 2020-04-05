import { Component, OnInit } from '@angular/core';
import { FriendService } from './friend.service';
import { Friend } from './friend.model';

@Component({
  selector: 'anti-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private friendService: FriendService) { }

  friendArray: Friend[] = [];

  addThing() {
    this.friendService.addFriend();
  }

  ngOnInit() {
    this.friendArray = this.friendService.getFriends();
    this.friendService.getFriendUpdateListener().subscribe((friends: Friend[]) => {
      this.friendArray = friends;
    })
  }

}
