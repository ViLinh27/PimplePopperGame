# PimplePopperGame

I want to make a pimple popper browser game because there's apparently so many fake ads that show those things. Plus I thougt it would be fun.

---

# Plan

Since this is going to be an in browser game it's going to be a mix of HTML, CSS and Javascript

## HTML

For the structure and holding asset stuff. Skin of the face, pimple buttons and pus. All assets will be drawn by me.

## CSS

Make screens look pretty and hopefully make sure pimple buttons have a "squishy feel"

## JS

Actual game logic will be done here. Which include:

- mouse click detections (for pops probably)
- making the pimples appear/disappear (simple animations probably)
- Scoring (points per pop)
- Timer (let's make this timed for replayability)
- difficulty (save for later)

---

# Libraries to consdier using after the basics are down

## Phaser.js

- Popular for 2d games
- Helps simplify physics, sprites and input handling for browser games apparently

## PixJS

- Rendering visuals (high performance apparently)
- good for smooth detailed visuals

---

# Credits

Font: Pixelify Sans from fonts.google.com

---

# Issues

## Only 1 pimple showing up randomly on the face instead of 5 and the interval disappearing doesn't seem to work

There was a typo, instead of using the actually defined maxH to help get the random Y position for a pimple, I used maxY instead (which is never defined.)
