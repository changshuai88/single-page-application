import AbstractView from './AbstractView.js';

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
        <h1>Settings</h1>
        <p>会当凌绝顶，一览众山小</p>
        <p>
          <a href="/posts" data-link>Settings</a>
        </p>
        `;
    }
}