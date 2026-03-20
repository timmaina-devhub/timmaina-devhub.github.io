---
layout: bare
title: Home
---
<link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">

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
  <!-- Animated background grid -->
  <div class="h-hero__grid" aria-hidden="true"></div>
  <!-- Glowing orbs -->
  <div class="h-orb h-orb--1" aria-hidden="true"></div>
  <div class="h-orb h-orb--2" aria-hidden="true"></div>

  <div class="h-hero__inner">
    <div class="h-hero__badge">
      <span class="h-badge__dot"></span>
      Available for hire · Nairobi, Kenya
    </div>

    <h1 class="h-hero__title">
      Turning raw data into<br>
      <em>decisions that matter.</em>
    </h1>

    <p class="h-hero__sub">
      I'm <strong>Timothy Maina</strong> — a Data Analyst specialising in
      analytics, dashboards, and machine learning. I help teams stop
      guessing and start knowing.
    </p>

    <div class="h-hero__actions">
      <a href="/projects" class="h-btn h-btn--primary">View My Work →</a>
      <a href="/contact" class="h-btn h-btn--ghost">Let's Talk</a>
    </div>

    <!-- Trust bar -->
    <div class="h-trust">
      <div class="h-trust__item">
        <span class="h-trust__num">3+</span>
        <span class="h-trust__label">Projects Shipped</span>
      </div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item">
        <span class="h-trust__num">3</span>
        <span class="h-trust__label">Core Disciplines</span>
      </div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item">
        <span class="h-trust__num">24h</span>
        <span class="h-trust__label">Response Time</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     WHAT I DO  (3 pillars)
════════════════════════════════════════════ -->
<section class="h-section">
  <div class="container">
    <div class="h-section-header">
      <p class="h-eyebrow">What I Do</p>
      <h2>Where data meets <em>impact</em></h2>
    </div>

    <div class="h-pillars">

      <div class="h-pillar">
        <div class="h-pillar__icon">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
        </div>
        <h3>Data Analytics</h3>
        <p>Cleaning, exploring, and modelling datasets to surface trends and answer the business questions that actually matter.</p>
        <div class="h-pillar__tools">
          <span>Python</span><span>SQL</span><span>Pandas</span><span>Excel</span>
        </div>
      </div>

      <div class="h-pillar">
        <div class="h-pillar__icon">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
          </svg>
        </div>
        <h3>Dashboards &amp; Visualisation</h3>
        <p>Building interactive dashboards that give stakeholders a clear, real-time view of performance without needing to ask for a report.</p>
        <div class="h-pillar__tools">
          <span>Power BI</span><span>Plotly</span><span>Seaborn</span><span>Tableau</span>
        </div>
      </div>

      <div class="h-pillar">
        <div class="h-pillar__icon">
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        <h3>Machine Learning</h3>
        <p>Training and evaluating predictive models — from customer churn to demand forecasting — with a focus on results that non-technical stakeholders can act on.</p>
        <div class="h-pillar__tools">
          <span>scikit-learn</span><span>XGBoost</span><span>K-Means</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     FEATURED PROJECTS
