import { Component } from '../component/component.js';
import { series } from '../../mocks/series.js';

// Cambiar mensaje
const messageNoWatchedSeries = () => {
    const seriesNoWatched = series.filter(
        (element) => element.watched === false
    );
    if (!seriesNoWatched) {
        return `<p class="info">Congrats! You've watched all your series</p>`;
    } else {
        return `<p class="info">You have ${seriesNoWatched.length} series pending to watch</p>`;
    }
};
const messageWatchedSeries = () => {
    const seriesWatched = series.filter((element) => element.watched === true);
    if (!seriesWatched) {
        return `<p class="info">You already have not watched any serie</p>`;
    } else {
        return `<p class="info">You have watched  ${seriesWatched.length} series</p>`;
    }
};

export class List extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.addRender(selector);
    }
    createTemplate() {
        return `
            <main class="main">
                <section class="series">
                    <h2 class="section-title">Series list</h2>
                    <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        ${messageNoWatchedSeries()}
                        <ul class="series-list"></ul>
                    </section>
                    <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        ${messageWatchedSeries()}                        
                        <ul class="series-list series-list--watched"></ul>
                    </section>
                </section>
            </main>
        `;
    }
}
