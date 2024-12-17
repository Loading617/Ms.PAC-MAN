#include <SDL2/SDL.h>

void handleInput(SDL_Event& e) {
    if (e.type == SDL_KEYDOWN || e.type == SDL_KEYUP) {
        if (e.key.keysym.sym == SDLK_LEFT) {
            // Move Ms. Pac-Man left
        }
        if (e.key.keysym.sym == SDLK_RIGHT) {
            // Move Ms. Pac-Man right
        }
        if (e.key.keysym.sym == SDLK_UP) {
            // Move Ms. Pac-Man up
        }
        if (e.key.keysym.sym == SDLK_DOWN) {
            // Move Ms. Pac-Man down
        }
    }
}
