---
layout: bare
title: Home
---
<link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">
<a href="#main-content" class="skip-link">Skip to content</a>

<nav class="navbar">
  <div class="logo"><strong>Timothy Maina</strong></div>
  <button class="nav-toggle" aria-label="Menu" id="navToggle" aria-expanded="false">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  </button>
  <div class="nav-links" id="navLinks">
    <a href="/" class="nav-active">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/intelligence_platform">Intelligence Platform</a>
    <a href="/work-with-me">Work With Me</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

<main id="main-content">
<!-- HERO -->
<section class="h-hero">
  <div class="h-hero__grid" aria-hidden="true"></div>
  <div class="h-orb h-orb--1" aria-hidden="true"></div>
  <div class="h-orb h-orb--2" aria-hidden="true"></div>
  <div class="code-deco code-deco--tl" aria-hidden="true">rfm = {
  "recency": days_since_last,
  "frequency": order_count,
  "monetary": total_spend
}
churn_prob = model.predict_proba(rfm)</div>
  <div class="code-deco code-deco--tr" aria-hidden="true">SELECT
  channel,
  COUNT(*) AS conversions,
  SUM(revenue) AS total_rev
FROM journeys
GROUP BY channel
ORDER BY total_rev DESC</div>
  <div class="h-hero__inner">
    <div class="status-readout">
      <span class="status-readout__dot"></span>
      <span><span class="sr-key">status:</span> <span class="sr-val sr-val--green">open_to_roles</span></span>
      <span class="sr-sep">|</span>
      <span><span class="sr-key">location:</span> <span class="sr-val">Nairobi, KE</span></span>
      <span class="sr-sep">|</span>
      <span><span class="sr-key">response:</span> <span class="sr-val">~24h</span></span>
    </div>
    <h1 class="h-hero__title">
      Dependable problem solver.<br>
      <span class="typewriter-wrap">
        <em id="typewriter"></em><span class="tw-cursor">|</span>
        <div class="annotation" aria-hidden="true"></div>
      </span>
    </h1>
    <p class="h-hero__sub">
      I'm <strong>Timothy Maina</strong>, a self-taught technologist based in Nairobi. I lead teams, fix systems, and turn messy problems into something you can actually rely on. My work is grounded in real data, clear thinking, and a commitment to finishing what I start.
    </p>
    <div class="h-hero__actions">
      <a href="/work-with-me" class="h-btn h-btn--primary">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 21c-4.342 0-8.29-1.535-11.13-4.063M5 13.255A23.931 23.931 0 0112 5c4.342 0 8.29 1.535 11.13 4.063M15 13.255A6.999 6.999 0 0112 21a6.999 6.999 0 01-3-7.745M12 21a6.999 6.999 0 01-3-7.745M12 21V9.75"/></svg>
        Work With Me
      </a>
      <a href="/projects" class="h-btn h-btn--ghost">View My Work</a>
    </div>
    <div class="h-trust">
      <div class="h-trust__item">
        <span class="h-trust__num">200+</span>
        <span class="m-label">Members Led</span>
      </div>
      <div class="h-trust__item">
        <span class="h-trust__num">2yr</span>
        <span class="m-label">President's Club</span>
      </div>
      <div class="h-trust__item">
        <span class="h-trust__num">7+</span>
        <span class="m-label">End-to-end Projects</span>
      </div>
      <div class="h-trust__item">
        <span class="h-trust__num">~24h</span>
        <span class="m-label">Response Time</span>
      </div>
    </div>
  </div>
  <div class="h-scroll-cue" aria-hidden="true">
    <span>Scroll</span>
    <div class="h-scroll-cue__track"><div class="h-scroll-cue__dot"></div></div>
  </div>
</section>

