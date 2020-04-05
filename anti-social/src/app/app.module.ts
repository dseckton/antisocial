import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedComponent } from './feed/feed.component';
import { FriendsComponent } from './friends/friends.component';
import { PostComponent } from './feed/post/post.component';
import { NewComponent } from './feed/post/new/new.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './profile/edit/edit.component';
import { FriendComponent } from './friends/friend/friend.component';
import { MyPostComponent } from './profile/my-post/my-post.component';
import { CommentComponent } from './feed/post/comment/comment.component';
import { AddCommentComponent } from './feed/post/comment/add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './feed/post/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedComponent,
    FriendsComponent,
    PostComponent,
    NewComponent,
    ProfileComponent,
    EditComponent,
    FriendComponent,
    MyPostComponent,
    CommentComponent,
    AddCommentComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
