import { Header } from '../header/header.js';
import { Main } from '../serie.main/main.js';
import { List } from '../serie.list/list.js';
import { series } from '../../mocks/series.js';

const seriesNoWatched = series.filter((element) => element.watched === false);
const seriesWatched = series.filter((element) => element.watched === true);
export class App {
    constructor() {
        try {
            new Header('.root');
            new Main('.root');
            new List('[name="list"]', seriesNoWatched);
            new List('[name="list-watched"]', seriesWatched);
        } catch (error) {
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;
            else message = String(error);
        }
    }
}