<!-- HOW I WORK -->
<section class="h-section section--alt">
  <div class="container">
    <div class="section-header fade-up">
      <p class="eyebrow">How I Work</p>
      <h2>Reliability before <em>everything</em></h2>
      <p>Every project follows the same commitments: clear communication, honest timelines, and follow-through.</p>
    </div>
    <div class="measure-ruler"><span>/process</span></div>
    <div class="grid-3">
      <div class="pillar fade-up" style="--d:.05s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3>Clarity First</h3>
        <p>I start by understanding the real problem, not just the first request. That means asking questions, confirming scope, and making sure what I deliver is actually what you need.</p>
        <div class="pillar__tools"><span>Requirements</span><span>Communication</span><span>Planning</span></div>
      </div>
      <div class="pillar fade-up" style="--d:.15s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3>Consistent Delivery</h3>
        <p>I manage budgets, timelines, and expectations the same way I managed event operations with KSh 30,000+ budgets and 200+ members: with structure, transparency, and follow-through.</p>
        <div class="pillar__tools"><span>Operations</span><span>Budgeting</span><span>Accountability</span></div>
      </div>
      <div class="pillar fade-up" style="--d:.25s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div>
        <h3>Continuous Improvement</h3>
        <p>I taught myself Linux, imported hardware internationally through research, and continue to refine every model or workflow I touch. Skills decay; commitment to learning doesn't have to.</p>
        <div class="pillar__tools"><span>Self-learning</span><span>Documentation</span><span>Optimization</span></div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT I DO -->
<section class="h-section">
  <div class="container">
    <div class="section-header fade-up">
      <p class="eyebrow">What I Do</p>
      <h2>Where data meets <em>purpose</em></h2>
    </div>
    <div class="measure-ruler"><span>/capabilities</span></div>
    <div class="code-deco code-deco--bl" aria-hidden="true">X_train, X_test, y_train, y_test =
  train_test_split(X, y, test_size=0.2,
                   stratify=y, random_state=42)</div>
    <div class="code-deco code-deco--br" aria-hidden="true">model = RandomForestClassifier(
  n_estimators=200,
  max_depth=8,
  random_state=42
)</div>
    <div class="grid-3">

      <div class="pillar fade-up" style="--d:.05s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3>Data Analytics</h3>
        <p>Profiling, cleaning, and exploring datasets to figure out what's actually going on. I write SQL and Python to answer specific questions, not just to produce outputs.</p>
        <div class="pillar__tools"><span>Python</span><span>SQL</span><span>Pandas</span><span>Excel</span></div>
      </div>

      <div class="pillar fade-up" style="--d:.15s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
        <h3>Dashboards &amp; Visualisation</h3>
        <p>Building dashboards in Power BI and Tableau that are actually maintained after handoff. I focus on layout and filter logic so the thing stays useful beyond the first demo.</p>
        <div class="pillar__tools"><span>Power BI</span><span>Plotly</span><span>Seaborn</span><span>Tableau</span></div>
      </div>

      <div class="pillar fade-up" style="--d:.25s">
        <div class="pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 002 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3>Machine Learning</h3>
        <p>Training classification and regression models on real, messy data. I care about precision-recall tradeoffs, feature leakage, and whether the output is something a non-technical person can actually use.</p>
        <div class="pillar__tools"><span>scikit-learn</span><span>XGBoost</span><span>K-Means</span></div>
      </div>

    </div>
  </div>
</section>

