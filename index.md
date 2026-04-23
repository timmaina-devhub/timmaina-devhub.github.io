---
layout: bare
title: Home
---
<link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">

<nav class="navbar">
  <div class="logo"><strong>Timothy Maina</strong></div>
  <div class="nav-links">
    <a href="/" class="nav-active">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</nav>

<!-- HERO -->
<section class="h-hero">
  <canvas id="particles" aria-hidden="true"></canvas>
  <div class="h-hero__grid" aria-hidden="true"></div>
  <div class="h-orb h-orb--1" aria-hidden="true"></div>
  <div class="h-orb h-orb--2" aria-hidden="true"></div>
  <div class="h-hero__inner">
    <div class="h-hero__badge"><span class="h-badge__dot"></span>Available for hire · Nairobi, Kenya</div>
    <h1 class="h-hero__title">
      Turning raw data into<br>
      <span class="typewriter-wrap"><em id="typewriter"></em><span class="tw-cursor">|</span></span>
    </h1>
    <p class="h-hero__sub">
      I'm <strong>Timothy Maina</strong> — a Data Analyst who bridges the gap between raw numbers and strategic clarity. I surface the patterns that matter, build the dashboards that inform, and train the models that predict — so teams can stop guessing and start deciding with confidence.
    </p>
    <div class="h-hero__actions">
      <a href="/projects" class="h-btn h-btn--primary">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4"/></svg>
        View My Work
      </a>
      <a href="/contact" class="h-btn h-btn--ghost">Let's Talk</a>
    </div>
    <div class="h-trust">
      <div class="h-trust__item"><span class="h-trust__num counter" data-target="3" data-suffix="+">0</span><span class="h-trust__label">Projects Shipped</span></div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item"><span class="h-trust__num counter" data-target="3" data-suffix="">0</span><span class="h-trust__label">Core Disciplines</span></div>
      <div class="h-trust__divider"></div>
      <div class="h-trust__item"><span class="h-trust__num">24h</span><span class="h-trust__label">Response Time</span></div>
    </div>
  </div>
  <div class="h-scroll-cue" aria-hidden="true">
    <span>Scroll</span>
    <div class="h-scroll-cue__track"><div class="h-scroll-cue__dot"></div></div>
  </div>
</section>

<!-- WHAT I DO -->
<section class="h-section">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">What I Do</p>
      <h2>Where data meets <em>impact</em></h2>
    </div>
    <div class="h-pillars">
      <div class="h-pillar reveal-up" style="--d:.05s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3>Data Analytics</h3>
        <p>Cleaning, exploring, and modelling datasets to surface trends and answer the business questions that actually matter.</p>
        <div class="h-pillar__tools"><span>Python</span><span>SQL</span><span>Pandas</span><span>Excel</span></div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.15s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
        <h3>Dashboards &amp; Visualisation</h3>
        <p>Building interactive dashboards that give stakeholders a clear, real-time view of performance without needing to ask for a report.</p>
        <div class="h-pillar__tools"><span>Power BI</span><span>Plotly</span><span>Seaborn</span><span>Tableau</span></div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.25s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
        <h3>Machine Learning</h3>
        <p>Training and evaluating predictive models — from customer churn to fraud detection — with a focus on results non-technical stakeholders can act on.</p>
        <div class="h-pillar__tools"><span>scikit-learn</span><span>XGBoost</span><span>K-Means</span></div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURED PROJECTS -->
