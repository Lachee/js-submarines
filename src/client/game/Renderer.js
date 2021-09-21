import './Canvas.scss';
import V from 'victor';
import { Ping } from '../../common/Entities.js';

export class Renderer {
    canvas;

    /** @type {CanvasRenderingContext2D} ctx */
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.classList.add('game-canvas');
        this.resize();

        window.addEventListener("resize", () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }

    begin() {
        this.ctx = this.canvas.getContext('2d');
        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    end() {}

    /**
     * Draws a radar ping with the given radius
     * @param {Ping} ping 
     */
    drawPing(ping) {
        const ctx = this.ctx;
        ctx.beginPath();

        ctx.strokeStyle = '#00FF00';
        ctx.lineWidth = 2 * (1.0 - ping.progression);
        ctx.arc(ping.origin.x, ping.origin.y, ping.radius, 0, 360, false);
        ctx.stroke();
    }
}