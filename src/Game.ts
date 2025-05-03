import { Player } from './Player';
import { Maze } from './Maze';

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
const maze = new Maze();
const player = new Player(13, 23);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.font = '16px monospace';
  ctx.fillText(`Score: ${player.score}`, 10, 20);
  maze.draw(ctx);
  player.update(maze);
  player.draw(ctx);
  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', (e) => {
  player.handleInput(e.key);
});

gameLoop();