<!-- FEATURED PROJECTS -->
<section class="h-section section--alt">
  <div class="container">
    <div class="section-header fade-up">
      <p class="eyebrow">Selected Work</p>
      <h2>Featured <em>Projects</em></h2>
      <p>Seven end-to-end projects across ML, analytics, and visualisation. Each one started from raw data and went through the full process.</p>
    </div>
    <div class="measure-ruler"><span>/projects</span></div>

    <div class="fp-grid">
      <!-- Card 1: Logistics — wide -->
      <div class="ops-tile ops-tile--wide fade-up" style="--d:.05s">
        <div class="ops-tile__img">
          <div class="ops-tile__chrome">
            <span class="ops-tile__dot ops-tile__dot--r"></span><span class="ops-tile__dot ops-tile__dot--y"></span><span class="ops-tile__dot ops-tile__dot--g"></span>
            <span class="ops-tile__url">~/projects/logistics</span>
          </div>
          <div class="ops-tile__screen">
            <img src="{{ '/images/logistics_dashboard.png' | relative_url }}" alt="Logistics Dashboard" loading="lazy">
            <div class="ops-tile__img-overlay"></div>
          </div>
          <span class="ops-tile__badge fp-card__badge--done">✓ Completed</span>
        </div>
        <div class="ops-tile__body">
          <div class="ops-tile__meta">
            <span class="tag">Supply Chain Analytics</span>
            <span class="tag tag--ol">Power BI</span>
            <span class="tag tag--ol">ML</span>
          </div>
          <h3 class="ops-tile__title">Delivery Downtime &amp; Route Optimization</h3>
          <p class="ops-tile__desc">Predicting delivery delay hours using operational and driver data. The main challenge was engineering useful features without leaking target information into the inputs.</p>
          <ul class="ops-tile__bullets">
            <li>Driver behaviour and route conditions turned out to matter more than distance.</li>
            <li>Traffic and weather proxied from GPS speed patterns, no external APIs.</li>
            <li>R² of ~0.70 after removing features that caused ~0.99 leakage.</li>
          </ul>
          <div class="ops-tile__stack"><span>Regression</span><span>Feature Engineering</span><span>Python</span><span>Power BI</span></div>
        </div>
        <div class="ops-tile__cta">
          <a href="/intelligence_platform#logistics" class="btn btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Delay Predictor
          </a>
          <a href="/projects#Delivery-Downtime-Route-Optimization" class="btn btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

      <!-- Card 2: Churn -->
      <div class="ops-tile fade-up" style="--d:.15s">
        <div class="ops-tile__img">
          <div class="ops-tile__chrome">
            <span class="ops-tile__dot ops-tile__dot--r"></span><span class="ops-tile__dot ops-tile__dot--y"></span><span class="ops-tile__dot ops-tile__dot--g"></span>
            <span class="ops-tile__url">~/projects/churn</span>
            <span class="ops-tile__ts" style="margin-left:auto;font-size:.62rem;color:var(--text-4);font-family:'JetBrains Mono',monospace;">updated 2d ago</span>
          </div>
          <div class="ops-tile__screen">
            <img src="{{ '/images/customer-analysis.png' | relative_url }}" alt="Customer Churn Analysis" loading="lazy">
            <div class="ops-tile__img-overlay"></div>
          </div>
          <span class="ops-tile__badge fp-card__badge--done">✓ Completed</span>
        </div>
        <div class="ops-tile__body">
          <div class="ops-tile__meta">
            <span class="tag">Analytics</span>
            <span class="tag tag--ol">Python</span>
            <span class="tag tag--ol">ML</span>
          </div>
          <h3 class="ops-tile__title">Customer Churn Analysis &amp; Segmentation</h3>
          <p class="ops-tile__desc">Built RFM features from transaction history, trained a logistic regression model for churn prediction, and ran K-Means to group customers into segments worth treating differently.</p>
          <ul class="ops-tile__bullets">
            <li>Days since last purchase and refund rate were the strongest predictors.</li>
            <li>Optimised for recall so fewer at-risk customers slip through undetected.</li>
            <li>K-Means produced 3 stable segments with clear behavioural differences.</li>
          </ul>
          <div class="ops-tile__stack"><span>Python</span><span>Pandas</span><span>scikit-learn</span><span>Seaborn</span></div>
        </div>
        <div class="ops-tile__cta">
          <a href="/intelligence_platform#churn" class="btn btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Churn Predictor
          </a>
          <a href="/projects#customer-analysis" class="btn btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

      <!-- Card 3: Fraud -->
      <div class="ops-tile fade-up" style="--d:.25s">
        <div class="ops-tile__img">
          <div class="ops-tile__chrome">
            <span class="ops-tile__dot ops-tile__dot--r"></span><span class="ops-tile__dot ops-tile__dot--y"></span><span class="ops-tile__dot ops-tile__dot--g"></span>
            <span class="ops-tile__url">~/projects/fraud</span>
            <span class="ops-tile__ts" style="margin-left:auto;font-size:.62rem;color:var(--text-4);font-family:'JetBrains Mono',monospace;">updated 1w ago</span>
          </div>
          <div class="ops-tile__screen">
            <img src="{{ '/images/fraud-dashboard.png' | relative_url }}" alt="Fraud Detection System" loading="lazy">
            <div class="ops-tile__img-overlay"></div>
          </div>
          <span class="ops-tile__badge fp-card__badge--done">✓ Completed</span>
        </div>
        <div class="ops-tile__body">
          <div class="ops-tile__meta">
            <span class="tag">Machine Learning</span>
            <span class="tag tag--ol">scikit-learn</span>
            <span class="tag tag--ol">Tableau</span>
          </div>
          <h3 class="ops-tile__title">Fraud Detection Command Centre</h3>
          <p class="ops-tile__desc">Fraud detection built around behavioural features rather than transaction amounts alone. The dataset was heavily imbalanced, so model selection was mostly about finding a precision-recall tradeoff that made operational sense.</p>
          <ul class="ops-tile__bullets">
            <li>Transaction velocity in the past hour was the single strongest fraud signal.</li>
            <li>SMOTE helped, but threshold tuning did most of the precision-recall work.</li>
            <li>Tableau dashboard shows flagged entities and estimated exposure over time.</li>
          </ul>
          <div class="ops-tile__stack"><span>Python</span><span>Random Forest</span><span>SMOTE</span><span>Tableau</span></div>
        </div>
        <div class="ops-tile__cta">
          <a href="/intelligence_platform#fraud" class="btn btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Fraud Detector
          </a>
          <a href="/projects#fraud-detection" class="btn btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

    </div>

    <div class="h-all-projects fade-up" style="--d:.35s">
      <a href="/projects" class="h-btn h-btn--ghost">See All Projects →</a>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section class="h-section">
  <div class="container">
    <div class="section-header fade-up">
      <p class="eyebrow">Tech Stack</p>
      <h2>Tools I work with <em>daily</em></h2>
    </div>
    <div class="stack-grid">
      <div class="stack-item fade-up" style="--d:.02s"><span class="span">Python</span></div>
      <div class="stack-item fade-up" style="--d:.04s"><span class="span">SQL</span></div>
      <div class="stack-item fade-up" style="--d:.06s"><span class="span">Power BI</span></div>
      <div class="stack-item fade-up" style="--d:.08s"><span class="span">Pandas</span></div>
      <div class="stack-item fade-up" style="--d:.10s"><span class="span">scikit-learn</span></div>
      <div class="stack-item fade-up" style="--d:.12s"><span class="span">XGBoost</span></div>
      <div class="stack-item fade-up" style="--d:.14s"><span class="span">Matplotlib</span></div>
      <div class="stack-item fade-up" style="--d:.16s"><span class="span">Tableau</span></div>
      <div class="stack-item fade-up" style="--d:.18s"><span class="span">Excel</span></div>
      <div class="stack-item fade-up" style="--d:.20s"><span class="span">Git</span></div>
      <div class="stack-item fade-up" style="--d:.22s"><span class="span">Jupyter</span></div>
      <div class="stack-item fade-up" style="--d:.24s"><span class="span">NumPy</span></div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="cta-banner">
  <div class="cta-banner__glow" aria-hidden="true"></div>
  <div class="measure-ruler" style="position:relative;z-index:2;margin-bottom:14px;"><span>/contact</span></div>
  <div class="cta-banner__inner fade-up">
    <p class="eyebrow" style="color:#fbbf24;font-family:'JetBrains Mono',monospace;font-size:.75rem;letter-spacing:0.02em;">Available for analytics, BI, and machine learning work</p>
    <p>Most of my projects involve predictive analytics, operational reporting, and machine learning workflows tied to real business problems. I'm open to full-time roles, contract work, and analytical projects where the focus is understanding patterns, improving reporting, or building practical ML solutions. If you have a dataset, reporting challenge, or workflow that needs careful analysis, I'm happy to talk through it.</p>
    <div class="cta-banner__actions">
      <a href="/contact" class="h-btn h-btn--primary">Get In Touch →</a>
      <a href="/work-with-me" class="h-btn h-btn--ghost">How I Work</a>
    </div>
  </div>
