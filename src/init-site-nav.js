/** Shared fixed nav: scroll fade (mobile), light/dark theme over sections, mobile menu. */
export function initSiteNav() {
  const siteNav = document.querySelector('.site-nav')
  const siteNavToggle = document.querySelector('.site-nav__toggle')
  const siteNavMenu = document.querySelector('.site-nav__menu')

  function syncSiteNavScrollFade() {
    if (!siteNav) return
    if (window.matchMedia('(min-width: 769px)').matches) {
      siteNav.style.removeProperty('--site-nav-bg-alpha')
      siteNav.style.removeProperty('--site-nav-blur')
      return
    }
    const y = window.scrollY || document.documentElement.scrollTop
    const t = Math.min(1, y / 420)
    const alpha = 0.72 * (1 - t) + 0.22 * t
    const blurPx = 14 * (1 - t) + 6 * t
    siteNav.style.setProperty('--site-nav-bg-alpha', String(alpha))
    siteNav.style.setProperty('--site-nav-blur', `${blurPx}px`)
  }

  function syncSiteNavPageTheme() {
    if (!siteNav) return
    const hero = document.querySelector('#center')
    const footer = document.querySelector('.site-footer')
    if (!hero) return
    const navH = siteNav.getBoundingClientRect().height
    const heroBottom = hero.getBoundingClientRect().bottom
    const pastHero = heroBottom <= navH + 1
    let overFooter = false
    if (footer) {
      const ft = footer.getBoundingClientRect()
      overFooter = ft.top < navH && ft.bottom > 0
    }
    siteNav.classList.toggle('site-nav--on-light', pastHero && !overFooter)
  }

  function closeSiteNavMenu() {
    if (!siteNav || !siteNavToggle || !siteNavMenu) return
    siteNav.classList.remove('site-nav--menu-open')
    siteNavToggle.setAttribute('aria-expanded', 'false')
    siteNavToggle.setAttribute('aria-label', 'Open page sections menu')
  }

  function onSiteNavScroll() {
    syncSiteNavScrollFade()
    syncSiteNavPageTheme()
  }

  if (siteNav) {
    window.addEventListener('scroll', onSiteNavScroll, { passive: true })
    window.addEventListener(
      'resize',
      () => {
        syncSiteNavScrollFade()
        syncSiteNavPageTheme()
      },
      { passive: true }
    )
    onSiteNavScroll()
  }

  if (siteNav && siteNavToggle && siteNavMenu) {
    siteNavToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('site-nav--menu-open')
      siteNavToggle.setAttribute('aria-expanded', String(isOpen))
      siteNavToggle.setAttribute(
        'aria-label',
        isOpen ? 'Close page sections menu' : 'Open page sections menu'
      )
    })

    siteNavMenu.querySelectorAll('a').forEach((anchor) => {
      anchor.addEventListener('click', () => closeSiteNavMenu())
    })

    document.addEventListener('click', (e) => {
      if (!siteNav.classList.contains('site-nav--menu-open')) return
      if (siteNav.contains(e.target)) return
      closeSiteNavMenu()
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSiteNavMenu()
    })
  }
}
