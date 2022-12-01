import { Component } from '../component/component.js';
import { DataSerieType, Serie } from '../../models/serie.js';
import { series } from '../../mocks/series.js';
import { Score } from '../serie.score/score.js';

const handleRate = (event: Event) => {
    const rateElement = event.target as HTMLUListElement;
    console.log(rateElement);
};
export class Item extends Component {
    isWatched: boolean;
    constructor(private selector: string, private itemSerie: Serie) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
        this.listenerRate();
        this.isWatched = this.changeValue(itemSerie);
        this.createScore();
    }

    createScore() {
        try {
            new Score(`${this.selector} li .score`, this.itemSerie);
        } catch (error) {
            console.log((error as Error).message);
        }
    }

    changeValue(itemSerie: Serie) {
        console.log(itemSerie.name + ' ' + itemSerie.watched);
        return true;
    }

    listenerRate() {
        const scoreList = document.querySelectorAll('.score') as NodeList;
        scoreList.forEach((item) => {
            item.addEventListener('click', handleRate);
        });
    }

    createTemplate() {
        let itemsTemplate = '';
        itemsTemplate += `
                <li class="serie">
                    <img
                        class="serie__poster"
                        src="${this.itemSerie.poster}"
                        alt="${this.itemSerie.name} poster"
                    />
                    <h4 class="serie__title">${this.itemSerie.name}</h4>
                    <p class="serie__info">${this.itemSerie.creator} (${this.itemSerie.year})</p>
                    <ul class="score">
                    </ul>
                    <i class="fas fa-times-circle icon--delete"></i>
                </li>
            `;
        return itemsTemplate;
    }
}
