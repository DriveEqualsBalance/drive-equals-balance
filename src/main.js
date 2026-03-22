import './style.css'
import heroImg from './assets/logo.png'

const assetBase = import.meta.env.BASE_URL

document.querySelector('#app').innerHTML = `
<section id="center" class="hero-container">
  <div class="hero-bg" aria-hidden="true">
    <video class="hero-background" autoplay muted loop playsinline preload="auto">
      <source src="${assetBase}hero-background.mov" type="video/quicktime">
      <source src="${assetBase}hero-background.mov">
    </video>
    <div class="hero-bg-overlay"></div>
  </div>
  <div class="hero">
    <img src="${heroImg}" class="base" alt="Drive Equals Balance">
  </div>
  <div class="hero-main">
    <p class="hero-eyebrow">Drive Equals Balance</p>
    <h1>Motorcycle training that builds real road confidence</h1>
    <p class="hero-lede">Practical coaching for balance, control, and calm riding, whether you&rsquo;re starting out or leveling up.</p>
  </div>
  <ul class="hero-ctas">
    <li><a href="https://passmastersmct.co.uk/course/" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Book a Lesson</a></li>
    <li><a href="https://www.youtube.com/@driveequalsbalance" class="btn btn--secondary">Watch Free Lessons</a></li>
  </ul>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="start-here">
    <h2>Start Here (Free Lesson)</h2>
    <p class="free-lesson-lede">Try a full free lesson, real drills you can use on your next ride.</p>
    <ul class="value-bullets">
      <li>Slow-speed control and tight turns</li>
      <li>Clutch and throttle balance</li>
      <li>Confidence for traffic and real roads</li>
    </ul>
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
  <div id="social">
    <h2>Connect with Me</h2>
    <p>Join the Drive Equals Balance community</p>
    <ul class="social-links">
      <li>
        <a href="https://www.youtube.com/@driveequalsbalance" target="_blank" rel="noopener noreferrer" class="social-link social-link--youtube">
          <svg class="button-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#youtube-icon"></use></svg>
          <span class="social-link__label">Watch on YouTube</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/drive.equals.balance" target="_blank" rel="noopener noreferrer" class="social-link social-link--instagram">
          <svg class="button-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#instagram-icon"></use></svg>
          <span class="social-link__label">Follow on Instagram</span>
        </a>
      </li>
    </ul>
    <ul class="social-links social-links--single">
      <li>
        <a href="https://www.youtube.com/@driveequalsbalance?sub_confirmation=1" target="_blank" rel="noopener noreferrer" class="social-link social-link--subscribe">
          <svg class="button-icon" role="presentation" aria-hidden="true"><use href="${assetBase}icons.svg#subscribe-icon"></use></svg>
          <span class="social-link__label">Subscribe to the channel</span>
        </a>
      </li>
    </ul>
  </div>
</section>
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