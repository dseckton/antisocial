import { Post } from '../feed/post/post.model';

export class Friend {
    public id: string;
    public name: string;
    public location: string;
    public bday: string;
    public picUrl: string;
    // public posts: string[];
    // public comments: string[];
    // public friends: string[];

    constructor(id: string, name: string, location: string, bday: string, picUrl: string) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.bday = bday;
        this.picUrl = picUrl;
        // this.posts = posts;
        // this.comments = comments;
        // this.friends = friends;
    }
}