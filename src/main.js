import './style.css'
import heroImg from './assets/logo.png'
import r1CoverImg from './assets/r1-cover.JPG'
import { initSiteNav } from './init-site-nav.js'
import { getSiteNavHtml } from './site-nav-html.js'
import { getSiteFooterHtml } from './site-footer-html.js'
import { getPartnerSectionHtml } from './partner-section-html.js'

const assetBase = import.meta.env.BASE_URL
const homeUrl = assetBase.endsWith('/') ? assetBase : `${assetBase}/`
const r1SeriesPageUrl = `${assetBase}r1-series.html`

/** YouTube IDs from the watch URL (…watch?v=____). Swap in four of your lesson clips. */
const lessonGalleryVideos = [
  { id: 'NJ5Tj8oeJBc', title: 'Drive Equals Balance — Mod 1' },
  { id: '9nMNcVSNirk', title: 'Drive Equals Balance — Mod 1 Tips' },
  { id: 'FxTKuOzO-vU', title: 'Drive Equals Balance — Show Me Tell Me Part 1' },
  { id: 'xb3ZrO0oppk', title: 'Drive Equals Balance — Show Me tell Me Part 2' },
]

/** First three videos from UK Motorcycle Mod 2 Test Routes playlist. */
const MOD2_TEST_ROUTES_PLAYLIST =
  'https://www.youtube.com/playlist?list=PLd22z6xjHbud0v3VgYPixM1ic3NxxoZOV'

const testRouteGalleryVideos = [
  {
    id: 'sMQ6GmbscqQ',
    title: 'Module 2 Uxbridge test centre route 2026 — commentary ride 1',
  },
  {
    id: 'f4rNteWHkag',
    title: 'Redditch Mod 2 test route — tips to pass first time',
  },
  {
    id: 'IWmG9Z2b8lE',
    title: 'Mod 2 at Garretts Green — test route with commentary',
  },
]

function buildLessonsGalleryHtml(videos) {
  return videos
    .map(
      (video, index) => `
    <div class="lessons-gallery__item" role="listitem">
      <div class="lessons-gallery__embed">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${video.id}"
          title="${video.title.replace(/"/g, '&quot;')}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="${index === 0 ? 'eager' : 'lazy'}"></iframe>
      </div>
    </div>`
    )
    .join('')
}

const lessonsGalleryHtml = buildLessonsGalleryHtml(lessonGalleryVideos)

const testRoutesGalleryHtml =
  buildLessonsGalleryHtml(testRouteGalleryVideos) +
  `
    <div class="lessons-gallery__item" role="listitem">
      <a
        href="${MOD2_TEST_ROUTES_PLAYLIST}"
        class="lessons-gallery__cta-card"
        target="_blank"
        rel="noopener noreferrer">
        <svg class="lessons-gallery__cta-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
        <span class="lessons-gallery__cta-label">Watch more on YouTube</span>
      </a>
    </div>`

