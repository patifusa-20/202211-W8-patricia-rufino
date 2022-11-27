import { Component } from '../component/component.js';
import { series } from '../../mocks/series.js';

export class Item extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
    }
    createTemplate() {
        // Filtrar array por series NO vistas
        const seriesNoWatched = series.filter(
            (element) => element.watched === false
        );
        let itemsTemplate = '';
        seriesNoWatched.forEach((element) => {
            itemsTemplate += `
                <li class="serie">
                    <img
                        class="serie__poster"
                        src="${element.poster}"
                        alt="${element.name} poster"
                    />
                    <h4 class="serie__title">${element.name}</h4>
                    <p class="serie__info">${element.creator} (${element.year})</p>
                    <ul class="score">
                        <li class="score__star">
                            <i class="icon--score far fa-star" title="1/5"></i>
                        </li>
                        <li class="score__star">
                            <i class="icon--score far fa-star" title="2/5"></i>
                        </li>
                        <li class="score__star">
                            <i class="icon--score far fa-star" title="3/5"></i>
                        </li>
                        <li class="score__star">
                            <i class="icon--score far fa-star" title="4/5"></i>
                        </li>
                        <li class="score__star">
                            <i class="icon--score far fa-star" title="5/5"></i>
                        </li>
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>
            `;
        });
        return itemsTemplate;
    }
}
