import { Component } from '../component/component.js';

export class Score extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        return `
            
        `;
    }
}
