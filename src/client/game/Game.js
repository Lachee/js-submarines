import { Renderer } from "./Renderer.js";
import { Ping } from "../../common/Entities.js";
import V from 'victor';

export class Game {
    canvas;
    renderer;
    _previousFrameTimestamp = 0;

    pings = [];

    constructor(options = {}) {
        // Setup canvas
        const canvas = options.canvas ?? '#canvas';
        this.canvas = (typeof canvas) === 'string' ? document.querySelector(canvas) : canvas;
        this.canvas.game = this;

        // Setup renderer
        this.renderer = new Renderer(this.canvas);

        this._previousFrameTimestamp = Date.now();
        const _internalUpdate = function(timestamp) {
            const delta = timestamp - this._previousFrameTimestamp;
            this._previousFrameTimestamp = timestamp;    
            this.update(delta);
            window.requestAnimationFrame(_internalUpdate.bind(this));
        }
        window.requestAnimationFrame(_internalUpdate.bind(this));


        const ping = new Ping(new V(250, 250));
        this.pings.push(ping);
    }

    update(deltaTime) {
        this.renderer.begin();
        for(let ping of this.pings) 
            this.renderer.drawPing(ping);
        this.renderer.end();
    }

}