---
layout: bare
title: Home
---
<link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">

<!-- NAVBAR -->
<nav class="navbar">
  <div class="logo"><strong>Timothy Maina</strong></div>
  <div class="nav-links">
    <a href="/" class="nav-active">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     HERO
════════════════════════════════════════════ -->
<section class="h-hero">
  <!-- Particle canvas -->
  <canvas id="particles" aria-hidden="true"></canvas>
  <div class="h-hero__grid" aria-hidden="true"></div>
  <div class="h-orb h-orb--1" aria-hidden="true"></div>
  <div class="h-orb h-orb--2" aria-hidden="true"></div>

  <div class="h-hero__inner">
    <div class="h-hero__badge">
      <span class="h-badge__dot"></span>
      Available for hire · Nairobi, Kenya
    </div>

    <h1 class="h-hero__title">
      Turning raw data into<br>
      <span class="typewriter-wrap"><em id="typewriter"></em><span class="tw-cursor">|</span></span>
    </h1>

    <p class="h-hero__sub">
      I'm <strong>Timothy Maina</strong> — a Data Analyst who bridges the gap
      between raw numbers and strategic clarity. I surface the patterns that
      matter, build the dashboards that inform, and train the models that predict —
      so teams can stop guessing and start deciding with confidence.
    </p>

    <div class="h-hero__actions">
      <a href="/projects" class="h-btn h-btn--primary">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4"/></svg>
        View My Work
      </a>
      <a href="/contact" class="h-btn h-btn--ghost">Let's Talk</a>
    </div>

    <div class="h-trust">
      <div class="h-trust__item">
        <span class="h-trust__num counter" data-target="3" data-suffix="+">0</span>
        <span class="h-trust__label">Projects Shipped</span>
      </div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item">
        <span class="h-trust__num counter" data-target="3" data-suffix="">0</span>
        <span class="h-trust__label">Core Disciplines</span>
      </div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item">
        <span class="h-trust__num">24h</span>
        <span class="h-trust__label">Response Time</span>
      </div>
    </div>
  </div>

  <!-- Scroll cue -->
  <div class="h-scroll-cue" aria-hidden="true">
    <span>Scroll</span>
    <div class="h-scroll-cue__track"><div class="h-scroll-cue__dot"></div></div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     WHAT I DO
════════════════════════════════════════════ -->
<section class="h-section reveal-section">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">What I Do</p>
      <h2>Where data meets <em>impact</em></h2>
    </div>
    <div class="h-pillars">
      <div class="h-pillar reveal-up" style="--d:.05s">
        <div class="h-pillar__icon">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        </div>
        <h3>Data Analytics</h3>
        <p>Cleaning, exploring, and modelling datasets to surface trends and answer the business questions that actually matter.</p>
        <div class="h-pillar__tools">
          <span>Python</span><span>SQL</span><span>Pandas</span><span>Excel</span>
        </div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.15s">
        <div class="h-pillar__icon">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
        </div>
        <h3>Dashboards &amp; Visualisation</h3>
        <p>Building interactive dashboards that give stakeholders a clear, real-time view of performance without needing to ask for a report.</p>
        <div class="h-pillar__tools">
          <span>Power BI</span><span>Plotly</span><span>Seaborn</span><span>Tableau</span>
        </div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.25s">
        <div class="h-pillar__icon">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <h3>Machine Learning</h3>
        <p>Training and evaluating predictive models — from customer churn to fraud detection — with a focus on results non-technical stakeholders can act on.</p>
        <div class="h-pillar__tools">
          <span>scikit-learn</span><span>XGBoost</span><span>K-Means</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FEATURED PROJECTS — editorial card layout
