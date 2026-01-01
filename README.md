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

## Preventing the pimples from overlapping

So when a pimple appears, the position needs to be compared to every previous pimple so that the positions don't overlap (considering that each pimple is 50 x 50 px).

### Things that need to be considered to make the pimple collision detection work

- minimum seperation distance: since each pimple is 50x50,a distance of 70x70 will make sure there's a 20px distance and so forth. I'll try 60 first and see how that goes.
- put the working pimples in an array: every successfully placed pimple gets put in an array for comparing
- make position to check after: when making a random position for a pimple, either enter that in a loop or make a recursive call that checks the current pimple position to any stored position in the pimple loop
- if overlapping, position needs to be redone: if a current pimple position is too close to an existing position in the array, get rid of it to make a new one, repeat until good spot made.

### Distance (separation) formula

Standard formula for distance is useful here which makes sense in hindsight.
'''
d=sqrt( (x2 -x1)^2 + (y2-y1)^2 )
'''

If distance calculated from formula is less than minimum, we have an overlap

### First attempt at collision detector: FAILED

- #### Incorrect var ref in collision check (looks like the main issue)

* inside the while loop, it looks like the wrong name got referrenced. I was calling a method when i meant to call an array to the isOverlap method. So typo basically since the names are similar

- #### Wrong counter in attempt to place pimples loop

* I wasn't iterating the right counter inside one of the loops to count the number of attempts made to place the pimples correctly. So another typo

### Attempt at using modules to export timerCountdown to screenEffects: FAILED

- Gonna have to try global funcs to see what that does
- Global functions work but will have to find another way to go about it later

### Timer Stop func

- only seems to work properly the first time
- AFter a pause doesn't work
- after redoing it doesn't seem to work either

The easiest way I saw to make the stop button work is just take out the functionality that makes it go back to main screen after stopping the timer. It might have to do with how js likes to do things strictly in order and the stop button did too many things. So i just added a back button appear after the timer is stopped.

## making the pimple buttons make the score go up

### i can't see the score

Since the score display is on a querySelectAll it's going to be an array-like object (i have mulitple things that need to display score). Looks like textContent doesn't like this since it's basically a node list. So I gotta specify the p inside the score div display i guess

### a click on pimple make score go up and user sees it

the click handler for the pimple click is correct i needed to update the html display after the score changes (which i did not do woops).

### What should help

make a function to handle score display to streamline the updating display in 2 different displays instead of queryselectorall since that doesn't like textcontent.

### to make the pimples disappear when clicked

add a pimple.remove() inside the click handler
