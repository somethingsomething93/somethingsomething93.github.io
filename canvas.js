// ── LOADER CANVAS ──
(function initLoaderCanvas() {
  const canvas = document.getElementById('loader-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, nodes = [], tick = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function spawnNodes() {
    nodes = [];
    const count = Math.floor((W * H) / 18000);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        sides: [3, 4, 6][Math.floor(Math.random() * 3)],
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
      });
    }
  }

  function drawPoly(x, y, r, sides, rot) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = rot + (i / sides) * Math.PI * 2;
      const px = x + Math.cos(a) * r;
      const py = y + Math.sin(a) * r;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    tick++;

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.rot += n.rotSpeed;
      if (n.x < -20) n.x = W + 20;
      if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20;
      if (n.y > H + 20) n.y = -20;

      const glow = 0.08 + 0.04 * Math.sin(tick * 0.02 + n.x);
      ctx.strokeStyle = `rgba(155,77,223,${glow})`;
      ctx.lineWidth = 0.6;
      drawPoly(n.x, n.y, n.r * 6, n.sides, n.rot);
      ctx.stroke();
    });

    // connecting lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(91,45,142,${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.4;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  }

  let animId;
  function loop() { draw(); animId = requestAnimationFrame(loop); }

  resize();
  spawnNodes();
  loop();
  window.addEventListener('resize', () => { resize(); spawnNodes(); });

  window._stopLoaderCanvas = () => cancelAnimationFrame(animId);
})();


// ── BACKGROUND CANVAS ──
(function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, mouse = { x: -9999, y: -9999 }, tick = 0;
  let shapes = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    spawnShapes();
  }

  function spawnShapes() {
    const count = Math.max(18, Math.floor((W * H) / 22000));
    shapes = [];
    for (let i = 0; i < count; i++) {
      shapes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        baseX: 0,
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 22 + 8,
        sides: [3, 4, 6][Math.floor(Math.random() * 3)],
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        opacity: Math.random() * 0.06 + 0.02,
        filled: Math.random() > 0.7,
      });
      shapes[i].baseX = shapes[i].x;
      shapes[i].baseY = shapes[i].y;
    }
  }

  function drawPoly(x, y, r, sides, rot) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = rot + (i / sides) * Math.PI * 2;
      const px = x + Math.cos(a) * r;
      const py = y + Math.sin(a) * r;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    tick++;

    shapes.forEach(s => {
      // drift
      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.rotSpeed;

      if (s.x < -60) s.x = W + 60;
      if (s.x > W + 60) s.x = -60;
      if (s.y < -60) s.y = H + 60;
      if (s.y > H + 60) s.y = -60;

      // mouse repulsion
      const dx = s.x - mouse.x;
      const dy = s.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulse = 140;
      let rx = s.x, ry = s.y;

      if (dist < repulse && dist > 0) {
        const force = (repulse - dist) / repulse;
        rx = s.x + (dx / dist) * force * 28;
        ry = s.y + (dy / dist) * force * 28;
      }

      const pulse = s.opacity + 0.012 * Math.sin(tick * 0.018 + s.x * 0.01);
      ctx.globalAlpha = Math.max(0, pulse);

      const color = dist < repulse
        ? `rgba(176,106,255,${pulse * 2})`
        : `rgba(91,45,142,${pulse})`;

      if (s.filled) {
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${pulse * 0.5})`);
        drawPoly(rx, ry, s.size, s.sides, s.rot);
        ctx.fill();
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      drawPoly(rx, ry, s.size, s.sides, s.rot);
      ctx.stroke();
      ctx.globalAlpha = 1;
    });
  }

  requestAnimationFrame(function loop() {
    draw();
    requestAnimationFrame(loop);
  });

  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
  window.addEventListener('resize', resize);

  resize();
})();
