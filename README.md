# Allberto's Mexican Kitchen — Website

One-page website for Allberto's Mexican Kitchen, 1900 Airport Road, Breckenridge, Colorado.

This is a plain static site — no build step, no framework. What's in the folder is exactly what gets served.

## Folder layout

```
index.html        The whole page (text, menu, prices live here)
css/styles.css    All styling (colors, fonts, layout)
js/main.js        Scroll effects (parallax + fade-in reveals)
images/           Dish photos (birria, tlayuda, elote, churros)
```

## How to make common updates

- **Change a price or menu item:** open `index.html`, find the dish name, edit the text.
- **Change hours / phone / address:** open `index.html` and search for the old value — it appears in the header, the Visit section, and the footer.
- **Add the "Our Kitchen" photo:** save the photo as `images/kitchen.jpg`, then in `index.html` replace the `story-photo` placeholder block (search for `OUR KITCHEN · PHOTO`).
- **Swap a dish photo:** drop the new photo in `images/` and update the matching filename in `index.html`. Keep photos under ~300 KB for fast loading.

## Publishing changes

The site deploys automatically from GitHub via Vercel. Any change committed to the
`main` branch goes live within about a minute.

Accessibility note: all scroll motion (parallax, marquee, reveals) is disabled
automatically for visitors with "reduce motion" enabled in their system settings.
