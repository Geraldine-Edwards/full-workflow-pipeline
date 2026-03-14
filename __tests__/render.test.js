
/** @jest-environment jsdom */

// Tests a function in the app
import { renderApp } from '../src/render.js';

test('renderApp injects ASCII art and rendered date', () => {
  document.body.innerHTML = '<div id="app"></div>';
  const el = document.getElementById('app');
  const fixedNow = () => '2026-03-11 10:00';
  const asciiRenderer = (text) => `ASCII:${text}`;

  renderApp(el, {
    bannerText: 'Workshop',
    now: fixedNow,
    asciiRenderer
  });

  expect(el.querySelector('pre[aria-label="ascii-art"]')).not.toBeNull();
  expect(el.textContent).toContain('ASCII:Workshop');
  expect(el.textContent).toContain('Rendered at: 2026-03-11 10:00');
  expect(el.querySelectorAll('p').length).toBe(1);
});
