import { Serie } from '../../models/serie.js';
import { Component } from '../component/component.js';

export class Score extends Component {
    constructor(selector: string, private itemSerie: Serie) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
        <li class="score__star">
        ${
            this.itemSerie.watched === false
                ? `<i class="icon--score far fa-star" title="1/5"></i>`
                : `<i class="icon--score fas fa-star" title="1/5"></i>`
        }
            
        </li>
        `;
    }
}
