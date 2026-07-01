# the Venkatesh — Portfolio

A dark, terminal/hacker-styled personal portfolio site (red on black) built with
plain HTML/CSS/JS — no build step, no framework. Ready for GitHub Pages.

## 📁 Files in this repo

```
thevenkatesh.github.io/
├── index.html          → all page content (About, Skills, Experience, Certs, Freelance, Contact)
├── style.css            → all styling (colors, layout, responsive rules)
├── script.js             → mobile nav, terminal typing effect, image fallbacks
├── .nojekyll              → tells GitHub Pages to serve files as-is
├── assets/
│   ├── banner.jpg          → hero banner image (placeholder included)
│   └── portrait.jpg          → about-me portrait, 4:3 (placeholder included)
└── README.md
```

## 🚀 How to publish on GitHub Pages

1. Create a **new repository** on GitHub named exactly:
   ```
   thevenkatesh.github.io
   ```
   (This exact name — `<username>.github.io` — is what makes GitHub Pages serve
   it automatically at the root domain.)
2. Upload **all files in this folder**, keeping the `assets/` folder structure intact.
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch
   `main`, folder `/ (root)`. Save.
5. Wait 1–2 minutes, then visit:
   ```
   https://thevenkatesh.github.io
   ```

## 🖼️ Replacing the placeholder images

Two placeholder images are already in `assets/` so the site looks correct the
moment you publish it. Swap them out with your own photos, **keeping the exact
same filenames**:

| File | Purpose | Recommended size |
|---|---|---|
| `assets/banner.jpg` | Hero/banner image at the top of the page | ~2400×1029px (wide, ~21:9). The frame auto-adjusts to a taller crop on mobile automatically — you don't need a separate mobile image. |
| `assets/portrait.jpg` | About-me photo | 4:3 ratio, e.g. 1200×900px |

Just drag your new files into `assets/` in GitHub's web uploader (or via git),
overwriting the old ones with the same names.

## ✏️ Editing your content

All text lives in `index.html`, in plain readable sections:
- `#about` — your bio
- `#skills` — the four skill category cards
- `#experience` — the timeline (Ecaps, LTM)
- `#certifications` — CEH v11, SC-300, SC-900, Kaspersky Next EDR
- `#freelance` — your consulting/mentoring offerings
- `#contact` — update the placeholder email, LinkedIn, and GitHub links near the bottom of the file

No build tools required — just edit and re-upload.

## 🎨 Design notes

- Fonts: **Share Tech Mono** (headings/terminal) + **IBM Plex Mono** (body), loaded from Google Fonts.
- Palette: black background (`#0a0a0a`), signal red (`#ff1f3d`), off-white (`#f2f2ee`) — deliberately restrained to two accent colors, hacker/security-console aesthetic in the spirit of Hak5.
- Section headers use real terminal commands (`whoami`, `ls -la /skills/`, `history`, `cat certifications.log`, `man mentorship`, `ssh venkatesh@network`) tied to what each section actually contains.
- Fully responsive: banner reflows from a wide 21:9 crop on desktop to a taller 4:5 crop on mobile; nav collapses into a toggle menu below 820px.