════════════════════════════════════════════ -->
<section class="h-section h-section--alt reveal-section">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">Selected Work</p>
      <h2>Projects that <em>prove the point</em></h2>
      <p class="h-section-sub">Each project was built to solve a real problem. Click any card to read the full case study.</p>
    </div>

    <div class="proj-editorial">

      <!-- Featured large card -->
      <a href="/projects#sales-dashboard" class="proj-feat reveal-up" style="--d:.05s">
        <div class="proj-feat__img">
          <div class="proj-feat__chrome"><span></span><span></span><span></span></div>
          <div class="proj-feat__screen">
            <img src="{{ '/images/sales-dashboard.png' | relative_url }}" alt="Superstore Sales Dashboard">
          </div>
          <div class="proj-feat__overlay">
            <span class="proj-feat__overlay-text">View Case Study →</span>
          </div>
          <div class="proj-feat__number">01</div>
        </div>
        <div class="proj-feat__body">
          <div class="proj-feat__tags">
            <span class="tag">Visualization</span>
            <span class="tag tag--outline">Tableau</span>
            <span class="tag tag--outline">Excel</span>
            <span class="tag tag--outline">Time Series</span>
          </div>
          <h3>Superstore Sales Executive Dashboard</h3>
          <p>An executive-level command centre that combines four years of sales data with ARIMA/Prophet forecasting — turning spreadsheet chaos into a single, decision-ready view.</p>
          <div class="proj-feat__footer">
            <span class="proj-feat__cta">Read case study →</span>
            <span class="proj-feat__status proj-feat__status--done">✓ Completed</span>
          </div>
        </div>
      </a>

      <!-- Two smaller cards stacked -->
      <div class="proj-sm-col">

        <a href="/projects#customer-analysis" class="proj-sm reveal-up" style="--d:.15s">
          <div class="proj-sm__number">02</div>
          <div class="proj-sm__img">
            <div class="proj-sm__chrome"><span></span><span></span><span></span></div>
            <div class="proj-sm__screen">
              <img src="{{ '/images/customer-analysis.png' | relative_url }}" alt="Customer Churn">
            </div>
            <div class="proj-sm__overlay"><span>View →</span></div>
          </div>
          <div class="proj-sm__body">
            <div class="proj-sm__tags">
              <span class="tag">Analytics</span>
              <span class="tag tag--outline">Python</span>
              <span class="tag tag--outline">scikit-learn</span>
            </div>
            <h3>Customer Churn Analysis</h3>
            <p>RFM segmentation + logistic regression to flag at-risk customers and drive targeted retention.</p>
            <div class="proj-sm__footer">
              <span class="proj-sm__cta">Read case study →</span>
              <span class="proj-feat__status proj-feat__status--done">✓ Done</span>
            </div>
          </div>
        </a>

        <a href="/projects#fraud-detection" class="proj-sm reveal-up" style="--d:.25s">
          <div class="proj-sm__number">03</div>
          <div class="proj-sm__img">
            <div class="proj-sm__chrome"><span></span><span></span><span></span></div>
            <div class="proj-sm__screen">
              <img src="{{ '/images/fraud-dashboard.png' | relative_url }}" alt="Fraud Detection">
            </div>
            <div class="proj-sm__overlay"><span>View →</span></div>
          </div>
          <div class="proj-sm__body">
            <div class="proj-sm__tags">
              <span class="tag">Machine Learning</span>
              <span class="tag tag--outline">Random Forest</span>
            </div>
            <h3>Fraud Detection Command Centre</h3>
            <p>Behavioural ML pipeline + Tableau command centre to catch fraudulent transactions in real time.</p>
            <div class="proj-sm__footer">
              <span class="proj-sm__cta">Read case study →</span>
              <span class="proj-feat__status proj-feat__status--wip">⚡ In Progress</span>
            </div>
          </div>
        </a>

      </div>

      <!-- Coming soon accent card -->
      <div class="proj-coming reveal-up" style="--d:.35s">
        <div class="proj-coming__inner">
          <div class="proj-coming__icon">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </div>
          <span class="proj-coming__label">04 · Next Project</span>
          <p>A new end-to-end data project is in development. Follow on GitHub to watch it take shape.</p>
          <a href="https://github.com/timmaina-devhub/TimothyMaina" target="_blank" rel="noopener" class="proj-coming__link">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            Follow on GitHub
          </a>
        </div>
      </div>

    </div>

    <div class="h-all-projects reveal-up" style="--d:.4s">
      <a href="/projects" class="h-btn h-btn--ghost">See All Projects →</a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     SKILLS STRIP
