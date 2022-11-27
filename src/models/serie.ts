export type DataSerieType = {
    id: number;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: number;
    emmies: number;
};

export class Serie implements DataSerieType {
    static generateId() {
        return ~~Math.random() * 1_000_000;
    }
    id: number;
    watched: boolean;
    constructor(
        public name: string,
        public creator: string,
        public year: number,
        public poster: string,
        public score: number,
        public emmies: number
    ) {
        this.id = Serie.generateId();
        this.watched = false;
    }
}
