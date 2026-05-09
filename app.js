// ── DATA ──
const DATA = {
  games: [
    { name: "Shell Shockers", tag: "FPS", desc: "Browser-based multiplayer egg shooting arena. No installs.", url: "https://shellshock.io" },
    { name: "1v1.LOL", tag: "Build/Fight", desc: "Competitive building and combat. Pure reaction speed.", url: "https://1v1.lol" },
    { name: "Krunker.io", tag: "FPS", desc: "Fast pixel-art FPS. Low overhead, high skill ceiling.", url: "https://krunker.io" },
    { name: "Slope", tag: "Reflex", desc: "Infinite descent. One mistake ends the run.", url: "https://slope-game.github.io" },
    { name: "Paper.io 2", tag: "Territory", desc: "Capture the board. Eliminate rivals by crossing their trail.", url: "https://paper-io.com" },
    { name: "Agar.io", tag: "Strategy", desc: "Consume smaller cells. Avoid larger ones. Grow.", url: "https://agar.io" },
    { name: "Diep.io", tag: "Shooter", desc: "Tank evolution with branching upgrade paths.", url: "https://diep.io" },
    { name: "Wordle", tag: "Word", desc: "Six guesses. Five letters. Process of elimination.", url: "https://www.nytimes.com/games/wordle/index.html" },
  ],
  media: [
    { name: "YouTube", tag: "Video", desc: "Streaming platform. No commentary required.", url: "https://youtube.com" },
    { name: "Spotify", tag: "Audio", desc: "Music. Playlists. Playback without leaving the engine.", url: "https://open.spotify.com" },
    { name: "SoundCloud", tag: "Audio", desc: "Independent audio. Uncommon tracks.", url: "https://soundcloud.com" },
    { name: "Twitch", tag: "Live", desc: "Live streams. Real-time broadcast.", url: "https://twitch.tv" },
    { name: "NASA TV", tag: "Live", desc: "Live space agency feed. ISS telemetry. Launches.", url: "https://www.nasa.gov/nasatv" },
    { name: "Poolside.fm", tag: "Ambient", desc: "Lo-fi. Uninterrupted. For long sessions.", url: "https://poolside.fm" },
  ],
  tools: [
    { name: "Excalidraw", tag: "Diagram", desc: "Virtual whiteboard. Sketch architecture, flows, anything.", url: "https://excalidraw.com" },
    { name: "Carbon", tag: "Code", desc: "Generate styled code screenshots. Clean output.", url: "https://carbon.now.sh" },
    { name: "RegExr", tag: "Regex", desc: "Build, test, and debug regular expressions live.", url: "https://regexr.com" },
    { name: "Epoch Converter", tag: "Time", desc: "Unix timestamp to human-readable. Bidirectional.", url: "https://epochconverter.com" },
    { name: "CyberChef", tag: "Encode", desc: "Data transformation. Encode, decode, encrypt, hash.", url: "https://gchq.github.io/CyberChef/" },
    { name: "JSON Formatter", tag: "Parse", desc: "Pretty-print and validate JSON payloads.", url: "https://jsonformatter.curiousconcept.com" },
    { name: "Whois Lookup", tag: "Recon", desc: "Domain registration data. Registrar, dates, nameservers.", url: "https://whois.domaintools.com" },
    { name: "GTmetrix", tag: "Perf", desc: "Page speed and performance auditing.", url: "https://gtmetrix.com" },
  ],
};

// ── NAV ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const page = document.getElementById('page-' + id);
  if (page) page.classList.add('active');
  const link = document.querySelector(`.nav-links a[data-page="${id}"]`);
  if (link) link.classList.add('active');
}

document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    showPage(a.dataset.page);
  });
});

// ── RENDER CARDS ──
function renderSection(sectionId, items, type) {
  const grid = document.getElementById(sectionId);
  if (!grid) return;
  grid.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-tag">${item.tag}</div>
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-arrow">→</div>
    `;
    card.addEventListener('click', () => openEmbed(item.url, item.name));
    grid.appendChild(card);
  });
}

renderSection('grid-games', DATA.games, 'game');
renderSection('grid-media', DATA.media, 'media');
renderSection('grid-tools', DATA.tools, 'tool');

// ── EMBED ──
const overlay = document.getElementById('embed-overlay');
const frame = document.getElementById('embed-frame');
const embedTitle = document.getElementById('embed-title');

function openEmbed(url, name) {
  frame.src = url;
  embedTitle.textContent = name.toUpperCase();
  overlay.classList.remove('closing');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEmbed() {
  overlay.classList.add('closing');
  setTimeout(() => {
    overlay.classList.remove('open', 'closing');
    frame.src = 'about:blank';
    document.body.style.overflow = '';
  }, 320);
}

function fullscreenEmbed() {
  const win = overlay.querySelector('.embed-window');
  if (!document.fullscreenElement) {
    win.requestFullscreen?.() || win.webkitRequestFullscreen?.();
  } else {
    document.exitFullscreen?.() || document.webkitExitFullscreen?.();
  }
}

document.getElementById('btn-close').addEventListener('click', closeEmbed);
document.getElementById('btn-fullscreen').addEventListener('click', fullscreenEmbed);

overlay.addEventListener('click', e => {
  if (e.target === overlay) closeEmbed();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeEmbed();
});

// ── LOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    if (window._stopLoaderCanvas) window._stopLoaderCanvas();
    showPage('games');
  }, 2200);
});
