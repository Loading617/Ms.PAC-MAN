import { Maze } from './Maze';

export class Player {
  x: number;
  y: number;
  dir: [number, number] = [0, 0];
  tileSize = 32;
  color = 'yellow';

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  handleInput(key: string) {
    switch (key) {
      case 'ArrowUp': this.dir = [0, -1]; break;
      case 'ArrowDown': this.dir = [0, 1]; break;
      case 'ArrowLeft': this.dir = [-1, 0]; break;
      case 'ArrowRight': this.dir = [1, 0]; break;
    }
  }

  update(maze: Maze) {
    const nextX = this.x + this.dir[0];
    const nextY = this.y + this.dir[1];
    if (!maze.isWall(nextX, nextY)) {
      this.x = nextX;
      this.y = nextY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x * this.tileSize + this.tileSize / 2,
      this.y * this.tileSize + this.tileSize / 2,
      this.tileSize / 2 - 2,
      0, Math.PI * 2
    );
    ctx.fill();
  }
}
