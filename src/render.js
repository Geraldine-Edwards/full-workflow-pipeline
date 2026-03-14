
// View renderer: injects generated ASCII art and a minimal rendered-at timestamp.
/**
 * Renders ASCII art and timestamp into the provided element.
 * `now` and `asciiRenderer` are injected for testability.
 */
export function renderApp(
  el,
  {
    bannerText = 'Hello CI',
    now = () => new Date().toLocaleString(),
    asciiRenderer = (text) => text
  } = {}
) {
  if (!el) throw new Error('Missing target element');
  const asciiArt = asciiRenderer(bannerText);

  el.innerHTML = `
    <pre aria-label="ascii-art">${asciiArt}</pre>
    <p>Rendered at: ${now()}</p>
  `;
}
