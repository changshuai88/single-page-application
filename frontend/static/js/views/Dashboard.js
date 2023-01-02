import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
        <h1>welcome back,Bob</h1>
        <p>会当凌绝顶，一览众山小</p>
        <p>长风破浪会有时，直挂云帆济沧海</p>
        <p>
          <a href="/posts" data-link>view recent posts</a>
        </p>
        `;
    }
}