import { Component } from '../component/component.js';
import { DataSerieType, Serie } from '../../models/serie.js';
import { Item } from '../serie.item/item.js';

// Cambiar mensaje
const messageNoWatchedSeries = (seriesList: Array<DataSerieType>) => {
    let itemsTemplate = `<section class="series-pending">
                <h3 class="subsection-title">Pending series</h3>`;
    if (seriesList.length === 0) {
        return (itemsTemplate += `<p class="info">Congrats! You've watched all your series</p>`);
    } else {
        return (itemsTemplate += `<p class="info">You have ${seriesList.length} series pending to watch</p>`);
    }
};
const messageWatchedSeries = (seriesList: Array<DataSerieType>) => {
    let itemsTemplate = `<section class="series-watched">
    <h3 class="subsection-title">Watched series</h3>`;
    if (seriesList.length === 0) {
        return (itemsTemplate += `<p class="info">You already have not watched any serie</p>`);
    } else {
        return (itemsTemplate += `<p class="info">You have watched  ${seriesList.length} series</p>`);
    }
};

export class List extends Component {
    constructor(selector: string, seriesList: Array<DataSerieType>) {
        super();
        this.template = this.createTemplate(seriesList);
        this.addRender(selector);
        setTimeout(() => {
            try {
                new Item(`${selector} .series-list`, seriesList);
            } catch (error) {
                let message = 'Unknown Error';
                if (error instanceof Error) message = error.message;
                else message = String(error);
            }
        }, 100);
    }
    createTemplate(seriesList: Array<DataSerieType>) {
        let itemsTemplate = '';
        const isListWatched = (element: Serie) => element.watched === false;
        const isWatched = seriesList.every(isListWatched);
        itemsTemplate += `            
                    ${
                        isWatched
                            ? messageNoWatchedSeries(seriesList)
                            : messageWatchedSeries(seriesList)
                    }
                <ul class="series-list">
                </ul>
            </section>
        `;
        return itemsTemplate;
    }
}
