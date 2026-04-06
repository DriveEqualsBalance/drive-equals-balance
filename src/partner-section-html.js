import { PARTNER_EMAIL } from './site-constants.js'

/**
 * Partner With Drive Equals Balance — main + aside CTAs.
 * @param {object} opts
 * @param {string} opts.assetBase import.meta.env.BASE_URL
 */
export function getPartnerSectionHtml({ assetBase }) {
  const partnerEmail = PARTNER_EMAIL
  const emailLi = partnerEmail
    ? `<li>
          <a
            href="mailto:${partnerEmail}?subject=${encodeURIComponent('Partnership — Drive Equals Balance')}"
            class="partner__cta partner__cta--email"
            aria-label="Email ${partnerEmail} about a partnership">
            <svg class="partner__cta-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#email-icon"></use></svg>
            <span class="partner__cta-text">Email</span>
          </a>
        </li>`
    : ''

  return `
<section id="partner" class="partner" aria-labelledby="partner-heading">
  <div class="partner__layout">
    <div class="partner__main">
      <h2 id="partner-heading">Partner With Drive Equals Balance</h2>
      <p class="partner__lede">Let&rsquo;s collaborate on training, content, and brand partnerships.</p>
      <div class="partner__body">
        <p>
          If you&rsquo;ve got an idea, a collaboration in mind, or you think there&rsquo;s a way we could work together, I&rsquo;d love to hear from you. Whether you&rsquo;re a brand, a training school, or a fellow creator, I&rsquo;m always open to opportunities that bring real value to riders and the community. Reach out and let&rsquo;s see what we can build together.
        </p>
      </div>
    </div>
    <aside class="partner__aside" aria-labelledby="partner-contact-heading">
      <h3 id="partner-contact-heading" class="partner__aside-title">Get in touch</h3>
      <p class="partner__aside-lede">Tell me a bit about your idea.</p>
      <ul class="partner__cta-list">
        <li>
          <a
            href="https://www.instagram.com/drive.equals.balance"
            class="partner__cta partner__cta--instagram"
            target="_blank"
            rel="noopener noreferrer">
            <svg class="partner__cta-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#instagram-icon"></use></svg>
            <span class="partner__cta-text">Message on Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@driveequalsbalance"
            class="partner__cta partner__cta--youtube"
            target="_blank"
            rel="noopener noreferrer">
            <svg class="partner__cta-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
            <span class="partner__cta-text">YouTube channel</span>
          </a>
        </li>
        ${emailLi}
      </ul>
    </aside>
  </div>
</section>`
}
