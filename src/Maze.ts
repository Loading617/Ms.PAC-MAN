export class Maze {
    grid: number[][] = [
      [1,1,1,1,1],
      [1,0,0,0,1],
      [1,0,1,0,1],
      [1,0,0,0,1],
      [1,1,1,1,1]
    ];
  
    tileSize = 32;
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'blue';
      for (let y = 0; y < this.grid.length; y++) {
        for (let x = 0; x < this.grid[y].length; x++) {
          if (this.grid[y][x] === 1) {
            ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
          }
        }
      }
    }
  
    isWall(x: number, y: number): boolean {
      return this.grid[y]?.[x] === 1;
    }
  }
  