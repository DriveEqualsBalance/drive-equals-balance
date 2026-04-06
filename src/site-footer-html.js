import { PARTNER_EMAIL } from './site-constants.js'

/**
 * Shared site footer.
 * @param {object} opts
 * @param {string} opts.assetBase import.meta.env.BASE_URL
 * @param {string} opts.homeUrl Trailing slash home URL
 * @param {'home' | 'project-r1'} opts.currentPage Subpages get a Home link in the meta line
 */
export function getSiteFooterHtml({ assetBase, homeUrl, currentPage }) {
  const partnerEmail = PARTNER_EMAIL
  const threeCols = partnerEmail ? ' site-footer__inner--three-cols' : ''
  const partnerHref = `${homeUrl}#partner`

  const contactSection = partnerEmail
    ? `<section class="site-footer__block site-footer__block--contact" aria-labelledby="footer-contact-heading">
      <h2 id="footer-contact-heading">Contact</h2>
      <a
        href="mailto:${partnerEmail}"
        class="site-footer__contact-link">
        <svg class="site-footer__contact-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#email-icon"></use></svg>
        <span class="site-footer__contact-email">${partnerEmail}</span>
      </a>
    </section>`
    : ''

  const metaHtml =
    currentPage === 'home'
      ? `<p class="site-footer__meta">© Drive Equals Balance</p>`
      : `<p class="site-footer__meta">© Drive Equals Balance · <a href="${homeUrl}" class="site-footer__home-link">Home</a></p>`

  return `
<footer class="site-footer">
  <div class="site-footer__inner${threeCols}">
    <section class="site-footer__block" aria-labelledby="footer-partners-heading">
      <h2 id="footer-partners-heading">Partners</h2>
      <div class="site-footer__partner-links">
        <a
          href="https://passmastersmct.co.uk/"
          class="site-footer__partner-link"
          target="_blank"
          rel="noopener noreferrer">
          Pass Masters Motorcycle Training
        </a>
        <a href="${partnerHref}" class="site-footer__collab-link">
          Partner with Drive Equals Balance
        </a>
      </div>
    </section>
    <section class="site-footer__block site-footer__block--social" aria-labelledby="footer-social-heading">
      <h2 id="footer-social-heading">Social</h2>
      <ul class="site-footer__social-list">
        <li>
          <a
            href="https://www.youtube.com/@driveequalsbalance"
            class="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer">
            <svg class="site-footer__social-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
            <span>YouTube</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/drive.equals.balance"
            class="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer">
            <svg class="site-footer__social-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#instagram-icon"></use></svg>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@driveequalsbalance?sub_confirmation=1"
            class="site-footer__social-link"
            target="_blank"
            rel="noopener noreferrer">
            <svg class="site-footer__social-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#subscribe-icon"></use></svg>
            <span>Subscribe on YouTube</span>
          </a>
        </li>
      </ul>
    </section>
    ${contactSection}
  </div>
  ${metaHtml}
</footer>`
}
