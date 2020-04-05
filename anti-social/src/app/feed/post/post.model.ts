import { Friend } from 'src/app/friends/friend.model';

export class Post {
    public time: string;
    public author: {
        name: string,
        picUrl: string
    };
    public content: string;
    public comments: Comment[];

    constructor(time: string, author: {name: string, picUrl: string}, content: string, comments: Comment[]) {
        this.time = time;
        this.author = author;
        this.content = content;
        this.comments = comments;
    }
}