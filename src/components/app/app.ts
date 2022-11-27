import { Header } from '../header/header.js';
import { Item } from '../serie.item/item.js';
import { ItemWatched } from '../serie.item/item.watched.js';
import { List } from '../serie.list/list.js';

export class App {
    constructor() {
        new Header('.root');
        new List('.root');
        new Item('.series-list');
        new ItemWatched('.series-list--watched');
    }
}
