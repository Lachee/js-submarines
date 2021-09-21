import V from 'victor';

export class Ping {
    /** @type {V} origin of the ping */
    origin;

    /** @type {Number} the lifetime of hte ping in ms */
    lifetime = 5000;

    /** @type {Number} the tiem the ping was created */
    created;

    /** @type {Number} the max size of the ping */
    size = 100;

    /**
     * Creates a new ping
     * @param {V} origin 
     */
    constructor(origin) {
        this.origin = origin;
        this.created = Date.now();
    }

    /** current age of the ping in ms */
    get age() {
        return Date.now() - this.created;
    }
    /** the percentage completion of the ping */
    get progression() {
        return (this.age / this.lifetime) 
    }
    /** radius of the ping */
    get radius() {
        return this.progression * this.size;
    }
}