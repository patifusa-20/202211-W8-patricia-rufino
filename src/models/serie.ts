export type DataSerieType = {
    id: string;
    name: string;
    creator: string;
    year: number;
    poster: string;
    isWatched: boolean;
    score: number;
    emmies: number;
};

export class Serie implements DataSerieType {
    static generateId() {
        return String(~~Math.random() * 1_000_000);
    }
    id: string;
    isWatched: boolean;
    constructor(
        public name: string,
        public creator: string,
        public year: number,
        public poster: string,
        public score: number,
        public emmies: number
    ) {
        this.id = Serie.generateId();
        this.isWatched = false;
    }
}
