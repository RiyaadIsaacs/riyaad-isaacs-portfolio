# Hosting & custom domain

You do **not** need to buy web hosting for this portfolio. The site is static HTML/CSS/JS.

## 1. Publish for free (do this first)

### Option A — GitHub Pages (recommended)

1. Create a GitHub account if you do not have one.
2. Create a new repository (public), e.g. `riyaad-isaacs-portfolio`.
3. From this folder, push the site:

```bash
git init
git add .
git commit -m "Initial Riyaad Isaacs portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/riyaad-isaacs-portfolio.git
git push -u origin main
```

4. On GitHub: **Settings → Pages → Build and deployment**.
5. Set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
6. After a minute, open `https://YOUR_USERNAME.github.io/riyaad-isaacs-portfolio/`.

If the repo is named `YOUR_USERNAME.github.io`, the site will live at the root domain instead of a subpath.

### Option B — Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in (GitHub login is fine).
2. **Add new site → Import an existing project** (or drag-and-drop this folder).
3. No build command needed. Publish directory: site root.
4. You get a free URL like `random-name.netlify.app`.

## 2. Buy a custom domain (optional, but POE-recommended)

A **domain** is only the name people type (`riyaad-isaacs.com`). It is separate from hosting.

| You buy | Approx. cost | Purpose |
| --- | --- | --- |
| Domain name only | ~R150–R300 / year | Professional URL for cards, poster QR, LinkedIn |
| Hosting | R0 | Already free on GitHub Pages / Netlify |
| HTTPS / SSL | R0 | Issued automatically by the host |

Suggested registrars: Namecheap, Google Domains / Squarespace Domains, Cloudflare Registrar. Students with the [GitHub Student Developer Pack](https://education.github.com/pack) may get a free `.me` year via Namecheap education.

Good names to check: `riyaad-isaacs.com`, `riyaadisaacs.com`, `riyaad-isaacs.me`.

**Buy the domain only after the free URL works.**

## 3. Point the domain at GitHub Pages

1. In the repo: **Settings → Pages → Custom domain** → enter `riyaad-isaacs.com` → Save.
2. GitHub shows the DNS records you need (usually `A` records for the apex and/or a `CNAME` for `www`).
3. At your registrar’s DNS panel, add exactly those records.
4. Wait for DNS (minutes to a few hours). Tick **Enforce HTTPS** when it becomes available.
5. Optional: add a `CNAME` file in this repo root containing your domain (GitHub often creates this for you).

### Netlify custom domain

**Domain management → Add domain** → follow Netlify’s DNS instructions (often a single `CNAME` or their nameservers).

## 4. After the live URL exists

Update on every project page:

- Demo video links + `data-qr="https://..."` attributes
- Download links + matching `data-qr` values
- Contact email / LinkedIn on `contact.html`
- Business cards, A2 poster QR, and LinkedIn featured section

QR codes on project pages generate automatically from `data-qr` via a public QR API when a real URL is set.
