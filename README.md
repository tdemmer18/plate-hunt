# Plate Hunt

A road trip license plate game for iPad (works on phones too). Spot a plate, tap it, and it moves to **Captured** while the count at the top goes up. Switch to **Map** to see which parts of the country you've covered. When a trip ends, tap **Finish trip & log it** and the trip is saved with its dates in the **Trips** standings, ranked by plates found.

**Play:** https://tdemmer18.github.io/plate-hunt/

## Install on iPad (works offline)

1. Open the link above in **Safari** while you have internet.
2. Tap the **Share** button, then **Add to Home Screen**.
3. Open Plate Hunt from the home screen icon once so it saves itself.

After that it runs full screen with no internet at all. Progress is saved on the iPad.

## How it's built

Plain HTML, CSS and JavaScript with no build step. State and province facts and team lists live in `info.js`, extra learning content in `learn.js`, and outline drawings (from Natural Earth and the U.S. Census, both public domain) in `shapes.js`. `sw.js` is a service worker that caches every file for offline play. The fonts are stored in the repo, so nothing loads from the internet.

To publish changes, edit the files, bump `VERSION` in `sw.js`, and push to `main`.
