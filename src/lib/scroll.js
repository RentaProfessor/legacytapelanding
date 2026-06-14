// Smooth-scroll to an element by id, but fall back to an instant jump when
// the user has asked the OS to reduce motion (WCAG 2.3.3). CSS scroll-behavior
// does not cover programmatic scrollIntoView, so guard it here.
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
}
