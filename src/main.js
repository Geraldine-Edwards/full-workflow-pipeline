
// Entry point: reads source text from #app, generates ASCII via figlet, and renders back into #app.
// Import logic for rendering
import { renderApp } from './render.js';
import figlet from 'figlet';

// Find the app mount element. Its initial text content is used as the banner source.
const el = document.getElementById('app');

// Render with real-time timestamp and figlet-generated ASCII art.
const bannerText = el?.textContent?.trim() || 'Hello CI';
renderApp(el, {
    bannerText,
    asciiRenderer: (text) => figlet.textSync(text)
});