════════════════════════════════════════════ -->
<section class="h-section reveal-section">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">Tech Stack</p>
      <h2>Tools I work with <em>daily</em></h2>
    </div>
    <div class="h-stack">
      <div class="h-stack__item reveal-up" style="--d:.02s"><span class="h-stack__name">Python</span></div>
      <div class="h-stack__item reveal-up" style="--d:.04s"><span class="h-stack__name">SQL</span></div>
      <div class="h-stack__item reveal-up" style="--d:.06s"><span class="h-stack__name">Power BI</span></div>
      <div class="h-stack__item reveal-up" style="--d:.08s"><span class="h-stack__name">Pandas</span></div>
      <div class="h-stack__item reveal-up" style="--d:.10s"><span class="h-stack__name">scikit-learn</span></div>
      <div class="h-stack__item reveal-up" style="--d:.12s"><span class="h-stack__name">XGBoost</span></div>
      <div class="h-stack__item reveal-up" style="--d:.14s"><span class="h-stack__name">Matplotlib</span></div>
      <div class="h-stack__item reveal-up" style="--d:.16s"><span class="h-stack__name">Tableau</span></div>
      <div class="h-stack__item reveal-up" style="--d:.18s"><span class="h-stack__name">Excel</span></div>
      <div class="h-stack__item reveal-up" style="--d:.20s"><span class="h-stack__name">Git</span></div>
      <div class="h-stack__item reveal-up" style="--d:.22s"><span class="h-stack__name">Jupyter</span></div>
      <div class="h-stack__item reveal-up" style="--d:.24s"><span class="h-stack__name">NumPy</span></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     CTA BANNER
════════════════════════════════════════════ -->
<section class="h-cta-banner reveal-section">
  <div class="h-cta-banner__glow" aria-hidden="true"></div>
  <div class="h-cta-banner__inner reveal-up">
    <p class="h-eyebrow" style="color:#93c5fd;">Ready to collaborate?</p>
    <h2>Have data? Let's make it work for you.</h2>
    <p>I'm open to full-time analyst roles, freelance projects, and data science collaborations. Let's talk about what your data could be telling you.</p>
    <div class="h-cta-banner__actions">
      <a href="/contact" class="h-btn h-btn--primary">Get In Touch →</a>
      <a href="/about" class="h-btn h-btn--ghost">Learn More About Me</a>
    </div>
  </div>
</section>

<footer class="footer">
  © 2026 Timothy Maina &nbsp;·&nbsp;
  <a href="mailto:timothymaina382@gmail.com" style="color:#3b82f6;text-decoration:none;">Email-me</a>
</footer>

<!-- ═══════════════════════════════════════════
     JAVASCRIPT — all animations
════════════════════════════════════════════ -->
<script>
/* ── 1. Particle canvas ─────────────────────────────── */
(function() {
  const canvas = document.getElementById('particles');
  const ctx    = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function rand(a, b) { return Math.random() * (b - a) + a; }

  function createParticle() {
    return {
      x:  rand(0, W),
      y:  rand(0, H),
      r:  rand(1, 2.5),
      vx: rand(-0.25, 0.25),
      vy: rand(-0.4, -0.1),
      a:  rand(0.2, 0.7),
      fade: rand(0.003, 0.006)
    };
  }

  for (let i = 0; i < 70; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,155,255,${p.a})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      p.a -= p.fade;
      if (p.a <= 0 || p.y < -10) particles[i] = createParticle();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── 2. Typewriter ──────────────────────────────────── */
(function() {
  const phrases = [
    'decisions that matter.',
    'patterns that predict.',
    'stories that persuade.',
    'clarity from complexity.'
  ];
  const el = document.getElementById('typewriter');
  let pi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 55, SPEED_DEL = 30, PAUSE = 2000;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, PAUSE); return; }
    } else {
      el.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? SPEED_DEL : SPEED_TYPE);
  }
  setTimeout(tick, 900);
})();

