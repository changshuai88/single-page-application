import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <h1>Posts</h1>
        <p>PostsPostsPostsPostsPostsPostsPostsPostsPosts</p>
        <p>
          <a href="/posts" data-link>view recent posts</a>
        </p>
        `;
    }
}