</section>
</main>

<footer class="footer">
  © 2026 Timothy Maina &nbsp;·&nbsp;
  <a href="mailto:timothymaina382@gmail.com" style="color:#fbbf24;text-decoration:none;">Email-me</a>
</footer>

<!-- Page-specific styles -->
<style>
/* ── Status readout: open_to_roles value in green ─── */
.sr-val--green {
  color: #34d399;
}
.status-readout__dot {
  background: #34d399;
  box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.2);
  animation: dotPulseGreen 2.5s ease-in-out infinite;
}
@keyframes dotPulseGreen {
  0%, 100% { box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.2); }
  50%       { box-shadow: 0 0 0 6px rgba(52, 211, 153, 0.05); }
}

/* ── h-trust stat block ─────────────────────────── */
.h-trust__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.h-trust__num {
  font-family: var(--mono);
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  line-height: 1;
}
.h-trust .m-label {
  font-size: 0.68rem;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ── Responsive: hide code-deco on small screens ─ */
@media (max-width: 768px) {
  .code-deco { display: none; }
  .status-readout { flex-wrap: wrap; gap: 6px 10px; }
  .sr-sep { display: none; }
  .h-trust { gap: 20px; }
}

@media (max-width: 480px) {
  .h-hero__title { font-size: clamp(1.6rem, 7vw, 2.4rem); }
  .status-readout { font-size: 0.72rem; }
}
</style>

<!-- JAVASCRIPT -->
<script>
/* ── Typewriter ─────────────── */
(function(){const phrases=['reliable under pressure.','organized by habit.','transparent by choice.','building systems that last.'];const el=document.getElementById('typewriter');let pi=0,ci=0,del=false;function tick(){const ph=phrases[pi];if(!del){el.textContent=ph.slice(0,++ci);if(ci===ph.length){del=true;setTimeout(tick,2000);return;}}else{el.textContent=ph.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}setTimeout(tick,del?28:55);}setTimeout(tick,900);})();

/* ── Counters ──────────────── */
(function(){const els=document.querySelectorAll('.counter');let done=false;function run(){els.forEach(el=>{const t=+el.dataset.target,s=el.dataset.suffix||'';let n=0,step=Math.ceil(t/40);const tm=setInterval(()=>{n=Math.min(n+step,t);el.textContent=n+s;if(n>=t)clearInterval(tm);},40);});}const obs=new IntersectionObserver(e=>{if(e[0].isIntersecting&&!done){done=true;setTimeout(run,600);}},{threshold:.4});const hero=document.querySelector('.h-hero');if(hero)obs.observe(hero);})();

/* ── Scroll reveal ─────────── */
(function(){const items=document.querySelectorAll('.fade-up');if(!window.IntersectionObserver){items.forEach(el=>el.classList.add('visible'));return;}const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -30px 0px'});items.forEach(el=>obs.observe(el));})();

/* ── Scroll cue hide ───────── */
(function(){const cue=document.querySelector('.h-scroll-cue');if(!cue)return;window.addEventListener('scroll',()=>{cue.style.opacity=window.scrollY>80?'0':'1';},{passive:true});})();

</script>
