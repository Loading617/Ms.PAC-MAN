#include <SDL2/SDL.h>
#include <emscripten.h>

SDL_Window* window;
SDL_Renderer* renderer;

void gameLoop() {
    SDL_Event e;
    while (SDL_PollEvent(&e)) {
        if (e.type == SDL_QUIT) {
            emscripten_cancel_main_loop();
            break;
        }
        // Handle keyboard input here (movement, etc.)
    }

    SDL_RenderClear(renderer);
    // Render game objects like Pac-Man, the ghosts, etc.
    SDL_RenderPresent(renderer);
}

int main() {
    SDL_Init(SDL_INIT_VIDEO);
    window = SDL_CreateWindow("Ms. Pac-Man", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, 400, 400, SDL_WINDOW_SHOWN);
    renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);

    emscripten_set_main_loop(gameLoop, 0, 1);  // This will call gameLoop continuously
    return 0;
}
