/**
 * Shared site navigation (same links on every page).
 * @param {object} opts
 * @param {string} opts.heroImg Resolved URL from import of logo
 * @param {string} opts.homeUrl Trailing slash, e.g. `/` or `/repo/`
 * @param {string} opts.r1SeriesPageUrl e.g. `/r1-series.html`
 * @param {'home' | 'project-r1'} opts.currentPage Highlights Project R1 when on that page
 */
export function getSiteNavHtml({ heroImg, homeUrl, r1SeriesPageUrl, currentPage }) {
  const projectR1Current =
    currentPage === 'project-r1' ? ' aria-current="page"' : ''

  return `
<header class="site-nav">
  <div class="site-nav__bar">
    <a
      href="${homeUrl}#center"
      class="site-nav__brand"
      aria-label="Drive Equals Balance — top of page">
      <img src="${heroImg}" width="100" height="100" alt="" decoding="async">
    </a>
    <button
      type="button"
      class="site-nav__toggle"
      aria-expanded="false"
      aria-controls="site-nav-menu"
      aria-label="Open page sections menu">
      <span class="site-nav__toggle-bars" aria-hidden="true">
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
        <span class="site-nav__toggle-bar"></span>
      </span>
    </button>
    <nav class="site-nav__menu" id="site-nav-menu" aria-label="Site">
      <ul class="site-nav__list">
        <li><a href="${homeUrl}#mission">Mission</a></li>
        <li><a href="${homeUrl}#lessons">Lessons</a></li>
        <li><a href="${r1SeriesPageUrl}"${projectR1Current}>Project R1</a></li>
        <li><a href="${homeUrl}#partner" class="site-nav__link--cta">Partner</a></li>
      </ul>
    </nav>
  </div>
</header>`
}