document.querySelector('#app').innerHTML = `
${getSiteNavHtml({
  heroImg,
  homeUrl,
  r1SeriesPageUrl,
  currentPage: 'home',
})}
<section id="center" class="hero-container">
  <div class="hero-bg" aria-hidden="true">
    <video class="hero-background" autoplay muted loop playsinline preload="auto">
      <source src="${assetBase}hero-background.mov" type="video/quicktime">
      <source src="${assetBase}hero-background.mov">
    </video>
    <div class="hero-bg-overlay"></div>
  </div>
  <div class="hero-main">
    <p class="hero-eyebrow">Drive Equals Balance</p>
    <h1>Motorcycle training that builds real road confidence</h1>
    <p class="hero-lede">Practical coaching for balance, control, and calm riding, whether you&rsquo;re starting out or leveling up.</p>
  </div>
  <ul class="hero-ctas">
    <li><a href="https://passmastersmct.co.uk/course/" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Book a Lesson</a></li>
    <li><a href="#lessons" class="btn btn--secondary">Watch Free Lessons</a></li>
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

<section id="project-r1" class="featured featured--teaser" aria-labelledby="project-r1-heading">
  <div class="featured__inner">
    <p class="mission__eyebrow">Project R1</p>
    <h2 id="project-r1-heading" class="mission__title">Full A licence on a Yamaha R1</h2>
    <div class="mission__grid">
      <div class="mission__copy">
        <div class="featured__teaser-body mission__body">
          <p>
            <strong>Project R1</strong> follows real training toward a full UK licence on a Yamaha R1, filmed with Francis Noakes from <a href="https://www.youtube.com/@drivingschooltv" class="featured__inline-link" target="_blank" rel="noopener noreferrer">Driving School TV</a>. If you want to see what Mod 1, Mod 2, and road riding look like on a superbike, tune in on YouTube.
          </p>
          <p class="featured__teaser-cta">
            <a href="${r1SeriesPageUrl}" class="btn btn--primary">About Project R1</a>
          </p>
        </div>
      </div>
      <div class="mission__media">
        <a
          href="${r1SeriesPageUrl}"
          class="featured__teaser-link"
          aria-label="About Project R1 (opens Project R1 page)">
          <img
            class="featured__teaser-cover"
            src="${r1CoverImg}"
            alt="Project R1: Yamaha R1"
            width="800"
            height="450"
            decoding="async"
            loading="lazy">
        </a>
      </div>
    </div>
  </div>
</section>

<section id="mission" class="mission" aria-labelledby="mission-heading">
  <div class="mission__inner">
    <h2 id="mission-heading" class="mission__title">My Mission</h2>
    <div class="mission__grid">
      <div class="mission__copy">
        <div class="mission__body">
          <p>I&rsquo;m Dan, a motorcycle training instructor and passionate rider, and my mission is simple: to help you become a confident, capable, and safe motorcyclist, not just pass a test. I break down every part of riding into clear, practical steps so you can understand what you&rsquo;re doing, why it matters, and how to improve.</p>
          <p>Whether you&rsquo;re starting with your CBT, moving through A1 or A2, or going all the way to a full licence with DAS, I&rsquo;ll guide you through it in a way that&rsquo;s straightforward, supportive, and built around you as an individual.</p>
          <p>Drive Equals Balance is about more than training, it&rsquo;s about building real confidence, proper control, and a mindset that keeps you safe on the road long after your test is done.</p>
        </div>
      </div>
      <div class="mission__media">
        <div class="mission__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dsiLphjd0XM"
            title="Drive Equals Balance — mission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="ticks"></div>

<section id="lessons" class="lessons" aria-labelledby="lessons-heading">
  <div class="lessons__inner">
    <h2 id="lessons-heading" class="lessons__title">Lessons</h2>
    <div class="lessons__grid">
      <div class="lessons__copy">
        <p class="free-lesson-lede">Watch full free lessons, real drills you can use on your next ride.</p>
        <ul class="value-bullets">
          <li>Slow-speed control and tight turns</li>
          <li>Clutch and throttle balance</li>
          <li>Confidence for traffic and real roads</li>
        </ul>
      <a
        href="https://www.youtube.com/@driveequalsbalance/videos"
        class="watch-all-videos"
        target="_blank"
        rel="noopener noreferrer">
        <svg class="watch-all-videos__icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
        <span>Watch all videos on YouTube</span>
      </a>
      </div>
      <div class="lessons__media">
        <div class="video-container">
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/42WVzo9OBtU"
            title="Drive Equals Balance — free motorcycle lesson on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
    <div class="lessons-gallery" aria-labelledby="lessons-gallery-heading">
      <h3 id="lessons-gallery-heading" class="lessons-gallery__title">More lessons</h3>
      <div
        class="lessons-gallery__scroller"
        tabindex="0"
        role="list"
        aria-label="More lesson videos — scroll horizontally">
        ${lessonsGalleryHtml}
      </div>
    </div>
    <div class="lessons-gallery" aria-labelledby="test-routes-gallery-heading">
      <h3 id="test-routes-gallery-heading" class="lessons-gallery__title">Test routes</h3>
      <div
        class="lessons-gallery__scroller"
        tabindex="0"
        role="list"
        aria-label="Test route videos and YouTube link — scroll horizontally">
        ${testRoutesGalleryHtml}
      </div>
    </div>
  </div>
</section>

${getPartnerSectionHtml({ assetBase })}

${getSiteFooterHtml({
  assetBase,
  homeUrl,
  currentPage: 'home',
})}
`

const heroVideo = document.querySelector('#center .hero-background')
if (heroVideo) {
  heroVideo.muted = true
  heroVideo.defaultMuted = true
  heroVideo.setAttribute('playsinline', '')
  heroVideo.play().catch(() => {
    /* Autoplay may be blocked until interaction; muted usually allows play */
  })
  heroVideo.addEventListener('error', () => {
    console.warn(
      'Hero background video failed to load or decode. If you use Chrome/Firefox, export an H.264 .mp4 to public/hero-background.mp4 — .mov often only works reliably in Safari.'
    )
  })
}

initSiteNav()