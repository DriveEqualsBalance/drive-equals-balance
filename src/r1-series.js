import './style.css'
import heroImg from './assets/logo.png'
import r1CoverImg from './assets/r1-cover.JPG'
import rncLogo from './assets/rnc-logo.png'
import passmastersLogo from './assets/PassmastersMC.webp'
import macnaLogo from './assets/macna-logo.svg'
import { initSiteNav } from './init-site-nav.js'
import { getSiteNavHtml } from './site-nav-html.js'
import { getSiteFooterHtml } from './site-footer-html.js'
import { getPartnerSectionHtml } from './partner-section-html.js'

const assetBase = import.meta.env.BASE_URL
const homeUrl = assetBase.endsWith('/') ? assetBase : `${assetBase}/`
const r1SeriesPageUrl = `${assetBase}r1-series.html`

/** First episode or trailer (leave empty to show channel links only). */
const r1SeriesYoutubeVideoId = ''

const watchSectionMediaHtml = r1SeriesYoutubeVideoId
  ? `<div class="mission__media">
      <div class="mission__video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${r1SeriesYoutubeVideoId}"
          title="Project R1: full A licence on a Yamaha R1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    </div>`
  : `<div class="mission__media">
      <div class="featured__placeholder">
        <a
          href="https://www.youtube.com/@driveequalsbalance/videos"
          class="watch-all-videos"
          target="_blank"
          rel="noopener noreferrer">
          <svg class="watch-all-videos__icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
          <span>Watch on Drive Equals Balance</span>
        </a>
        <a
          href="https://www.youtube.com/@drivingschooltv/videos"
          class="featured__collab-link"
          target="_blank"
          rel="noopener noreferrer">
          Driving School TV, Francis Noakes
        </a>
      </div>
    </div>`

