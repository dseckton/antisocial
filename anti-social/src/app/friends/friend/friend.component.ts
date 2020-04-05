import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend.model';

@Component({
  selector: 'anti-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  constructor(private friendService: FriendService) { }

  friends: Friend[] = [];

  ngOnInit() {
    this.friends = this.friendService.getFriends();
    this.friendService.getFriendUpdateListener().subscribe((friends: Friend[]) => {
      this.friends = friends;
    })
  }


}
