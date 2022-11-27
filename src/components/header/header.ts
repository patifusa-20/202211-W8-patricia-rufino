import { Component } from '../component/component.js';

export class Header extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
        <header class="main-header">
            <h1 class="main-title">My Series</h1>
        </header>;
        `;
    }
}