document.querySelector('#app').innerHTML = `
${getSiteNavHtml({
  heroImg,
  homeUrl,
  r1SeriesPageUrl,
  currentPage: 'project-r1',
})}
<section id="center" class="hero-container hero-container--r1-cover">
  <div class="hero-bg" aria-hidden="true">
    <img
      class="hero-background hero-background--cover"
      src="${r1CoverImg}"
      alt=""
      decoding="async"
      fetchpriority="high">
    <div class="hero-bg-overlay"></div>
  </div>
  <div class="hero-main">
    <p class="hero-eyebrow">Project R1</p>
    <h1>Full A licence on a Yamaha R1</h1>
    <p class="hero-lede">Follow Dan and Francis as they train for a Full A licence on a Yamaha R1</p>
  </div>
  <ul class="hero-ctas">
    <li><a href="#watch" class="btn btn--primary">Where to watch</a></li>
    <li><a href="${homeUrl}#lessons" class="btn btn--secondary">More free lessons</a></li>
  </ul>
  <nav class="hero-social" aria-label="Social media">
    <ul>
      <li>
        <a href="https://www.youtube.com/@driveequalsbalance" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg class="hero-social__icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/drive.equals.balance" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg class="hero-social__icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#instagram-icon"></use></svg>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@driveequalsbalance?sub_confirmation=1" target="_blank" rel="noopener noreferrer" aria-label="Subscribe on YouTube">
          <svg class="hero-social__icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#subscribe-icon"></use></svg>
        </a>
      </li>
    </ul>
  </nav>
</section>

<section id="overview" class="mission" aria-labelledby="overview-heading">
  <div class="mission__inner">
    <h2 id="overview-heading" class="mission__title">What is Project R1?</h2>
    <div class="mission__grid">
      <div class="mission__copy">
        <div class="mission__body">
          <p>
            We&rsquo;re documenting the full journey from learner training toward a UK Category A licence, on a <strong>Yamaha R1</strong>, a superbike you almost never see used for licence work. That rarity is the point: honest, practical coaching on a machine that demands respect, filmed so riders can see what Mod 1, Mod 2, and real road riding actually look like when the stakes are high.
          </p>
          <p>
            The series is built for anyone revising for their tests, curious about DAS, or simply interested in how a supersport behaves when you&rsquo;re still building habits for life on the road, not just for the examiner.
          </p>
        </div>
      </div>
      <div class="mission__media">
        <div class="r1-series__fact-card" role="presentation">
          <ul class="r1-series__fact-list">
            <li><span class="r1-series__fact-label">Format</span> Five episodes, London-based</li>
            <li><span class="r1-series__fact-label">Tests</span> Mod 1 &amp; Mod 2 (full licence path)</li>
            <li><span class="r1-series__fact-label">Bike</span> Yamaha R1 (supersport)</li>
            <li><span class="r1-series__fact-label">Schedule</span> Episodes rolling through May and June 2026</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="collab" class="featured" aria-labelledby="collab-heading">
  <div class="featured__inner">
    <p class="mission__eyebrow">People</p>
    <h2 id="collab-heading" class="mission__title">Collaboration</h2>
    <div class="mission__grid">
      <div class="mission__copy">
        <div class="mission__body">
          <p>
            I&rsquo;m <strong>Dan Norford</strong>, motorcycle instructor behind Drive Equals Balance. I&rsquo;m coaching <strong>Francis Noakes</strong> from the <a href="https://www.youtube.com/@drivingschooltv" class="featured__inline-link" target="_blank" rel="noopener noreferrer">Driving School TV</a> YouTube channel through the skills, manoeuvres, and on-road judgement the DVSA expects at test standard.
          </p>
          <p>
            You get two angles in one story: structured motorcycle instruction and Francis&rsquo;s experience building educational driving content for a large audience, so the series stays useful for learners first, without losing personality or pace.
          </p>
        </div>
      </div>
      <div class="mission__media">
        <div class="mission__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dsiLphjd0XM"
            title="Drive Equals Balance: introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        <p class="r1-series__caption">More on the Drive Equals Balance approach on the <a href="${homeUrl}" class="featured__inline-link">home page</a>.</p>
      </div>
    </div>
  </div>
</section>

<section id="watch" class="mission" aria-labelledby="watch-heading">
  <div class="mission__inner">
    <h2 id="watch-heading" class="mission__title">Where to watch</h2>
    <div class="mission__grid">
      <div class="mission__copy">
        <div class="mission__body">
          <p>
            New episodes land on YouTube through 2026. Subscribe on <a href="https://www.youtube.com/@driveequalsbalance?sub_confirmation=1" class="featured__inline-link" target="_blank" rel="noopener noreferrer">Drive Equals Balance</a> so you don&rsquo;t miss a release, and follow <a href="https://www.youtube.com/@drivingschooltv" class="featured__inline-link" target="_blank" rel="noopener noreferrer">Driving School TV</a> for Francis&rsquo;s side of the collaboration.
          </p>
        </div>
      </div>
      ${watchSectionMediaHtml}
    </div>
  </div>
</section>

<section id="sponsors" class="mission r1-sponsors" aria-labelledby="sponsors-heading">
  <div class="mission__inner">
    <h2 id="sponsors-heading" class="mission__title">Sponsors</h2>
    <ul class="r1-sponsors__list" role="list">
      <li class="r1-sponsors__item">
        <a
          href="https://passmastersmct.co.uk/"
          class="r1-sponsors__link"
          target="_blank"
          rel="noopener noreferrer">
          <img
            class="r1-sponsors__logo"
            src="${passmastersLogo}"
            width="280"
            height="120"
            alt="Pass Masters Motorcycle Training">
        </a>
      </li>
      <li class="r1-sponsors__item">
        <a
          href="https://www.rncmotorcycles.co.uk/"
          class="r1-sponsors__link"
          target="_blank"
          rel="noopener noreferrer">
          <img
            class="r1-sponsors__logo"
            src="${rncLogo}"
            width="200"
            height="80"
            alt="RNC Motorcycles">
        </a>
      </li>
      <li class="r1-sponsors__item">
        <a
          href="https://www.macna.com/en"
          class="r1-sponsors__link"
          target="_blank"
          rel="noopener noreferrer">
          <img
            class="r1-sponsors__logo"
            src="${macnaLogo}"
            width="220"
            height="80"
            alt="MACNA riding gear">
        </a>
      </li>
    </ul>
  </div>
</section>

${getPartnerSectionHtml({ assetBase })}

${getSiteFooterHtml({
  assetBase,
  homeUrl,
  currentPage: 'project-r1',
})}
`

initSiteNav()
