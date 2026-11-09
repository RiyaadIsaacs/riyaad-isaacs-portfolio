(function () {
  const path = window.location.pathname.replace(/\\/g, "/");
  const inProjects = path.includes("/projects/");
  const root = inProjects ? "../" : "./";

  const page =
    path.endsWith("/about.html") || path.endsWith("about.html")
      ? "about"
      : path.endsWith("/contact.html") || path.endsWith("contact.html")
        ? "contact"
        : inProjects || path.endsWith("/projects/")
          ? "projects"
          : "home";

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <div class="container nav">
        <a class="brand" href="${root}index.html">Riyaad<span>-</span>Isaacs</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        <ul class="nav-links" id="site-nav">
          <li><a href="${root}index.html"${page === "home" ? ' aria-current="page"' : ""}>Home</a></li>
          <li><a href="${root}index.html#projects"${page === "projects" ? ' aria-current="page"' : ""}>Projects</a></li>
          <li><a href="${root}about.html"${page === "about" ? ' aria-current="page"' : ""}>About</a></li>
          <li><a href="${root}contact.html"${page === "contact" ? ' aria-current="page"' : ""}>Contact</a></li>
        </ul>
      </div>
    `;

    const toggle = header.querySelector(".nav-toggle");
    const links = header.querySelector(".nav-links");
    toggle?.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-row">
        <p>© ${new Date().getFullYear()} Riyaad Isaacs · Programmer &amp; game developer</p>
        <p>
          <a href="https://riyaad-isaacs.co.za">riyaad-isaacs.co.za</a>
          ·
          <a href="mailto:Riyaad3lhjigh@gmail.com">Email</a>
          ·
          <a href="https://www.linkedin.com/in/riyaad-isaacs-9a6b0637a/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </p>
      </div>
    `;
  }

  document.querySelectorAll("[data-qr]").forEach((el) => {
    const url = el.getAttribute("data-qr");
    if (!url || url === "#" || url.includes("PLACEHOLDER")) {
      el.innerHTML = `<div class="qr-placeholder">Add final URL to generate QR</div>`;
      return;
    }
    const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(url)}`;
    el.innerHTML = `<img src="${src}" alt="QR code linking to ${url}" width="220" height="220" loading="lazy">`;
  });
})();