<section class="h-section h-section--alt">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">Selected Work</p>
      <h2>Featured <em>Projects</em></h2>
      <p class="h-section-sub">Real problems. Real data. Real outcomes. Explore the case studies — or run a live model simulation.</p>
    </div>

    <div class="fp-grid">

      <!-- Card 1: Superstore — Case Study only -->
      <div class="fp-card reveal-up" style="--d:.05s">
        <div class="fp-card__img">
          <div class="fp-card__chrome">
            <span class="fp-dot fp-dot--r"></span><span class="fp-dot fp-dot--y"></span><span class="fp-dot fp-dot--g"></span>
            <span class="fp-card__url">sales-dashboard · Tableau</span>
          </div>
          <div class="fp-card__screen">
            <img src="{{ '/images/sales-dashboard.png' | relative_url }}" alt="Superstore Sales Dashboard" loading="lazy">
            <div class="fp-card__img-overlay"></div>
          </div>
          <span class="fp-card__badge fp-card__badge--done">✓ Completed</span>
        </div>
        <div class="fp-card__body">
          <div class="fp-card__meta">
            <span class="fp-tag">Visualization</span>
            <span class="fp-tag fp-tag--ol">Tableau</span>
            <span class="fp-tag fp-tag--ol">Time Series</span>
          </div>
          <h3 class="fp-card__title">Superstore Sales Executive Dashboard</h3>
          <p class="fp-card__desc">An executive command centre that turns four years of Superstore data into one decision-ready view — combining KPI tracking, regional breakdowns, and ARIMA/Prophet sales forecasts.</p>
          <ul class="fp-card__bullets">
            <li>Identified loss-making sub-categories draining profit margin</li>
            <li>6-month forecast enabling proactive budget planning</li>
            <li>Reduced time-to-insight from hours of Excel work to one screen</li>
          </ul>
          <div class="fp-card__stack"><span>Tableau</span><span>Excel</span><span>ARIMA</span><span>Prophet</span></div>
        </div>
        <div class="fp-card__cta fp-card__cta--single">
          <a href="/projects#sales-dashboard" class="fp-btn fp-btn--primary fp-btn--full">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            View Case Study
          </a>
        </div>
      </div>

      <!-- Card 2: Churn — Live Demo + Case Study -->
      <div class="fp-card reveal-up" style="--d:.15s">
        <div class="fp-card__img">
          <div class="fp-card__chrome">
            <span class="fp-dot fp-dot--r"></span><span class="fp-dot fp-dot--y"></span><span class="fp-dot fp-dot--g"></span>
            <span class="fp-card__url">customer-churn · Python / ML</span>
          </div>
          <div class="fp-card__screen">
            <img src="{{ '/images/customer-analysis.png' | relative_url }}" alt="Customer Churn Analysis" loading="lazy">
            <div class="fp-card__img-overlay"></div>
          </div>
          <span class="fp-card__badge fp-card__badge--done">✓ Completed</span>
        </div>
        <div class="fp-card__body">
          <div class="fp-card__meta">
            <span class="fp-tag">Analytics</span>
            <span class="fp-tag fp-tag--ol">Python</span>
            <span class="fp-tag fp-tag--ol">ML</span>
          </div>
          <h3 class="fp-card__title">Customer Churn Analysis &amp; Segmentation</h3>
          <p class="fp-card__desc">An end-to-end churn prediction system combining RFM feature engineering with machine learning to flag at-risk customers before they leave — and show exactly who they are.</p>
          <ul class="fp-card__bullets">
            <li>Inactivity &amp; refund behaviour identified as strongest churn signals</li>
            <li>3 actionable customer segments surfaced via K-Means clustering</li>
            <li>High-recall model ensuring no at-risk customer goes undetected</li>
          </ul>
          <div class="fp-card__stack"><span>Python</span><span>Pandas</span><span>scikit-learn</span><span>Seaborn</span></div>
        </div>
        <div class="fp-card__cta">
          <button class="fp-btn fp-btn--demo" onclick="openDemo('churn')">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Live Demo
          </button>
          <a href="/projects#customer-analysis" class="fp-btn fp-btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

      <!-- Card 3: Fraud — Live Demo + Case Study -->
      <div class="fp-card reveal-up" style="--d:.25s">
        <div class="fp-card__img">
          <div class="fp-card__chrome">
            <span class="fp-dot fp-dot--r"></span><span class="fp-dot fp-dot--y"></span><span class="fp-dot fp-dot--g"></span>
            <span class="fp-card__url">fraud-detection · Random Forest</span>
          </div>
          <div class="fp-card__screen">
            <img src="{{ '/images/fraud-dashboard.png' | relative_url }}" alt="Fraud Detection System" loading="lazy">
            <div class="fp-card__img-overlay"></div>
          </div>
          <span class="fp-card__badge fp-card__badge--wip">⚡ In Progress</span>
        </div>
        <div class="fp-card__body">
          <div class="fp-card__meta">
            <span class="fp-tag">Machine Learning</span>
            <span class="fp-tag fp-tag--ol">scikit-learn</span>
            <span class="fp-tag fp-tag--ol">Tableau</span>
          </div>
          <h3 class="fp-card__title">Fraud Detection Command Centre</h3>
          <p class="fp-card__desc">A behavioural ML pipeline that identifies fraudulent transactions by analysing velocity patterns, device signals, and time anomalies — visualised through a real-time Tableau command centre.</p>
          <ul class="fp-card__bullets">
            <li>Random Forest with strong precision-recall on heavily imbalanced data</li>
            <li>High-frequency burst patterns flagged as the primary fraud signal</li>
            <li>Tableau dashboard tracking fraud trends &amp; estimated financial impact</li>
          </ul>
          <div class="fp-card__stack"><span>Python</span><span>Random Forest</span><span>SMOTE</span><span>Tableau</span></div>
        </div>
        <div class="fp-card__cta">
          <button class="fp-btn fp-btn--demo fp-btn--demo--red" onclick="openDemo('fraud')">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Live Demo
          </button>
          <a href="/projects#fraud-detection" class="fp-btn fp-btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

    </div>

    <div class="h-all-projects reveal-up" style="--d:.35s">
      <a href="/projects" class="h-btn h-btn--ghost">See All Projects →</a>
    </div>
  </div>
</section>

<!-- SKILLS -->
<section class="h-section">
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

<!-- CTA BANNER -->
<section class="h-cta-banner">
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
     DEMO MODALS
════════════════════════════════════════════ -->

<!-- CHURN MODAL -->
<div class="dm" id="modal-churn" role="dialog" aria-modal="true" aria-label="Customer Churn Predictor">
  <div class="dm__backdrop" onclick="closeDemo()"></div>
  <div class="dm__panel">

    <div class="dm__header">
      <div class="dm__header-left">
        <div class="dm__icon dm__icon--blue">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <div>
          <h3>Customer Churn Predictor</h3>
          <p>Adjust inputs to simulate a customer profile and predict churn risk</p>
        </div>
      </div>
      <button class="dm__close" onclick="closeDemo()" aria-label="Close">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- API status badge -->
    <div class="dm__api-bar dm__api-bar--offline">
      <span class="dm__api-dot"></span>
      <!-- ════════════════════════════════════════════
           SWAP STEP 1: Replace the text below with
           your Render API URL once deployed e.g:
           "🟢 Connected · https://churn-api.onrender.com"
           ════════════════════════════════════════════ -->
      <span>Simulation mode · Connect API when deployed</span>
      <span class="dm__api-tag">POST /predict</span>
    </div>

    <div class="dm__body">
      <div class="dm__inputs">

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Days Since Last Purchase</label>
            <span class="dm__val" id="cv-recency">45 days</span>
          </div>
          <p class="dm__hint">Higher inactivity = higher churn risk</p>
          <input class="dm__slider" type="range" id="c-recency" min="1" max="365" value="45"
            oninput="document.getElementById('cv-recency').textContent=this.value+' days'">
          <div class="dm__marks"><span>1d</span><span>180d</span><span>365d</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Total Orders Placed</label>
            <span class="dm__val" id="cv-freq">3 orders</span>
          </div>
          <p class="dm__hint">Fewer orders = lower engagement</p>
          <input class="dm__slider" type="range" id="c-freq" min="1" max="50" value="3"
            oninput="document.getElementById('cv-freq').textContent=this.value+' orders'">
          <div class="dm__marks"><span>1</span><span>25</span><span>50</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Total Spend</label>
            <span class="dm__val" id="cv-spend">$120</span>
          </div>
          <p class="dm__hint">Monetary value of the customer</p>
          <input class="dm__slider" type="range" id="c-spend" min="10" max="5000" value="120" step="10"
            oninput="document.getElementById('cv-spend').textContent='$'+Number(this.value).toLocaleString()">
          <div class="dm__marks"><span>$10</span><span>$2,500</span><span>$5,000</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Refund Rate</label>
            <span class="dm__val" id="cv-refund">10%</span>
          </div>
          <p class="dm__hint">High refunds signal dissatisfaction</p>
          <input class="dm__slider" type="range" id="c-refund" min="0" max="100" value="10"
            oninput="document.getElementById('cv-refund').textContent=this.value+'%'">
          <div class="dm__marks"><span>0%</span><span>50%</span><span>100%</span></div>
        </div>

      </div>

      <!-- Result panel -->
      <div class="dm__result" id="churn-result">
        <div class="dm__result-idle">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" stroke-width="1.3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          <p>Adjust the sliders then click<br><strong>Run Prediction</strong></p>
        </div>
      </div>
    </div>

    <div class="dm__footer">
      <button class="dm__run-btn" id="churn-run" onclick="runChurn()">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span id="churn-btn-text">Run Prediction</span>
      </button>
      <a href="/projects#customer-analysis" class="dm__case-link">View full case study →</a>
    </div>
  </div>
