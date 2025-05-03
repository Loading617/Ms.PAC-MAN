export class Maze {
  grid: number[][] = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1],

    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];

  tileSize = 16;

  draw(ctx: CanvasRenderingContext2D) {
    for (let y = 0; y < this.grid.length; y++) {
      for (let x = 0; x < this.grid[y].length; x++) {
        const tile = this.grid[y][x];

        if (tile === 1) {
          ctx.fillStyle = 'blue';
          ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
        } else if (tile === 0) {
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(x * this.tileSize + this.tileSize / 2, y * this.tileSize + this.tileSize / 2, 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (tile === 2) {
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(x * this.tileSize + this.tileSize / 2, y * this.tileSize + this.tileSize / 2, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  isWall(x: number, y: number): boolean {
    return this.grid[y]?.[x] === 1;
  }

  eatPellet(x: number, y: number): number {
    const tile = this.grid[y]?.[x];
    if (tile === 0 || tile === 2) {
      this.grid[y][x] = 9;
      return tile;
    }
    return 0;
  }
}
