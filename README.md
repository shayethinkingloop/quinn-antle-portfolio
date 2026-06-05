# Quinn Antle — Portfolio Site

## Folder Structure

```
portfolio/
├── index.html          ← Home page (interleaved gallery)
├── drawing.html        ← Drawing gallery
├── painting.html       ← Painting gallery
├── cv.html             ← CV text page
├── bio.html            ← Bio text page
├── contact.html        ← Contact text page
├── config.js           ← ⭐ THE ONLY FILE QUINN EDITS
├── css/
│   └── style.css       ← All styles
├── js/
│   └── gallery.js      ← Gallery rendering logic (do not edit)
└── images/
    ├── drawings/        ← Drop drawing image files here
    └── paintings/       ← Drop painting image files here
```

---

## What Quinn Can Edit Herself

Open `config.js` in any text editor. Everything she might need to change is there:

- **Artist name, birth year** — top of the file
- **CTA button text and email** — `ctaText` and `ctaEmail`
- **CV, Bio, Contact text** — `cv`, `bio`, `contact` fields
- **Add/remove artworks** — add a line to `drawings` or `paintings` arrays, then drop the image file in the corresponding `images/` folder

### Adding a new artwork (example)
1. Save the file as `my-new-drawing.jpg` into `images/drawings/`
2. In `config.js`, find the `drawings` array and add:
   ```
   { title: "My New Drawing", size: "18 x 24", file: "my-new-drawing.jpg" },
   ```
3. Save `config.js`. Done.

---

## GitHub Pages Deployment Checklist

1. Create a new GitHub repository (e.g. `quinn-portfolio`)
2. Push all files in this folder to the `main` branch
3. Go to repo Settings → Pages → Source: `main` branch, `/ (root)`
4. Add a `CNAME` file to the repo root containing just the custom domain:
   ```
   quinnantleart.com
   ```
5. In your DNS provider (Cloudflare), add these A records pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   And a CNAME record: `www` → `yourusername.github.io`
6. In Cloudflare, set the proxy status to **DNS only** (grey cloud, not orange)
   so GitHub Pages can issue the Let's Encrypt certificate.
7. Back in GitHub Pages settings, check "Enforce HTTPS" once the cert is issued
   (usually within a few minutes, sometimes up to 24 hours).

---

## Image Guidelines for Quinn

- **Format:** JPG is fine for photos/artwork. PNG if the image has transparency.
- **Size:** Aim for under 1MB per image. Resize to ~2000px on the longest edge.
  A free tool: [squoosh.app](https://squoosh.app)
- **File names:** lowercase, no spaces, use hyphens.
  Good: `red-vase-2024.jpg`  Bad: `Red Vase 2024.jpg`
- **Folders:** drawings go in `images/drawings/`, paintings in `images/paintings/`

---

## Google Fonts Note

The site loads three fonts from Google Fonts (IM Fell English, Libre Baskerville, DM Sans).
This requires an internet connection to render correctly. If you ever want to go fully
offline/CDN-free, download the font files and switch to `@font-face` declarations.
# quinn-antle-portfolio
# quinn-antle-portfolio
# quinn-antle-portfolio