════════════════════════════════════════════ -->
<section class="h-section h-section--alt">
  <div class="container">
    <div class="h-section-header">
      <p class="h-eyebrow">Selected Work</p>
      <h2>Projects that <em>prove the point</em></h2>
      <p class="h-section-sub">Each project was built to solve a real problem. Click any card to read the full breakdown.</p>
    </div>

    <div class="h-projects">

      <!-- Featured (wide) card -->
      <a href="/projects#sales-dashboard" class="h-proj h-proj--wide">
        <div class="h-proj__img">
          <img src="{{ '/images/sales-dashboard.png' | relative_url }}" alt="Sales Dashboard">
          <div class="h-proj__overlay">
            <span>View Project →</span>
          </div>
        </div>
        <div class="h-proj__body">
          <div class="h-proj__tags">
            <span class="tag">Visualization</span>
            <span class="tag tag--outline">Power BI</span>
            <span class="tag tag--outline">Excel</span>
          </div>
          <h3>Sales Dashboard</h3>
          <p>An interactive regional sales dashboard that replaced weekly manual reports. Tracks KPIs, territory performance, and month-over-month growth in real time.</p>
          <span class="h-proj__cta">Read case study →</span>
        </div>
      </a>

      <!-- Two smaller cards -->
      <div class="h-proj-pair">

        <a href="/projects#customer-analysis" class="h-proj">
          <div class="h-proj__img">
            <img src="{{ '/images/customer-analysis.png' | relative_url }}" alt="Customer Analysis">
            <div class="h-proj__overlay"><span>View →</span></div>
          </div>
          <div class="h-proj__body">
            <div class="h-proj__tags">
              <span class="tag">Analytics</span>
              <span class="tag tag--outline">Python</span>
            </div>
            <h3>Customer Analysis</h3>
            <p>RFM segmentation and cohort analysis uncovering high-value customers and churn risk patterns.</p>
            <span class="h-proj__cta">Read case study →</span>
          </div>
        </a>

        <a href="/projects#predictive-model" class="h-proj">
          <div class="h-proj__img">
            <img src="{{ '/images/predictive-model.png' | relative_url }}" alt="Predictive Modeling">
            <div class="h-proj__overlay"><span>View →</span></div>
          </div>
          <div class="h-proj__body">
            <div class="h-proj__tags">
              <span class="tag">Machine Learning</span>
              <span class="tag tag--outline">scikit-learn</span>
            </div>
            <h3>Predictive Modeling</h3>
            <p>Sales forecasting pipeline comparing XGBoost, Random Forest, and Linear Regression models.</p>
            <span class="h-proj__cta">Read case study →</span>
          </div>
        </a>

      </div>
    </div>

    <div class="h-all-projects">
      <a href="/projects" class="h-btn h-btn--ghost">See All Projects →</a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════════════════════
     SKILLS STRIP
════════════════════════════════════════════ -->
<section class="h-section">
  <div class="container">
    <div class="h-section-header">
      <p class="h-eyebrow">Tech Stack</p>
      <h2>Tools I work with <em>daily</em></h2>
    </div>
    <div class="h-stack">
      <div class="h-stack__item"><span class="h-stack__name">Python</span></div>
      <div class="h-stack__item"><span class="h-stack__name">SQL</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Power BI</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Pandas</span></div>
      <div class="h-stack__item"><span class="h-stack__name">scikit-learn</span></div>
      <div class="h-stack__item"><span class="h-stack__name">XGBoost</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Matplotlib</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Tableau</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Excel</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Git</span></div>
      <div class="h-stack__item"><span class="h-stack__name">Jupyter</span></div>
      <div class="h-stack__item"><span class="h-stack__name">NumPy</span></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════
     CTA BANNER
════════════════════════════════════════════ -->
<section class="h-cta-banner">
  <div class="h-cta-banner__glow" aria-hidden="true"></div>
  <div class="h-cta-banner__inner">
    <p class="h-eyebrow" style="color:#93c5fd;">Ready to collaborate?</p>
    <h2>Have data? Let's make it work for you.</h2>
    <p>I'm open to full-time analyst roles, freelance projects, and data science collaborations. Let's talk about what your data could be telling you.</p>
    <div class="h-cta-banner__actions">
      <a href="/contact" class="h-btn h-btn--primary">Get In Touch →</a>
      <a href="/about" class="h-btn h-btn--ghost">Learn More About Me</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  © 2026 Timothy Maina &nbsp;·&nbsp;
  <a href="mailto:timothymaina@email.com" style="color:#3b82f6;text-decoration:none;">timothymaina@email.com</a>
</footer>

<!-- ═══════════════════════════════════════════
     PAGE-SPECIFIC STYLES
