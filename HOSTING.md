# Hosting & custom domain (Xneelo)

**Domain purchased:** `riyaad-isaacs.co.za` (Xneelo)  
**Showcase video:** https://youtu.be/JTp2ZXE9Sso  

You already own the **domain**. You still need free **hosting** for the HTML files, then point Xneelo DNS at that host.

---

## 1. Publish the site for free (do this first)

### Option A — GitHub Pages (recommended)

Your GitHub account: [github.com/RiyaadIsaacs](https://github.com/RiyaadIsaacs)

1. Create a **public** repo named `riyaad-isaacs-portfolio` (or `RiyaadIsaacs.github.io` for a root site).
2. From this folder (already committed locally):

```bash
git branch -M main
git remote add origin https://github.com/RiyaadIsaacs/riyaad-isaacs-portfolio.git
git push -u origin main
```

3. GitHub → **Settings → Pages**
4. Source: **Deploy from a branch** → `main` → `/ (root)` → Save
5. Confirm the free URL works: `https://riyaadisaacs.github.io/riyaad-isaacs-portfolio/`

Note: GitHub Pages URLs use your username in **lowercase**: `riyaadisaacs.github.io`.

### Option B — Netlify

1. Drag this folder into [netlify.com](https://www.netlify.com) (or connect the GitHub repo).
2. No build command. Publish the site root.
3. Confirm the `*.netlify.app` URL works.

---

## 2. Connect `riyaad-isaacs.co.za` in Xneelo

Log into **Xneelo** → open the domain **riyaad-isaacs.co.za** → **DNS management** (sometimes called Zone / DNS records).

### If using GitHub Pages

1. In the GitHub repo: **Settings → Pages → Custom domain** → enter:

   `riyaad-isaacs.co.za`

   Save. GitHub will look for DNS records.

2. In Xneelo DNS, add / update:

| Type | Name / Host | Value |
| --- | --- | --- |
| **A** | `@` (or blank / `riyaad-isaacs.co.za`) | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `riyaadisaacs.github.io` |

Your GitHub user is **RiyaadIsaacs**, so the Pages hostname is `riyaadisaacs.github.io`.

3. Remove any old A/CNAME records that conflict (parking pages, default Xneelo web hosting pointers).
4. Wait 15 minutes–a few hours. In GitHub Pages, tick **Enforce HTTPS** when it appears.
5. This repo already includes a `CNAME` file with `riyaad-isaacs.co.za` for Pages.

Official reference: [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### If using Netlify

1. Netlify → Domain management → **Add custom domain** → `riyaad-isaacs.co.za`
2. Netlify shows the exact DNS records (often):

| Type | Name | Value |
| --- | --- | --- |
| **A** or **ALIAS** | `@` | Netlify load-balancer IP / ALIAS target they show |
| **CNAME** | `www` | `your-site.netlify.app` |

3. Enter those in Xneelo DNS exactly as Netlify displays them.
4. Enable HTTPS in Netlify (automatic once DNS verifies).

---

## 3. Quick checks

- [ ] Free host URL loads the portfolio
- [ ] `http://riyaad-isaacs.co.za` opens the same site
- [ ] `https://riyaad-isaacs.co.za` shows a padlock
- [ ] `www.riyaad-isaacs.co.za` redirects or loads correctly
- [ ] QR codes / business cards use `https://riyaad-isaacs.co.za`

---

## Notes

- **Do not upload** `Showcase.mp4` to the website (it is ~1.4 GB). Use the YouTube link already embedded on the home page and project QR codes.
- Domain renewals stay with **Xneelo**; hosting stays free on GitHub/Netlify unless you later buy Xneelo web hosting (not required for this static site).
- DNS typos are the #1 delay — copy values carefully and wait before changing them again.