</div>

<!-- FRAUD MODAL -->
<div class="dm" id="modal-fraud" role="dialog" aria-modal="true" aria-label="Fraud Detection Simulator">
  <div class="dm__backdrop" onclick="closeDemo()"></div>
  <div class="dm__panel">

    <div class="dm__header">
      <div class="dm__header-left">
        <div class="dm__icon dm__icon--red">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <div>
          <h3>Fraud Detection Simulator</h3>
          <p>Simulate a transaction to get an instant fraud risk score</p>
        </div>
      </div>
      <button class="dm__close" onclick="closeDemo()" aria-label="Close">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="dm__api-bar dm__api-bar--offline">
      <span class="dm__api-dot"></span>
      <!-- ════════════════════════════════════════════
           SWAP STEP 2: Replace the text below with
           your Render API URL once deployed e.g:
           "🟢 Connected · https://fraud-api.onrender.com"
           ════════════════════════════════════════════ -->
      <span>Simulation mode · Connect API when deployed</span>
      <span class="dm__api-tag">POST /predict</span>
    </div>

    <div class="dm__body">
      <div class="dm__inputs">

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Transaction Amount</label>
            <span class="dm__val" id="fv-amount">$250</span>
          </div>
          <p class="dm__hint">Unusually large amounts raise fraud risk</p>
          <input class="dm__slider" type="range" id="f-amount" min="1" max="10000" value="250" step="10"
            oninput="document.getElementById('fv-amount').textContent='$'+Number(this.value).toLocaleString()">
          <div class="dm__marks"><span>$1</span><span>$5,000</span><span>$10,000</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Transactions in Last Hour</label>
            <span class="dm__val" id="fv-velocity">2 txns</span>
          </div>
          <p class="dm__hint">High velocity bursts are the primary fraud signal</p>
          <input class="dm__slider" type="range" id="f-velocity" min="1" max="30" value="2"
            oninput="document.getElementById('fv-velocity').textContent=this.value+' txns'">
          <div class="dm__marks"><span>1</span><span>15</span><span>30</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Distinct Devices Used</label>
            <span class="dm__val" id="fv-devices">1 device</span>
          </div>
          <p class="dm__hint">Multiple devices signal account takeover</p>
          <input class="dm__slider" type="range" id="f-devices" min="1" max="10" value="1"
            oninput="document.getElementById('fv-devices').textContent=this.value+' device'+(this.value>1?'s':'')">
          <div class="dm__marks"><span>1</span><span>5</span><span>10</span></div>
        </div>

        <div class="dm__field">
          <div class="dm__field-label">
            <label>Time of Day</label>
            <span class="dm__val" id="fv-hour">14:00</span>
          </div>
          <p class="dm__hint">Late-night transactions carry elevated risk</p>
          <input class="dm__slider" type="range" id="f-hour" min="0" max="23" value="14"
            oninput="document.getElementById('fv-hour').textContent=String(this.value).padStart(2,'0')+':00'">
          <div class="dm__marks"><span>00:00</span><span>12:00</span><span>23:00</span></div>
        </div>

      </div>

      <div class="dm__result" id="fraud-result">
        <div class="dm__result-idle">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" stroke-width="1.3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <p>Adjust the sliders then click<br><strong>Analyse Transaction</strong></p>
        </div>
      </div>
    </div>

    <div class="dm__footer">
      <button class="dm__run-btn dm__run-btn--red" id="fraud-run" onclick="runFraud()">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        <span id="fraud-btn-text">Analyse Transaction</span>
      </button>
      <a href="/projects#fraud-detection" class="dm__case-link">View full case study →</a>
    </div>
  </div>
</div>