════════════════════════════════════════════ -->
<style>
/* ── Fonts ───────────────────────────────────────────── */
body { font-family: 'DM Sans', sans-serif; }
h1, h2, h3 { font-family: 'DM Serif Display', serif; }
em { font-style: italic; color: #60a5fa; }

/* ── Active nav ──────────────────────────────────────── */
.nav-active { color: #3b82f6 !important; font-weight: 600; }

/* ── HERO ────────────────────────────────────────────── */
.h-hero {
  position: relative;
  width: 100%;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #020617;
}

/* Grid lines */
.h-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}

/* Glowing orbs */
.h-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.h-orb--1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%);
  top: -100px; left: -100px;
  animation: orbFloat 8s ease-in-out infinite;
}
.h-orb--2 {
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(14,165,233,0.12), transparent 70%);
  bottom: -80px; right: -80px;
  animation: orbFloat 10s ease-in-out infinite reverse;
}
@keyframes orbFloat {
  0%, 100% { transform: translate(0,0); }
  50%       { transform: translate(30px, -30px); }
}

.h-hero__inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 780px;
  padding: 0 40px;
  animation: fadeUp 0.9s ease both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Badge */
.h-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 500;
  color: #10b981;
  background: rgba(16,185,129,0.08);
  border: 1px solid rgba(16,185,129,0.2);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 28px;
  animation: fadeUp 0.9s 0.1s ease both;
}
.h-badge__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #10b981;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { box-shadow: 0 0 0 2px rgba(16,185,129,0.25); }
  50%      { box-shadow: 0 0 0 5px rgba(16,185,129,0.06); }
}

/* Title */
.h-hero__title {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  color: #ffffff;
  line-height: 1.15;
  margin-bottom: 22px;
  animation: fadeUp 0.9s 0.2s ease both;
}

/* Subtitle */
.h-hero__sub {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 36px;
  animation: fadeUp 0.9s 0.3s ease both;
}
.h-hero__sub strong { color: #e2e8f0; }

/* CTA buttons */
.h-hero__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 52px;
  animation: fadeUp 0.9s 0.4s ease both;
}

.h-btn {
  display: inline-block;
  padding: 13px 28px;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  font-family: 'DM Sans', sans-serif;
}
.h-btn--primary {
  background: #2563eb;
  color: #fff;
  border: 1px solid #2563eb;
  box-shadow: 0 4px 20px rgba(37,99,235,0.3);
}
.h-btn--primary:hover {
  background: #1d4ed8;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(37,99,235,0.45);
}
.h-btn--ghost {
  background: transparent;
  color: #94a3b8;
  border: 1px solid rgba(255,255,255,0.12);
}
.h-btn--ghost:hover {
  color: #e5e7eb;
  border-color: rgba(255,255,255,0.3);
  transform: translateY(-3px);
}

/* Trust bar */
.h-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  animation: fadeUp 0.9s 0.5s ease both;
}
.h-trust__item { text-align: center; }
.h-trust__num {
  display: block;
  font-family: 'DM Serif Display', serif;
  font-size: 1.8rem;
  color: #ffffff;
  line-height: 1;
}
.h-trust__label {
  font-size: 0.75rem;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-top: 4px;
  display: block;
}
.h-trust__divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.08);
}

/* ── SECTION SHARED ──────────────────────────────────── */
.h-section { width: 100%; padding: 90px 40px; }
.h-section--alt {
  background: rgba(15,23,42,0.5);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.h-section-header {
  text-align: center;
  margin-bottom: 56px;
}
.h-section-header h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  color: #fff;
  line-height: 1.25;
  margin: 8px 0 12px;
}
.h-section-sub {
  color: #64748b;
  font-size: 0.95rem;
  max-width: 500px;
  margin: 0 auto;
}
.h-eyebrow {
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #3b82f6;
  display: block;
  margin-bottom: 6px;
}

/* ── PILLARS ─────────────────────────────────────────── */
.h-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.h-pillar {
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 18px;
  padding: 32px 28px;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}
