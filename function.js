var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Game rendering and logic (Pac-Man, ghosts, etc.)
        requestAnimationFrame(gameLoop);  // Run next frame
    }

    gameLoop();  // Start the game loop

document.addEventListener("keydown", function(event) {
    if (event.key == "ArrowLeft") {
        // Move Pac-Man left
    } else if (event.key == "ArrowRight") {
        // Move Pac-Man right
    }
});