<!-- JAVASCRIPT -->
<script>
/* ── Particles ─────────────── */
(function(){const c=document.getElementById('particles'),ctx=c.getContext('2d');let W,H,P=[];function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}resize();window.addEventListener('resize',resize,{passive:true});function rnd(a,b){return Math.random()*(b-a)+a;}function mk(){return{x:rnd(0,W),y:rnd(0,H),r:rnd(1,2.4),vx:rnd(-.2,.2),vy:rnd(-.35,-.08),a:rnd(.15,.65),fade:rnd(.003,.006)};}for(let i=0;i<70;i++)P.push(mk());function draw(){ctx.clearRect(0,0,W,H);P.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(99,155,255,${p.a})`;ctx.fill();p.x+=p.vx;p.y+=p.vy;p.a-=p.fade;if(p.a<=0||p.y<-10)P[i]=mk();});requestAnimationFrame(draw);}draw();})();

/* ── Typewriter ─────────────── */
(function(){const phrases=['decisions that matter.','patterns that predict.','stories that persuade.','clarity from complexity.'];const el=document.getElementById('typewriter');let pi=0,ci=0,del=false;function tick(){const ph=phrases[pi];if(!del){el.textContent=ph.slice(0,++ci);if(ci===ph.length){del=true;setTimeout(tick,2000);return;}}else{el.textContent=ph.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}setTimeout(tick,del?28:55);}setTimeout(tick,900);})();

/* ── Counters ──────────────── */
(function(){const els=document.querySelectorAll('.counter');let done=false;function run(){els.forEach(el=>{const t=+el.dataset.target,s=el.dataset.suffix||'';let n=0,step=Math.ceil(t/40);const tm=setInterval(()=>{n=Math.min(n+step,t);el.textContent=n+s;if(n>=t)clearInterval(tm);},40);});}const obs=new IntersectionObserver(e=>{if(e[0].isIntersecting&&!done){done=true;setTimeout(run,600);}},{threshold:.4});const hero=document.querySelector('.h-hero');if(hero)obs.observe(hero);})();

/* ── Scroll reveal ─────────── */
(function(){const items=document.querySelectorAll('.reveal-up');if(!window.IntersectionObserver){items.forEach(el=>el.classList.add('visible'));return;}const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -30px 0px'});items.forEach(el=>obs.observe(el));})();

/* ── Scroll cue hide ───────── */
(function(){const cue=document.querySelector('.h-scroll-cue');if(!cue)return;window.addEventListener('scroll',()=>{cue.style.opacity=window.scrollY>80?'0':'1';},{passive:true});})();

/* ── Modal open/close ──────── */
function openDemo(type) {
  const modal = document.getElementById('modal-' + type);
  if (!modal) return;
  modal.classList.add('dm--open');
  document.body.style.overflow = 'hidden';
}
function closeDemo() {
  document.querySelectorAll('.dm').forEach(m => m.classList.remove('dm--open'));
  document.body.style.overflow = '';
}
// Close on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDemo(); });

/* ══════════════════════════════════════════════════════
   CHURN SIMULATION
   ─────────────────────────────────────────────────────
   HOW TO CONNECT YOUR REAL API (when ready):
   1. Deploy your FastAPI app on Render.com
   2. Copy your Render URL e.g. https://churn-api-xxxx.onrender.com
   3. Replace CHURN_API_URL below with that URL
   4. Remove the "// SIMULATION MODE" block
   5. Uncomment the "// LIVE API MODE" block
   ══════════════════════════════════════════════════════ */
const CHURN_API_URL = 'https://YOUR-CHURN-API.onrender.com/predict'; // ← SWAP THIS

async function runChurn() {
  const btn    = document.getElementById('churn-run');
  const btnTxt = document.getElementById('churn-btn-text');
  const result = document.getElementById('churn-result');

  const recency   = +document.getElementById('c-recency').value;
  const frequency = +document.getElementById('c-freq').value;
  const monetary  = +document.getElementById('c-spend').value;
  const refund    = +document.getElementById('c-refund').value;

  // Loading state
  btn.disabled = true;
  btnTxt.textContent = 'Running model…';
  result.innerHTML = `<div class="dm__result-loading"><div class="dm__spinner"></div><p>Running prediction…</p></div>`;

  await new Promise(r => setTimeout(r, 1200)); // simulate latency

  // ── SIMULATION MODE (remove this block when API is live) ──
  const churnProb = simulateChurn(recency, frequency, monetary, refund);
  showChurnResult(result, churnProb, recency, frequency, monetary, refund);
  // ─────────────────────────────────────────────────────────

  /* ── LIVE API MODE (uncomment when API is deployed) ───────
  try {
    const res  = await fetch(CHURN_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recency, frequency, monetary, refund_rate: refund })
    });
    const data = await res.json();
    showChurnResult(result, data.churn_probability, recency, frequency, monetary, refund);
  } catch (err) {
    result.innerHTML = `<div class="dm__result-error"><p>⚠️ API not reachable. Running in simulation mode.</p></div>`;
    const churnProb = simulateChurn(recency, frequency, monetary, refund);
    showChurnResult(result, churnProb, recency, frequency, monetary, refund);
  }
  ──────────────────────────────────────────────────────── */

  btn.disabled = false;
  btnTxt.textContent = 'Run Again';
}

function simulateChurn(recency, frequency, monetary, refund) {
  // Weighted scoring matching RFM + refund logic from the actual model
  let score = 0;
  score += Math.min((recency / 365) * 45, 45);       // recency: up to 45pts
  score += Math.max(0, (1 - frequency / 50) * 25);   // frequency: up to 25pts
  score += Math.max(0, (1 - monetary / 5000) * 15);  // monetary: up to 15pts
  score += (refund / 100) * 15;                       // refund: up to 15pts
  return Math.min(Math.round(score), 98);
}

function showChurnResult(container, prob, recency, freq, monetary, refund) {
  const isHigh = prob >= 60;
  const isMed  = prob >= 30 && prob < 60;
  const colour = isHigh ? '#ef4444' : isMed ? '#f59e0b' : '#10b981';
  const label  = isHigh ? 'High Risk' : isMed ? 'Medium Risk' : 'Low Risk';
  const segment = freq >= 20 && monetary >= 1000 ? 'Loyal Customer'
                : isHigh ? 'At-Risk Customer'
                : isMed  ? 'Passive Customer'
                : 'Active Customer';
  const action  = isHigh ? 'Launch immediate re-engagement campaign'
                : isMed  ? 'Send personalised retention offer'
                : 'Continue standard engagement';

  container.innerHTML = `
    <div class="dm__result-card">
      <div class="dm__gauge-wrap">
        <svg class="dm__gauge" viewBox="0 0 120 70">
          <path d="M10 65 A55 55 0 0 1 110 65" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="10" stroke-linecap="round"/>
          <path d="M10 65 A55 55 0 0 1 110 65" fill="none" stroke="${colour}" stroke-width="10" stroke-linecap="round"
            stroke-dasharray="173" stroke-dashoffset="${173 - (173 * prob / 100)}"
            style="transition:stroke-dashoffset 1s ease;"/>
        </svg>
        <div class="dm__gauge-num" style="color:${colour}">${prob}%</div>
        <div class="dm__gauge-sub">Churn Probability</div>
      </div>
      <div class="dm__result-details">
        <div class="dm__result-badge" style="background:${colour}22;color:${colour};border:1px solid ${colour}44">${label}</div>
        <div class="dm__result-row"><span>Segment</span><strong>${segment}</strong></div>
        <div class="dm__result-row"><span>Key Driver</span><strong>${recency > 180 ? 'High inactivity' : refund > 40 ? 'High refund rate' : freq < 3 ? 'Low engagement' : 'Healthy profile'}</strong></div>
        <div class="dm__result-action">💡 ${action}</div>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════
   FRAUD SIMULATION
   HOW TO CONNECT YOUR REAL API (when ready):
   1. Deploy your FastAPI app on Render.com
   2. Replace FRAUD_API_URL below with your Render URL
   3. Follow the same swap pattern as churn above
   ══════════════════════════════════════════════════════ */
const FRAUD_API_URL = 'https://YOUR-FRAUD-API.onrender.com/predict'; // ← SWAP THIS

async function runFraud() {
  const btn    = document.getElementById('fraud-run');
  const btnTxt = document.getElementById('fraud-btn-text');
  const result = document.getElementById('fraud-result');

  const amount   = +document.getElementById('f-amount').value;
  const velocity = +document.getElementById('f-velocity').value;
  const devices  = +document.getElementById('f-devices').value;
  const hour     = +document.getElementById('f-hour').value;

  btn.disabled = true;
  btnTxt.textContent = 'Analysing…';
  result.innerHTML = `<div class="dm__result-loading"><div class="dm__spinner dm__spinner--red"></div><p>Analysing transaction…</p></div>`;

  await new Promise(r => setTimeout(r, 1400));

  // ── SIMULATION MODE ──
  const fraudProb = simulateFraud(amount, velocity, devices, hour);
  showFraudResult(result, fraudProb, amount, velocity, devices, hour);
  // ─────────────────────

  /* ── LIVE API MODE ──────────────────────────────────────
  try {
    const res  = await fetch(FRAUD_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, velocity_1h: velocity, distinct_devices: devices, hour })
    });
    const data = await res.json();
    showFraudResult(result, data.fraud_probability, amount, velocity, devices, hour);
  } catch (err) {
    const fraudProb = simulateFraud(amount, velocity, devices, hour);
    showFraudResult(result, fraudProb, amount, velocity, devices, hour);
  }
  ──────────────────────────────────────────────────────── */

  btn.disabled = false;
  btnTxt.textContent = 'Analyse Again';
}

function simulateFraud(amount, velocity, devices, hour) {
  let score = 0;
  score += Math.min((amount / 10000) * 30, 30);          // amount: up to 30pts
  score += Math.min(((velocity - 1) / 29) * 40, 40);    // velocity: up to 40pts (key signal)
  score += Math.min(((devices - 1) / 9) * 20, 20);      // devices: up to 20pts
  const nightRisk = (hour >= 0 && hour <= 5) ? 10 : 0;  // late night: up to 10pts
  score += nightRisk;
  return Math.min(Math.round(score), 99);
}

function showFraudResult(container, prob, amount, velocity, devices, hour) {
  const isHigh = prob >= 65;
  const isMed  = prob >= 35 && prob < 65;
  const colour = isHigh ? '#ef4444' : isMed ? '#f59e0b' : '#10b981';
  const label  = isHigh ? '🚨 High Fraud Risk' : isMed ? '⚠️ Suspicious' : '✅ Likely Legitimate';
  const action  = isHigh ? 'Block transaction — flag for manual review'
                : isMed  ? 'Trigger additional authentication step'
                : 'Approve transaction — continue monitoring';
  const driver  = velocity >= 15 ? 'Transaction velocity burst'
                : devices >= 5   ? 'Multiple device usage'
                : amount >= 5000 ? 'High transaction amount'
                : hour <= 4      ? 'Late-night timing'
                : 'No significant risk signals';

  container.innerHTML = `
    <div class="dm__result-card">
      <div class="dm__gauge-wrap">
        <svg class="dm__gauge" viewBox="0 0 120 70">
          <path d="M10 65 A55 55 0 0 1 110 65" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="10" stroke-linecap="round"/>
          <path d="M10 65 A55 55 0 0 1 110 65" fill="none" stroke="${colour}" stroke-width="10" stroke-linecap="round"
            stroke-dasharray="173" stroke-dashoffset="${173 - (173 * prob / 100)}"
            style="transition:stroke-dashoffset 1s ease;"/>
        </svg>
        <div class="dm__gauge-num" style="color:${colour}">${prob}%</div>
        <div class="dm__gauge-sub">Fraud Probability</div>
      </div>
      <div class="dm__result-details">
        <div class="dm__result-badge" style="background:${colour}22;color:${colour};border:1px solid ${colour}44">${label}</div>
        <div class="dm__result-row"><span>Primary Signal</span><strong>${driver}</strong></div>
        <div class="dm__result-row"><span>Velocity</span><strong>${velocity} txn/hr ${velocity >= 15 ? '🔴' : velocity >= 8 ? '🟡' : '🟢'}</strong></div>
        <div class="dm__result-action">🛡️ ${action}</div>
      </div>
    </div>`;
}
</script>

<style>
/* ── Tokens ─── */
:root{--bg:#020617;--sur:#0f172a;--sur2:#1e293b;--bdr:rgba(255,255,255,0.07);--blue:#2563eb;--blue-lt:#3b82f6;--blue-d:rgba(59,130,246,0.14);--txt:#e2e8f0;--muted:#94a3b8;--dim:#475569;}
*,*::before,*::after{box-sizing:border-box;}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt);margin:0;overflow-x:hidden;}
h1,h2,h3{font-family:'DM Serif Display',serif;}
em{font-style:italic;color:#60a5fa;}
.nav-active{color:var(--blue-lt)!important;font-weight:600;}

/* ── Reveal ── */
.reveal-up{opacity:0;transform:translateY(32px);transition:opacity .65s ease calc(var(--d,0s)),transform .65s ease calc(var(--d,0s));}
.reveal-up.visible{opacity:1;transform:translateY(0);}

/* ── Particles ── */
#particles{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;}

/* ── Hero ── */
.h-hero{position:relative;width:100%;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:var(--bg);}
.h-hero__grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(59,130,246,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,.04) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%);}
.h-orb{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0;}
.h-orb--1{width:560px;height:560px;background:radial-gradient(circle,rgba(37,99,235,.2),transparent 70%);top:-120px;left:-120px;animation:orbFloat 9s ease-in-out infinite;}
.h-orb--2{width:440px;height:440px;background:radial-gradient(circle,rgba(14,165,233,.13),transparent 70%);bottom:-90px;right:-90px;animation:orbFloat 12s ease-in-out infinite reverse;}
@keyframes orbFloat{0%,100%{transform:translate(0,0);}50%{transform:translate(28px,-28px);}}
.h-hero__inner{position:relative;z-index:2;text-align:center;max-width:760px;padding:0 24px;}
.h-hero__badge{display:inline-flex;align-items:center;gap:8px;font-size:.82rem;font-weight:500;color:#10b981;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);padding:6px 16px;border-radius:999px;margin-bottom:30px;animation:fadeUp .8s .1s ease both;}
.h-badge__dot{width:7px;height:7px;border-radius:50%;background:#10b981;animation:dotPulse 2s infinite;}
@keyframes dotPulse{0%,100%{box-shadow:0 0 0 2px rgba(16,185,129,.25);}50%{box-shadow:0 0 0 5px rgba(16,185,129,.05);}}
.h-hero__title{font-size:clamp(2.4rem,6vw,4.4rem);color:#fff;line-height:1.15;margin-bottom:24px;animation:fadeUp .8s .2s ease both;}
.typewriter-wrap{display:inline-block;}
.tw-cursor{display:inline-block;color:var(--blue-lt);animation:blink .75s step-end infinite;margin-left:2px;}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
.h-hero__sub{font-size:1rem;color:var(--muted);line-height:1.8;max-width:580px;margin:0 auto 36px;animation:fadeUp .8s .3s ease both;}
.h-hero__sub strong{color:#e2e8f0;}
.h-hero__actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:52px;animation:fadeUp .8s .4s ease both;}
.h-btn{display:inline-flex;align-items:center;gap:7px;padding:12px 26px;border-radius:10px;font-size:.92rem;font-weight:600;text-decoration:none;transition:all .25s;font-family:'DM Sans',sans-serif;}
.h-btn--primary{background:var(--blue);color:#fff;border:1px solid var(--blue);box-shadow:0 4px 20px rgba(37,99,235,.3);}
.h-btn--primary:hover{background:#1d4ed8;transform:translateY(-3px);box-shadow:0 10px 30px rgba(37,99,235,.5);}
.h-btn--ghost{background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,.12);}
.h-btn--ghost:hover{color:#e5e7eb;border-color:rgba(255,255,255,.3);transform:translateY(-3px);}
.h-trust{display:flex;align-items:center;justify-content:center;gap:28px;flex-wrap:wrap;animation:fadeUp .8s .5s ease both;}
.h-trust__item{text-align:center;}
.h-trust__num{display:block;font-family:'DM Serif Display',serif;font-size:1.75rem;color:#fff;line-height:1;}
.h-trust__label{font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:.07em;margin-top:5px;display:block;}
.h-trust__divider{width:1px;height:36px;background:var(--bdr);}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}

/* ── Scroll cue ── */
.h-scroll-cue{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);z-index:10;display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--dim);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;animation:fadeUp .8s .9s ease both;pointer-events:none;transition:opacity .4s;}
@media(max-height:700px),(max-width:480px){.h-scroll-cue{display:none;}}
.h-scroll-cue__track{width:20px;height:32px;border:1px solid rgba(255,255,255,.12);border-radius:999px;position:relative;overflow:hidden;}
.h-scroll-cue__dot{width:4px;height:4px;background:var(--blue-lt);border-radius:50%;position:absolute;left:50%;transform:translateX(-50%);animation:scrollDot 1.8s ease-in-out infinite;}
@keyframes scrollDot{0%{top:5px;opacity:1;}100%{top:22px;opacity:0;}}

/* ── Sections ── */
.h-section{width:100%;padding:90px 40px;}
.h-section--alt{background:rgba(15,23,42,.5);border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);}
.container{width:100%;max-width:1140px;margin:0 auto;}
.h-section-header{text-align:center;margin-bottom:52px;}
.h-section-header h2{font-size:clamp(1.7rem,3.5vw,2.5rem);color:#fff;line-height:1.25;margin:8px 0 12px;}
.h-section-sub{color:#64748b;font-size:.92rem;max-width:500px;margin:0 auto;}
.h-eyebrow{font-size:.74rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--blue-lt);display:block;margin-bottom:6px;}

/* ── Pillars ── */
.h-pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
.h-pillar{background:linear-gradient(145deg,var(--sur2),var(--sur));border:1px solid var(--bdr);border-radius:18px;padding:28px 24px;transition:transform .3s,box-shadow .3s,border-color .3s;}
.h-pillar:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.4);border-color:rgba(59,130,246,.25);}
.h-pillar__icon{width:46px;height:46px;background:var(--blue-d);border:1px solid rgba(59,130,246,.2);border-radius:12px;display:flex;align-items:center;justify-content:center;color:#60a5fa;margin-bottom:18px;}
.h-pillar h3{font-size:1.1rem;color:#fff;margin-bottom:10px;}
.h-pillar p{color:var(--muted);font-size:.88rem;line-height:1.7;margin-bottom:18px;}
.h-pillar__tools{display:flex;flex-wrap:wrap;gap:5px;}
.h-pillar__tools span{font-size:.72rem;padding:3px 9px;background:var(--blue-d);border:1px solid rgba(59,130,246,.2);border-radius:999px;color:#93c5fd;}

/* ══ FEATURED PROJECTS CARDS ══ */
.fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;}
.fp-card{display:flex;flex-direction:column;background:#ffffff08;border:1px solid rgba(255,255,255,.09);border-radius:20px;overflow:hidden;transition:transform .32s ease,box-shadow .32s ease,border-color .32s ease;backdrop-filter:blur(4px);}
.fp-card:hover{transform:translateY(-10px);box-shadow:0 32px 64px rgba(0,0,0,.55),0 0 0 1px rgba(59,130,246,.2);border-color:rgba(59,130,246,.25);}
.fp-card__img{position:relative;}
.fp-card__chrome{display:flex;align-items:center;gap:5px;padding:8px 12px;background:rgba(2,6,23,.9);border-bottom:1px solid rgba(255,255,255,.06);}
.fp-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.fp-dot--r{background:#ff5f57;}.fp-dot--y{background:#febc2e;}.fp-dot--g{background:#28c840;}
.fp-card__url{font-size:.62rem;color:var(--dim);background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07);border-radius:4px;padding:2px 8px;font-family:monospace;margin-left:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.fp-card__screen{aspect-ratio:16/9;overflow:hidden;background:var(--sur);position:relative;}
.fp-card__screen img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease;}
.fp-card:hover .fp-card__screen img{transform:scale(1.06);}
.fp-card__img-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,rgba(2,6,23,.6) 100%);pointer-events:none;}
.fp-card__badge{position:absolute;top:12px;right:12px;font-size:.66rem;font-weight:700;padding:3px 9px;border-radius:999px;letter-spacing:.04em;}
.fp-card__badge--done{background:rgba(16,185,129,.15);color:#10b981;border:1px solid rgba(16,185,129,.3);}
.fp-card__badge--wip{background:rgba(245,158,11,.15);color:#f59e0b;border:1px solid rgba(245,158,11,.3);}
.fp-card__body{padding:20px 20px 0;flex:1;display:flex;flex-direction:column;}
.fp-card__meta{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;}
.fp-card__title{font-size:1.05rem;color:#fff;line-height:1.3;margin-bottom:10px;}
.fp-card__desc{font-size:.86rem;color:var(--muted);line-height:1.7;margin-bottom:14px;}
.fp-card__bullets{list-style:none;padding:0;margin:0 0 16px;display:flex;flex-direction:column;gap:6px;}
.fp-card__bullets li{font-size:.8rem;color:#cbd5e1;padding-left:16px;position:relative;line-height:1.5;}
.fp-card__bullets li::before{content:"▸";position:absolute;left:0;top:1px;color:var(--blue-lt);font-size:.7rem;}
.fp-card__stack{display:flex;flex-wrap:wrap;gap:5px;padding:12px 0;border-top:1px solid rgba(255,255,255,.05);margin-top:auto;}
.fp-card__stack span{font-size:.7rem;padding:3px 8px;background:rgba(37,99,235,.1);border:1px solid rgba(59,130,246,.18);border-radius:999px;color:#93c5fd;font-family:'DM Sans',sans-serif;}
.fp-card__cta{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:16px 20px;border-top:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.15);}
.fp-card__cta--single{grid-template-columns:1fr;}
.fp-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:9px 14px;border-radius:8px;font-size:.8rem;font-weight:600;text-decoration:none;transition:all .22s ease;font-family:'DM Sans',sans-serif;cursor:pointer;border:none;}
.fp-btn--primary{background:var(--blue);color:#fff;border:1px solid var(--blue);}
.fp-btn--primary:hover{background:#1d4ed8;transform:translateY(-2px);box-shadow:0 6px 18px rgba(37,99,235,.4);}
.fp-btn--full{grid-column:1/-1;}
.fp-btn--ghost{background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,.12);}
.fp-btn--ghost:hover{color:var(--txt);border-color:rgba(255,255,255,.28);transform:translateY(-2px);}
/* Live Demo button */
.fp-btn--demo{background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#fff;border:1px solid rgba(99,155,255,.3);box-shadow:0 0 12px rgba(37,99,235,.25);}
.fp-btn--demo:hover{background:linear-gradient(135deg,#1e40af,#1d4ed8);transform:translateY(-2px);box-shadow:0 6px 20px rgba(37,99,235,.45);}
.fp-btn--demo--red{background:linear-gradient(135deg,#b91c1c,#dc2626);border-color:rgba(239,68,68,.3);box-shadow:0 0 12px rgba(220,38,38,.2);}
.fp-btn--demo--red:hover{background:linear-gradient(135deg,#991b1b,#b91c1c);box-shadow:0 6px 20px rgba(220,38,38,.4);}

.fp-tag{display:inline-block;padding:4px 10px;font-size:.7rem;font-weight:500;background:var(--blue);border-radius:999px;color:#fff;font-family:'DM Sans',sans-serif;white-space:nowrap;}
.fp-tag--ol{background:transparent;border:1px solid rgba(59,130,246,.4);color:#93c5fd;}
.h-all-projects{text-align:center;margin-top:40px;}

/* ── Stack ── */
.h-stack{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;}
.h-stack__item{background:linear-gradient(145deg,var(--sur2),var(--sur));border:1px solid var(--bdr);border-radius:12px;padding:16px 12px;text-align:center;transition:all .25s;cursor:default;}
.h-stack__item:hover{border-color:rgba(59,130,246,.35);background:var(--blue-d);transform:translateY(-3px);}
.h-stack__name{font-size:.86rem;font-weight:500;color:#cbd5e1;}

/* ── CTA banner ── */
.h-cta-banner{position:relative;width:100%;padding:90px 40px;text-align:center;overflow:hidden;background:var(--bg);border-top:1px solid var(--bdr);}
.h-cta-banner__glow{position:absolute;inset:0;background:radial-gradient(ellipse 70% 70% at 50% 50%,rgba(37,99,235,.12),transparent);pointer-events:none;}
.h-cta-banner__inner{position:relative;z-index:2;max-width:620px;margin:0 auto;}
.h-cta-banner__inner h2{font-size:clamp(1.7rem,4vw,2.7rem);color:#fff;line-height:1.2;margin:12px 0 16px;}
.h-cta-banner__inner p{color:var(--muted);font-size:.97rem;line-height:1.75;margin-bottom:34px;}
.h-cta-banner__actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}

/* ══════════════════════════════════════
   DEMO MODAL STYLES
══════════════════════════════════════ */
.dm{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .3s ease;}
.dm--open{opacity:1;pointer-events:all;}
.dm__backdrop{position:absolute;inset:0;background:rgba(2,6,23,.85);backdrop-filter:blur(6px);}
.dm__panel{position:relative;z-index:1;background:linear-gradient(160deg,#1e293b,#0f172a);border:1px solid rgba(255,255,255,.1);border-radius:22px;width:100%;max-width:780px;max-height:90vh;overflow-y:auto;display:flex;flex-direction:column;box-shadow:0 32px 80px rgba(0,0,0,.7);animation:panelIn .35s ease both;}
.dm--open .dm__panel{animation:panelIn .35s ease both;}
@keyframes panelIn{from{opacity:0;transform:translateY(24px) scale(.97);}to{opacity:1;transform:translateY(0) scale(1);}}

/* Header */
.dm__header{display:flex;align-items:center;justify-content:space-between;padding:22px 24px;border-bottom:1px solid rgba(255,255,255,.07);}
.dm__header-left{display:flex;align-items:center;gap:14px;}
.dm__icon{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.dm__icon--blue{background:rgba(37,99,235,.15);border:1px solid rgba(59,130,246,.25);color:var(--blue-lt);}
.dm__icon--red{background:rgba(220,38,38,.12);border:1px solid rgba(239,68,68,.25);color:#f87171;}
.dm__header-left h3{font-size:1.05rem;color:#fff;margin:0 0 3px;}
.dm__header-left p{font-size:.8rem;color:var(--muted);margin:0;}
.dm__close{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;color:var(--muted);cursor:pointer;transition:all .2s;}
.dm__close:hover{background:rgba(255,255,255,.1);color:#fff;}

/* API status bar */
.dm__api-bar{display:flex;align-items:center;gap:8px;padding:8px 24px;font-size:.75rem;font-family:'DM Sans',sans-serif;}
.dm__api-bar--offline{background:rgba(245,158,11,.06);border-bottom:1px solid rgba(245,158,11,.12);color:#f59e0b;}
.dm__api-bar--online{background:rgba(16,185,129,.06);border-bottom:1px solid rgba(16,185,129,.12);color:#10b981;}
.dm__api-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0;}
.dm__api-tag{margin-left:auto;font-family:monospace;font-size:.7rem;opacity:.6;}

/* Body: inputs + result */
.dm__body{display:grid;grid-template-columns:1fr 1fr;gap:0;flex:1;}
.dm__inputs{padding:22px 20px;border-right:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;gap:18px;}
.dm__field{display:flex;flex-direction:column;gap:5px;}
.dm__field-label{display:flex;justify-content:space-between;align-items:baseline;}
.dm__field-label label{font-size:.78rem;font-weight:600;color:#e2e8f0;}
.dm__val{font-size:.82rem;font-weight:700;color:var(--blue-lt);font-family:'DM Sans',sans-serif;}
.dm__hint{font-size:.72rem;color:var(--dim);margin:0;line-height:1.4;}
.dm__slider{width:100%;height:4px;border-radius:999px;outline:none;cursor:pointer;accent-color:var(--blue-lt);}
.dm__marks{display:flex;justify-content:space-between;font-size:.65rem;color:var(--dim);margin-top:2px;}

/* Result panel */
.dm__result{padding:22px 20px;display:flex;align-items:center;justify-content:center;min-height:260px;}
.dm__result-idle{display:flex;flex-direction:column;align-items:center;gap:12px;text-align:center;}
.dm__result-idle p{font-size:.85rem;color:var(--dim);line-height:1.6;margin:0;}
.dm__result-idle strong{color:var(--txt);}
.dm__result-loading{display:flex;flex-direction:column;align-items:center;gap:14px;}
.dm__result-loading p{font-size:.82rem;color:var(--muted);}
.dm__spinner{width:32px;height:32px;border:3px solid rgba(59,130,246,.2);border-top-color:var(--blue-lt);border-radius:50%;animation:spin .7s linear infinite;}
.dm__spinner--red{border-color:rgba(239,68,68,.2);border-top-color:#f87171;}
@keyframes spin{to{transform:rotate(360deg);}}

/* Result card */
.dm__result-card{display:flex;flex-direction:column;gap:16px;width:100%;}
.dm__gauge-wrap{position:relative;display:flex;flex-direction:column;align-items:center;}
.dm__gauge{width:140px;overflow:visible;}
.dm__gauge-num{font-family:'DM Serif Display',serif;font-size:2rem;line-height:1;margin-top:-8px;}
.dm__gauge-sub{font-size:.7rem;color:var(--dim);text-transform:uppercase;letter-spacing:.08em;margin-top:2px;}
.dm__result-details{display:flex;flex-direction:column;gap:10px;}
.dm__result-badge{display:inline-block;font-size:.78rem;font-weight:700;padding:5px 12px;border-radius:999px;width:fit-content;}
.dm__result-row{display:flex;justify-content:space-between;align-items:center;font-size:.8rem;padding:7px 10px;background:rgba(255,255,255,.04);border-radius:8px;}
.dm__result-row span{color:var(--muted);}
.dm__result-row strong{color:var(--txt);text-align:right;}
.dm__result-action{font-size:.8rem;color:#e2e8f0;background:rgba(37,99,235,.1);border:1px solid rgba(59,130,246,.2);border-radius:8px;padding:10px 12px;line-height:1.5;}

/* Footer */
.dm__footer{display:flex;align-items:center;gap:14px;padding:16px 24px;border-top:1px solid rgba(255,255,255,.07);background:rgba(0,0,0,.1);}
.dm__run-btn{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;background:var(--blue);color:#fff;border:1px solid var(--blue);border-radius:10px;font-size:.88rem;font-weight:600;cursor:pointer;transition:all .25s;font-family:'DM Sans',sans-serif;}
.dm__run-btn:hover:not(:disabled){background:#1d4ed8;transform:translateY(-2px);box-shadow:0 8px 22px rgba(37,99,235,.4);}
.dm__run-btn:disabled{opacity:.6;cursor:not-allowed;}
.dm__run-btn--red{background:#dc2626;border-color:#dc2626;}
.dm__run-btn--red:hover:not(:disabled){background:#b91c1c;box-shadow:0 8px 22px rgba(220,38,38,.4);}
.dm__case-link{margin-left:auto;font-size:.8rem;color:var(--blue-lt);text-decoration:none;font-weight:500;}
.dm__case-link:hover{text-decoration:underline;}

/* ══ Responsive ══ */
@media(max-width:1000px){.fp-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:900px){.h-pillars{grid-template-columns:1fr 1fr;}}
@media(max-width:700px){
  .dm__body{grid-template-columns:1fr;}
  .dm__inputs{border-right:none;border-bottom:1px solid rgba(255,255,255,.07);}
  .dm__panel{max-height:95vh;}
}
@media(max-width:640px){
  .h-section{padding:60px 18px;}
  .h-hero__inner{padding:0 18px;}
  .h-pillars{grid-template-columns:1fr;}
  .fp-grid{grid-template-columns:1fr;}
  .h-trust{gap:16px;}
  .h-trust__divider{height:28px;}
  .h-cta-banner{padding:60px 20px;}
  .h-stack{grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px;}
  .dm__header{padding:16px 18px;}
  .dm__inputs,.dm__result{padding:16px 18px;}
  .dm__footer{padding:14px 18px;}
}
@media(max-width:400px){
  .h-hero__title{font-size:2rem;}
  .h-hero__actions,.h-cta-banner__actions{flex-direction:column;align-items:center;}
  .h-btn{width:100%;text-align:center;justify-content:center;}
  .fp-card__cta{grid-template-columns:1fr;}
}
</style>
