import { Component } from '../component/component.js';
import { DataSerieType, Serie } from '../../models/serie.js';
import { series } from '../../mocks/series.js';

const handleRate = (event: Event) => {
    const rateElement = event.target as HTMLUListElement;
    return console.log(rateElement);
};

export class Item extends Component {
    constructor(selector: string, element: Serie) {
        super();
        this.template = this.createTemplate(element);
        this.addRender(selector);
        this.listenerRate();
    }

    listenerRate() {
        // Versión con todos
        // const scoreList = document.querySelectorAll('.score');
        // scoreList.forEach((item) => {
        //     item.addEventListener('click', handleRate);
        // });
        const scoreItem = document.querySelector('.score');
    }

    createTemplate(element: Serie) {
        let itemsTemplate = '';
        // seriesList.forEach((element) => {
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
        // });
        return itemsTemplate;
    }
}