/* ── 3. Animated counters ───────────────────────────── */
(function() {
  const counters = document.querySelectorAll('.counter');
  let triggered = false;

  function runCounters() {
    counters.forEach(el => {
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = Math.ceil(target / 40);
      const timer  = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
  }

  // Trigger when hero is in view
  const hero = document.querySelector('.h-hero');
  const obs  = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      setTimeout(runCounters, 600);
    }
  }, { threshold: 0.4 });
  if (hero) obs.observe(hero);
})();

/* ── 4. Scroll reveal ───────────────────────────────── */
(function() {
  const items = document.querySelectorAll('.reveal-up');
  if (!window.IntersectionObserver) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => obs.observe(el));
})();
</script>

<style>
/* ── Tokens ──────────────────────────────────────────── */
:root {
  --bg:#020617; --sur:#0f172a; --sur2:#1e293b;
  --bdr:rgba(255,255,255,0.07);
  --blue:#2563eb; --blue-lt:#3b82f6; --blue-d:rgba(59,130,246,0.14);
  --txt:#e2e8f0; --muted:#94a3b8; --dim:#475569;
}
*,*::before,*::after { box-sizing:border-box; }
body { font-family:'DM Sans',sans-serif; background:var(--bg); color:var(--txt); margin:0; overflow-x:hidden; }
h1,h2,h3 { font-family:'DM Serif Display',serif; }
em { font-style:italic; color:#60a5fa; }
.nav-active { color:var(--blue-lt)!important; font-weight:600; }

/* ── Scroll reveal base ──────────────────────────────── */
.reveal-up {
  opacity:0;
  transform:translateY(36px);
  transition:opacity .65s ease calc(var(--d, 0s)), transform .65s ease calc(var(--d, 0s));
}
.reveal-up.visible { opacity:1; transform:translateY(0); }

/* ── Particle canvas ─────────────────────────────────── */
#particles {
  position:absolute; inset:0;
  width:100%; height:100%;
  pointer-events:none; z-index:1;
}

/* ── Hero ────────────────────────────────────────────── */
.h-hero {
  position:relative; width:100%; min-height:100vh;
  display:flex; align-items:center; justify-content:center;
  overflow:hidden; background:var(--bg);
}
.h-hero__grid {
  position:absolute; inset:0; z-index:0;
  background-image:linear-gradient(rgba(59,130,246,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.04) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%);
}
.h-orb { position:absolute; border-radius:50%; filter:blur(90px); pointer-events:none; z-index:0; }
.h-orb--1 { width:560px; height:560px; background:radial-gradient(circle,rgba(37,99,235,.2),transparent 70%); top:-120px; left:-120px; animation:orbFloat 9s ease-in-out infinite; }
.h-orb--2 { width:440px; height:440px; background:radial-gradient(circle,rgba(14,165,233,.13),transparent 70%); bottom:-90px; right:-90px; animation:orbFloat 12s ease-in-out infinite reverse; }
@keyframes orbFloat { 0%,100%{transform:translate(0,0);} 50%{transform:translate(28px,-28px);} }

.h-hero__inner {
  position:relative; z-index:2;
  text-align:center; max-width:760px; padding:0 24px;
}

/* Badge */
.h-hero__badge {
  display:inline-flex; align-items:center; gap:8px;
  font-size:.82rem; font-weight:500; color:#10b981;
  background:rgba(16,185,129,.08); border:1px solid rgba(16,185,129,.2);
  padding:6px 16px; border-radius:999px; margin-bottom:30px;
  animation:fadeUp .8s .1s ease both;
}
.h-badge__dot { width:7px; height:7px; border-radius:50%; background:#10b981; animation:pulse 2s infinite; }
@keyframes pulse { 0%,100%{box-shadow:0 0 0 2px rgba(16,185,129,.25);} 50%{box-shadow:0 0 0 5px rgba(16,185,129,.05);} }

/* Title */
.h-hero__title {
  font-size:clamp(2.4rem,6vw,4.4rem); color:#fff; line-height:1.15;
  margin-bottom:24px; animation:fadeUp .8s .2s ease both;
}
.typewriter-wrap { display:inline-block; }
.tw-cursor {
  display:inline-block; color:var(--blue-lt);
  animation:blink .75s step-end infinite;
  margin-left:2px;
}
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }

/* Sub */
.h-hero__sub {
  font-size:1rem; color:var(--muted); line-height:1.8;
  max-width:580px; margin:0 auto 36px;
  animation:fadeUp .8s .3s ease both;
}
.h-hero__sub strong { color:#e2e8f0; }

/* Buttons */
.h-hero__actions {
  display:flex; gap:12px; justify-content:center; flex-wrap:wrap;
  margin-bottom:52px; animation:fadeUp .8s .4s ease both;
}
.h-btn {
  display:inline-flex; align-items:center; gap:7px;
  padding:12px 26px; border-radius:10px;
  font-size:.92rem; font-weight:600;
  text-decoration:none; transition:all .25s;
  font-family:'DM Sans',sans-serif;
}
.h-btn--primary { background:var(--blue); color:#fff; border:1px solid var(--blue); box-shadow:0 4px 20px rgba(37,99,235,.3); }
.h-btn--primary:hover { background:#1d4ed8; transform:translateY(-3px); box-shadow:0 10px 30px rgba(37,99,235,.5); }
.h-btn--ghost { background:transparent; color:var(--muted); border:1px solid rgba(255,255,255,.12); }
.h-btn--ghost:hover { color:#e5e7eb; border-color:rgba(255,255,255,.3); transform:translateY(-3px); }

/* Trust bar */
.h-trust {
  display:flex; align-items:center; justify-content:center;
  gap:28px; flex-wrap:wrap; animation:fadeUp .8s .5s ease both;
}
.h-trust__item { text-align:center; }
.h-trust__num { display:block; font-family:'DM Serif Display',serif; font-size:1.75rem; color:#fff; line-height:1; }
.h-trust__label { font-size:.7rem; color:var(--dim); text-transform:uppercase; letter-spacing:.07em; margin-top:5px; display:block; }
.h-trust__divider { width:1px; height:36px; background:var(--bdr); }

/* Scroll cue */
.h-scroll-cue {
  position:absolute; bottom:5px; left:50%; transform:translateX(-50%);
  display:flex; flex-wrap:wrap; align-items:center; gap:8px;
  color:var(--dim); font-size:.7rem; letter-spacing:.12em; text-transform:uppercase;
  animation:fadeUp .8s .8s ease both; z-index:2;
}
.h-scroll-cue__track {
  width:20px; height:32px; border:1px solid rgba(255,255,255,.12);
  border-radius:999px; position:relative; overflow:hidden;
}
.h-scroll-cue__dot {
  width:4px; height:4px; background:var(--blue-lt); border-radius:50%;
  position:absolute; left:50%; transform:translateX(-50%); 
  animation:scrollDot 1.8s ease-in-out infinite;
}
@keyframes scrollDot { 0%{top:5px;opacity:1;} 100%{top:22px;opacity:0;} }
@keyframes fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

/* ── Sections ────────────────────────────────────────── */
.h-section { width:100%; padding:90px 40px; }
.h-section--alt { background:rgba(15,23,42,.5); border-top:1px solid var(--bdr); border-bottom:1px solid var(--bdr); }
.container { width:100%; max-width:1140px; margin:0 auto; }
.h-section-header { text-align:center; margin-bottom:52px; }
.h-section-header h2 { font-size:clamp(1.7rem,3.5vw,2.5rem); color:#fff; line-height:1.25; margin:8px 0 12px; }
.h-section-sub { color:#64748b; font-size:.92rem; max-width:480px; margin:0 auto; }
.h-eyebrow { font-size:.74rem; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--blue-lt); display:block; margin-bottom:6px; }

/* ── Pillars ─────────────────────────────────────────── */
.h-pillars { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.h-pillar { background:linear-gradient(145deg,var(--sur2),var(--sur)); border:1px solid var(--bdr); border-radius:18px; padding:28px 24px; transition:transform .3s,box-shadow .3s,border-color .3s; }
.h-pillar:hover { transform:translateY(-6px); box-shadow:0 20px 40px rgba(0,0,0,.4); border-color:rgba(59,130,246,.25); }
.h-pillar__icon { width:46px; height:46px; background:var(--blue-d); border:1px solid rgba(59,130,246,.2); border-radius:12px; display:flex; align-items:center; justify-content:center; color:#60a5fa; margin-bottom:18px; }
.h-pillar h3 { font-size:1.1rem; color:#fff; margin-bottom:10px; }
.h-pillar p { color:var(--muted); font-size:.88rem; line-height:1.7; margin-bottom:18px; }
.h-pillar__tools { display:flex; flex-wrap:wrap; gap:5px; }
.h-pillar__tools span { font-size:.72rem; padding:3px 9px; background:var(--blue-d); border:1px solid rgba(59,130,246,.2); border-radius:999px; color:#93c5fd; }

/* ════════════════════════════════════
   EDITORIAL PROJECT LAYOUT
════════════════════════════════════ */
.proj-editorial {
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:auto auto;
  gap:20px;
}

/* ── Featured large card ─────────────────────────────── */
.proj-feat {
  grid-column:1; grid-row:1 / 3;
  display:flex; flex-direction:column;
  background:linear-gradient(160deg,var(--sur2),var(--sur));
  border:1px solid var(--bdr); border-radius:20px;
  overflow:hidden; text-decoration:none; color:inherit;
  transition:border-color .3s, box-shadow .3s;
  position:relative;
}
.proj-feat:hover { border-color:rgba(59,130,246,.3); box-shadow:0 28px 56px rgba(0,0,0,.5); }

.proj-feat__img { position:relative; }
.proj-feat__chrome { display:flex; align-items:center; gap:5px; padding:9px 14px; background:rgba(2,6,23,.85); border-bottom:1px solid var(--bdr); }
.proj-feat__chrome span { width:9px; height:9px; border-radius:50%; }
.proj-feat__chrome span:nth-child(1){background:#ff5f57;}
.proj-feat__chrome span:nth-child(2){background:#febc2e;}
.proj-feat__chrome span:nth-child(3){background:#28c840;}
.proj-feat__screen { aspect-ratio:16/9; overflow:hidden; background:var(--sur); }
.proj-feat__screen img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s ease; }
.proj-feat:hover .proj-feat__screen img { transform:scale(1.05); }

.proj-feat__overlay {
  position:absolute; inset:0; top:32px;
  background:rgba(2,6,23,.5);
  display:flex; align-items:center; justify-content:center;
  opacity:0; transition:opacity .3s;
}
.proj-feat:hover .proj-feat__overlay { opacity:1; }
.proj-feat__overlay-text { font-size:1rem; font-weight:600; color:#fff; letter-spacing:.04em; }

.proj-feat__number {
  position:absolute; top:46px; left:16px;
  font-family:'DM Serif Display',serif;
  font-size:3rem; color:rgba(255,255,255,.06);
  line-height:1; pointer-events:none; z-index:1;
}

.proj-feat__body { padding:24px; flex:1; display:flex; flex-direction:column; }
.proj-feat__tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
.proj-feat__body h3 { font-size:1.25rem; color:#fff; margin-bottom:10px; line-height:1.3; }
.proj-feat__body p { color:var(--muted); font-size:.9rem; line-height:1.7; flex:1; margin-bottom:18px; }
.proj-feat__footer { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-top:auto; }
.proj-feat__cta { font-size:.85rem; font-weight:600; color:var(--blue-lt); transition:color .2s; }
.proj-feat:hover .proj-feat__cta { color:#93c5fd; }

/* Status badges */
.proj-feat__status { font-size:.68rem; font-weight:600; padding:3px 9px; border-radius:999px; letter-spacing:.04em; }
.proj-feat__status--done { background:rgba(16,185,129,.12); color:#10b981; border:1px solid rgba(16,185,129,.25); }
.proj-feat__status--wip  { background:rgba(245,158,11,.12); color:#f59e0b; border:1px solid rgba(245,158,11,.25); }

/* ── Two smaller cards ───────────────────────────────── */
.proj-sm-col { grid-column:2; grid-row:1; display:flex; flex-direction:column; gap:20px; }

.proj-sm {
  display:grid;
  grid-template-columns:140px 1fr;
  background:linear-gradient(145deg,var(--sur2),var(--sur));
  border:1px solid var(--bdr); border-radius:16px;
  overflow:hidden; text-decoration:none; color:inherit;
  transition:border-color .3s, box-shadow .3s;
  position:relative; min-height:140px;
}
.proj-sm:hover { border-color:rgba(59,130,246,.28); box-shadow:0 16px 40px rgba(0,0,0,.45); }

.proj-sm__number {
  position:absolute; top:10px; left:12px;
  font-family:'DM Serif Display',serif;
  font-size:1.6rem; color:rgba(255,255,255,.06);
  line-height:1; pointer-events:none;
}
.proj-sm__img { position:relative; overflow:hidden; background:var(--sur); }
.proj-sm__chrome { display:flex; align-items:center; gap:4px; padding:6px 8px; background:rgba(2,6,23,.85); border-bottom:1px solid var(--bdr); }
.proj-sm__chrome span { width:6px; height:6px; border-radius:50%; }
.proj-sm__chrome span:nth-child(1){background:#ff5f57;}
.proj-sm__chrome span:nth-child(2){background:#febc2e;}
.proj-sm__chrome span:nth-child(3){background:#28c840;}
.proj-sm__screen { height:calc(100% - 22px); overflow:hidden; }
.proj-sm__screen img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s; }
.proj-sm:hover .proj-sm__screen img { transform:scale(1.07); }
.proj-sm__overlay {
  position:absolute; inset:0; top:22px;
  background:rgba(2,6,23,.55);
  display:flex; align-items:center; justify-content:center;
  opacity:0; transition:opacity .3s;
  font-size:.8rem; font-weight:600; color:#fff;
}
.proj-sm:hover .proj-sm__overlay { opacity:1; }

.proj-sm__body { padding:16px 16px 16px 14px; display:flex; flex-direction:column; min-width:0; }
.proj-sm__tags { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:8px; }
.proj-sm__body h3 { font-size:.95rem; color:#fff; margin-bottom:6px; line-height:1.3; }
.proj-sm__body p { color:var(--muted); font-size:.8rem; line-height:1.6; flex:1; margin-bottom:10px; }
.proj-sm__footer { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:6px; margin-top:auto; }
.proj-sm__cta { font-size:.78rem; font-weight:600; color:var(--blue-lt); }
.proj-sm:hover .proj-sm__cta { color:#93c5fd; }

/* ── Coming soon card ────────────────────────────────── */
.proj-coming {
  grid-column:2; grid-row:2;
  background:transparent;
  border:2px dashed rgba(59,130,246,.2);
  border-radius:16px;
  display:flex; align-items:center; justify-content:center;
  padding:24px; text-align:center;
  transition:border-color .3s, background .3s;
  min-height:120px;
}
.proj-coming:hover { border-color:rgba(59,130,246,.4); background:rgba(37,99,235,.04); }
.proj-coming__inner { display:flex; flex-direction:column; align-items:center; gap:10px; }
.proj-coming__icon { width:44px; height:44px; border-radius:50%; background:var(--blue-d); border:1px solid rgba(59,130,246,.2); display:flex; align-items:center; justify-content:center; color:var(--blue-lt); }
.proj-coming__label { font-size:.72rem; font-weight:600; text-transform:uppercase; letter-spacing:.12em; color:var(--dim); }
.proj-coming__inner p { font-size:.82rem; color:var(--muted); line-height:1.6; margin:0; max-width:260px; }
.proj-coming__link { display:inline-flex; align-items:center; gap:6px; font-size:.8rem; font-weight:600; color:var(--blue-lt); text-decoration:none; padding:6px 14px; border:1px solid rgba(59,130,246,.25); border-radius:999px; transition:all .2s; }
.proj-coming__link:hover { background:var(--blue-d); border-color:var(--blue-lt); }

.h-all-projects { text-align:center; margin-top:36px; }

/* Tags */
.tag { display:inline-block; padding:4px 10px; font-size:.7rem; font-weight:500; background:var(--blue); border-radius:999px; color:#fff; font-family:'DM Sans',sans-serif; white-space:nowrap; }
.tag--outline { background:transparent; border:1px solid rgba(59,130,246,.4); color:#93c5fd; }
.tag--muted { background:rgba(100,116,139,.2); border:1px solid rgba(100,116,139,.3); color:var(--muted); }

/* ── Stack ───────────────────────────────────────────── */
.h-stack { display:grid; grid-template-columns:repeat(auto-fill,minmax(120px,1fr)); gap:12px; }
.h-stack__item { background:linear-gradient(145deg,var(--sur2),var(--sur)); border:1px solid var(--bdr); border-radius:12px; padding:16px 12px; text-align:center; transition:all .25s; cursor:default; }
.h-stack__item:hover { border-color:rgba(59,130,246,.35); background:var(--blue-d); transform:translateY(-3px); }
.h-stack__name { font-size:.86rem; font-weight:500; color:#cbd5e1; }

/* ── CTA banner ──────────────────────────────────────── */
.h-cta-banner { position:relative; width:100%; padding:90px 40px; text-align:center; overflow:hidden; background:var(--bg); border-top:1px solid var(--bdr); }
.h-cta-banner__glow { position:absolute; inset:0; background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(37,99,235,.12),transparent); pointer-events:none; }
.h-cta-banner__inner { position:relative; z-index:2; max-width:620px; margin:0 auto; }
.h-cta-banner__inner h2 { font-size:clamp(1.7rem,4vw,2.7rem); color:#fff; line-height:1.2; margin:12px 0 16px; }
.h-cta-banner__inner p { color:var(--muted); font-size:.97rem; line-height:1.75; margin-bottom:34px; }
.h-cta-banner__actions { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

/* ── Responsive ──────────────────────────────────────── */
@media (max-width:900px) {
  .h-pillars { grid-template-columns:1fr 1fr; }
  .proj-editorial {
    grid-template-columns:1fr;
    grid-template-rows:auto;
  }
  .proj-feat { grid-column:1; grid-row:auto; }
  .proj-sm-col { grid-column:1; grid-row:auto; flex-direction:row; }
  .proj-coming { grid-column:1; grid-row:auto; }
}

@media (max-width:640px) {
  .h-section { padding:60px 18px; }
  .h-hero__inner { padding:0 18px; }
  .h-pillars { grid-template-columns:1fr; }
  .proj-sm-col { flex-direction:column; }
  .proj-sm { grid-template-columns:110px 1fr; }
  .h-trust { gap:16px; }
  .h-trust__divider { height:28px; }
  .h-cta-banner { padding:60px 20px; }
  .h-stack { grid-template-columns:repeat(auto-fill,minmax(100px,1fr)); gap:10px; }
}

@media (max-width:400px) {
  .h-hero__title { font-size:2rem; }
  .h-hero__actions { flex-direction:column; align-items:center; }
  .h-btn { width:100%; text-align:center; justify-content:center; }
  .proj-sm { grid-template-columns:1fr; }
  .proj-sm__img { height:120px; }
  .proj-sm__screen { height:calc(120px - 22px); }
}
</style>
