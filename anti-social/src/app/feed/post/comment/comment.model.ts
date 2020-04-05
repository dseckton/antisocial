export class Comment {
    public post: string;
    public time: string;
    public author: string;
    public content: string;

    constructor(post: string, time: string, author: string, content: string) {
        this.post = post;
        this.time = time;
        this.author = author;
        this.content = content;
    }
}