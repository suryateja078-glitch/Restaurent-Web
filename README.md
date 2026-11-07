# Surya Andhra Kitchen

Surya Andhra Kitchen is a responsive, multi-page restaurant website concept for an Andhra-style restaurant in Kurnool. It highlights the restaurant's story, menu, food photography, and table reservation experience.

## Pages

- **Home** (`Index.html`): Restaurant introduction, featured dishes, and highlights.
- **Menu** (`Menu.html`): Food and drink menu with category filters.
- **About** (`About.html`): Restaurant story, timeline, and kitchen values.
- **Gallery** (`Gallery.html`): Food and restaurant photos with an image lightbox.
- **Contact** (`Contact.html`): Restaurant details and a reservation form.

## Features

- Responsive layout with a mobile navigation menu.
- Menu category filters and an interactive gallery lightbox.
- Client-side validation for the reservation form. This demo does not send or save reservations to a server.
- Restaurant photography and icons in the `images/` folder.

## Run locally

This project uses plain HTML, CSS, and JavaScript. No dependencies or build step are required.

1. Open a terminal in the project folder.
2. Start a local web server:

   ```powershell
   py -m http.server 3000
   ```

   If the `py` command is unavailable, try:

   ```powershell
   python -m http.server 3000
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser. If needed, open the home page directly at [http://localhost:3000/Index.html](http://localhost:3000/Index.html).
4. Stop the server with `Ctrl+C` in the terminal.

## Project files

- `Index.html`, `Menu.html`, `About.html`, `Gallery.html`, `Contact.html` — website pages.
- `Styles.css` — shared page styles and responsive layout.
- `Script.js` — navigation, menu filtering, gallery, and form interactions.
- `images/` — image and icon assets.

The site loads its display fonts from Google Fonts, so an internet connection is needed for those fonts. The project is an academic/demo website; restaurant details and reservation behavior should be verified before real-world use.
