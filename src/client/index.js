import { Game } from './game/Game.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    window.game = new Game({
        canvas: '#canvas'
    });
});