.h-pillar:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  border-color: rgba(59,130,246,0.25);
}
.h-pillar__icon {
  width: 50px; height: 50px;
  background: rgba(37,99,235,0.12);
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  color: #60a5fa;
  margin-bottom: 20px;
}
.h-pillar h3 {
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 12px;
}
.h-pillar p {
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 20px;
}
.h-pillar__tools {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.h-pillar__tools span {
  font-size: 0.75rem;
  padding: 3px 10px;
  background: rgba(37,99,235,0.1);
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 999px;
  color: #93c5fd;
}

/* ── PROJECT CARDS ───────────────────────────────────── */
.h-projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 24px;
}
.h-proj--wide { grid-row: 1; grid-column: 1; }
.h-proj-pair {
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.h-proj {
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 18px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}
.h-proj:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.5);
  border-color: rgba(59,130,246,0.25);
}

.h-proj__img {
  position: relative;
  overflow: hidden;
  background: #0f172a;
}
.h-proj--wide .h-proj__img { height: 220px; }
.h-proj-pair .h-proj__img { height: 140px; }

.h-proj__img img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.h-proj:hover .h-proj__img img { transform: scale(1.06); }

.h-proj__overlay {
  position: absolute;
  inset: 0;
  background: rgba(2,6,23,0.55);
  display: flex; align-items: center; justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.03em;
}
.h-proj:hover .h-proj__overlay { opacity: 1; }

.h-proj__body { padding: 22px; flex: 1; }
.h-proj__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 12px;
}
.h-proj__body h3 {
  font-size: 1.15rem;
  color: #fff;
  margin-bottom: 8px;
}
.h-proj__body p {
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.65;
  margin-bottom: 14px;
}
.h-proj__cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: #3b82f6;
  transition: color 0.2s;
}
.h-proj:hover .h-proj__cta { color: #60a5fa; }

.h-all-projects {
  text-align: center;
  margin-top: 40px;
}

/* Tags (reuse base, add outline variant) */
.tag {
  display: inline-block;
  padding: 4px 11px;
  font-size: 0.73rem;
  font-weight: 500;
  background: #2563eb;
  border-radius: 999px;
  color: #fff;
}
.tag--outline {
  background: transparent;
  border: 1px solid rgba(59,130,246,0.4);
  color: #93c5fd;
}

/* ── STACK GRID ──────────────────────────────────────── */
.h-stack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 14px;
}
.h-stack__item {
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 18px 14px;
  text-align: center;
  transition: all 0.25s;
  cursor: default;
}
.h-stack__item:hover {
  border-color: rgba(59,130,246,0.35);
  background: rgba(37,99,235,0.08);
  transform: translateY(-3px);
}
.h-stack__name {
  font-size: 0.88rem;
  font-weight: 500;
  color: #cbd5e1;
}

/* ── CTA BANNER ──────────────────────────────────────── */
.h-cta-banner {
  position: relative;
  width: 100%;
  padding: 100px 40px;
  text-align: center;
  overflow: hidden;
  background: #020617;
  border-top: 1px solid rgba(255,255,255,0.05);
}
.h-cta-banner__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 70% at 50% 50%, rgba(37,99,235,0.12), transparent);
  pointer-events: none;
}
.h-cta-banner__inner {
  position: relative;
  z-index: 2;
  max-width: 640px;
  margin: 0 auto;
}
.h-cta-banner__inner h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: #fff;
  line-height: 1.2;
  margin: 12px 0 16px;
}
.h-cta-banner__inner p {
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.75;
  margin-bottom: 36px;
}
.h-cta-banner__actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── RESPONSIVE ──────────────────────────────────────── */
@media (max-width: 960px) {
  .h-pillars { grid-template-columns: 1fr 1fr; }
  .h-projects { grid-template-columns: 1fr; }
  .h-proj--wide, .h-proj-pair { grid-column: 1; grid-row: auto; }
  .h-proj-pair { flex-direction: row; }
}
@media (max-width: 640px) {
  .h-hero__inner { padding: 0 20px; }
  .h-section { padding: 70px 20px; }
  .h-pillars { grid-template-columns: 1fr; }
  .h-proj-pair { flex-direction: column; }
  .h-trust { gap: 20px; }
  .h-cta-banner { padding: 70px 20px; }
}
</style>
