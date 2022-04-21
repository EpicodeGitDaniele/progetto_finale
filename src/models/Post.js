export default class Post{
    constructor(id, title, content, author, category,media){
        this.author = author;
        this.category = category;
        this.content = content;
        this.id = id;
        this.title = title;
        this.media=media;
    }
}