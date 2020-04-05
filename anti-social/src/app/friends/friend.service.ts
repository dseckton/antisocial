import { Injectable } from '@angular/core';
import { Friend } from './friend.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }

  currentUser: Friend = {
    id: "1585953794537",
    name: "Jimmy Rothberg",
    location: "Orlando, FL",
    bday: "May 12, 1956",
    picUrl: "https://image.shutterstock.com/image-photo/happy-old-man-senior-thumbs-260nw-128829979.jpg"
  }

  friends: Friend[] = [];
  friendsUpdated = new Subject<Friend[]>();

  getFriends() {
    this.http.get<{message: String, friends: Friend[]}>("http://localhost:3000/friends").subscribe((data) => {
      this.friends = data.friends;
      this.friendsUpdated.next([...this.friends])
    });
    return [...this.friends];
  }

  getFriendUpdateListener() {
    return this.friendsUpdated.asObservable();
  }

  addFriend() {
    const friend: Friend = {
      id: Date.now().toString(),
      name: "Eddie Wu",
      location: "Los Angeles, CA",
      bday: "December 12, 1952",
      picUrl: "https://images.freeimages.com/images/small-previews/7f0/old-man-1561812.jpg"
    }

    this.http.post<{message: string}>("http://localhost:3000/friends", friend).subscribe((data) => {
      this.friends.push(friend);
      this.friendsUpdated.next([...this.friends])
    })
  }




}
