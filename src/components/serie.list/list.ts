import { Component } from '../component/component.js';
import { Serie } from '../../models/serie.js';
import { Item } from '../serie.item/item.js';
import { initSeries } from '../../mocks/series.js';

export class List extends Component {
    series: Array<Serie>;
    filteredList: Array<Serie>;
    constructor(selector: string) {
        super();
        this.series = initSeries();
        this.filteredList = this.filterList(selector);
        this.template = this.createTemplate();
        this.addRender(selector);
        this.createItems(selector);
    }

    filterList(selector: string) {
        let filteredList = [];
        if (selector === '[name="list"]') {
            filteredList = this.series.filter(
                (element) => element.watched === false
            );
            return filteredList;
        } else {
            filteredList = this.series.filter(
                (element) => element.watched === true
            );
            return filteredList;
        }
    }

    createItems(selector: string) {
        this.filteredList.forEach((element: Serie) => {
            try {
                console.dir(new Item(`${selector} .series-list`, element));
            } catch (error) {
                console.log((error as Error).message);
            }
        });
    }

    messageNoWatchedSeries = () => {
        let itemsTemplate = `<section class="series-pending"><h3 class="subsection-title">Pending series</h3>`;
        if (this.filteredList.length === 0) {
            itemsTemplate += `<p class="info">Congrats! You've watched all your series</p>`;
        } else {
            itemsTemplate += `<p class="info">You have ${this.filteredList.length} series pending to watch</p>`;
        }
        return itemsTemplate;
    };
    messageWatchedSeries = () => {
        let itemsTemplate = `<section class="series-watched"><h3 class="subsection-title">Watched series</h3>`;
        if (this.filteredList.length === 0) {
            itemsTemplate += `<p class="info">You already have not watched any serie</p>`;
        } else {
            itemsTemplate += `<p class="info">You have watched  ${this.filteredList.length} series</p>`;
        }
        return itemsTemplate;
    };
    createTemplate() {
        let itemsTemplate = '';
        const isListWatched = (element: Serie) => element.watched === false;
        const isWatched = this.filteredList.every(isListWatched);
        itemsTemplate += `            
                    ${
                        isWatched
                            ? this.messageNoWatchedSeries()
                            : this.messageWatchedSeries()
                    }                   
                <ul class="series-list"></ul>
            </section>
        `;
        return itemsTemplate;
    }
}
