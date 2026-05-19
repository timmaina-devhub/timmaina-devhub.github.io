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
    <a href="/intelligence_platform">Intelligence Platform</a>
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
      I'm <strong>Timothy Maina</strong>, an Applied Data Scientist based in Nairobi. I clean messy datasets, build dashboards people actually use, and train ML models on real business problems. Most of my work lives somewhere between SQL queries and a stakeholder asking "so what does this mean?"
    </p>
    <div class="h-hero__actions">
      <a href="/projects" class="h-btn h-btn--primary">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0l-4-4m4 4l-4 4"/></svg>
        View My Work
      </a>
      <a href="/contact" class="h-btn h-btn--ghost">Let's Talk</a>
    </div>
    <div class="h-trust">
      <div class="h-trust__item"><span class="h-trust__num counter" data-target="5" data-suffix="+">0</span><span class="h-trust__label">Projects Shipped</span></div>
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
      <h2>Where data meets <em>purpose</em></h2>
    </div>
    <div class="h-pillars">
      <div class="h-pillar reveal-up" style="--d:.05s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3>Data Analytics</h3>
        <p>Profiling, cleaning, and exploring datasets to figure out what's actually going on. I write SQL and Python to answer specific questions, not just to produce outputs.</p>
        <div class="h-pillar__tools"><span>Python</span><span>SQL</span><span>Pandas</span><span>Excel</span></div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.15s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg></div>
        <h3>Dashboards &amp; Visualisation</h3>
        <p>Building dashboards in Power BI and Tableau that are actually maintained after handoff. I focus on layout and filter logic so the thing stays useful beyond the first demo.</p>
        <div class="h-pillar__tools"><span>Power BI</span><span>Plotly</span><span>Seaborn</span><span>Tableau</span></div>
      </div>
      <div class="h-pillar reveal-up" style="--d:.25s">
        <div class="h-pillar__icon"><svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
        <h3>Machine Learning</h3>
        <p>Training classification and regression models on real, messy data. I care about precision-recall tradeoffs, feature leakage, and whether the output is something a non-technical person can actually use.</p>
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
      <p class="h-section-sub">Seven end-to-end projects across ML, analytics, and visualisation. Each one started from raw data and went through the full process.</p>
    </div>

    <div class="fp-grid">

      <!-- Card 1: Logistics -->
      <div class="fp-card reveal-up" style="--d:.05s">
        <div class="fp-card__img">
          <div class="fp-card__chrome">
            <span class="fp-dot fp-dot--r"></span><span class="fp-dot fp-dot--y"></span><span class="fp-dot fp-dot--g"></span>
            <span class="fp-card__url">Delivery Downtime Prediction & Route Optimization</span>
          </div>
          <div class="fp-card__screen">
            <img src="{{ '/images/coming_soon_banner.png' | relative_url }}" alt="Logistics Dashboard" loading="lazy">
            <div class="fp-card__img-overlay"></div>
          </div>
          <span class="fp-card__badge fp-card__badge--wip">⚡ In Progress</span>
        </div>
        <div class="fp-card__body">
          <div class="fp-card__meta">
            <span class="fp-tag">Supply Chain Analytics</span>
            <span class="fp-tag fp-tag--ol">Power BI</span>
            <span class="fp-tag fp-tag--ol">ML</span>
          </div>
          <h3 class="fp-card__title">Delivery Downtime &amp; Route Optimization</h3>
          <p class="fp-card__desc">Predicting delivery delay hours using operational and driver data. The main challenge was engineering useful features without leaking target information into the inputs.</p>
          <ul class="fp-card__bullets">
            <li>Driver behaviour and route conditions turned out to matter more than distance.</li>
            <li>Traffic and weather proxied from GPS speed patterns, no external APIs.</li>
            <li>R² of ~0.70 after removing features that caused ~0.99 leakage.</li>
          </ul>
          <div class="fp-card__stack"><span>Regression</span><span>Feature Engineering</span><span>Python</span><span>Power BI</span></div>
        </div>
        <div class="fp-card__cta">
          <a href="/intelligence_platform#logistics" class="fp-cta-btn fp-cta-btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Delay Predictor
          </a>
          <a href="/projects#Delivery-Downtime-Route-Optimization" class="fp-cta-btn fp-cta-btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

      <!-- Card 2: Churn -->
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
          <p class="fp-card__desc">Built RFM features from transaction history, trained a logistic regression model for churn prediction, and ran K-Means to group customers into segments worth treating differently.</p>
          <ul class="fp-card__bullets">
            <li>Days since last purchase and refund rate were the strongest predictors.</li>
            <li>Optimised for recall so fewer at-risk customers slip through undetected.</li>
            <li>K-Means produced 3 stable segments with clear behavioural differences.</li>
          </ul>
          <div class="fp-card__stack"><span>Python</span><span>Pandas</span><span>scikit-learn</span><span>Seaborn</span></div>
        </div>
        <div class="fp-card__cta">
          <a href="/intelligence_platform#churn" class="fp-cta-btn fp-cta-btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Churn Predictor
          </a>
          <a href="/projects#customer-analysis" class="fp-cta-btn fp-cta-btn--ghost">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Case Study
          </a>
        </div>
      </div>

      <!-- Card 3: Fraud -->
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
          <p class="fp-card__desc">Fraud detection built around behavioural features rather than transaction amounts alone. The dataset was heavily imbalanced, so model selection was mostly about finding a precision-recall tradeoff that made operational sense.</p>
          <ul class="fp-card__bullets">
            <li>Transaction velocity in the past hour was the single strongest fraud signal.</li>
            <li>SMOTE helped, but threshold tuning did most of the precision-recall work.</li>
            <li>Tableau dashboard shows flagged entities and estimated exposure over time.</li>
          </ul>
          <div class="fp-card__stack"><span>Python</span><span>Random Forest</span><span>SMOTE</span><span>Tableau</span></div>
        </div>
        <div class="fp-card__cta">
          <a href="/intelligence_platform#fraud" class="fp-cta-btn fp-cta-btn--primary">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Launch Fraud Detector
          </a>
          <a href="/projects#fraud-detection" class="fp-cta-btn fp-cta-btn--ghost">
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
    <p class="h-eyebrow" style="color:#93c5fd;">Open to opportunities</p>
    <h2>Looking for an analyst who ships complete work?</h2>
    <p>I'm available for full-time analyst roles, contract work, and ML projects. If you have a dataset that needs proper attention, I'm happy to talk through what's possible.</p>
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

<!-- JAVASCRIPT -->
<script>
/* ── Particles ─────────────── */
(function(){const c=document.getElementById('particles'),ctx=c.getContext('2d');let W,H,P=[];function resize(){W=c.width=window.innerWidth;H=c.height=window.innerHeight;}resize();window.addEventListener('resize',resize,{passive:true});function rnd(a,b){return Math.random()*(b-a)+a;}function mk(){return{x:rnd(0,W),y:rnd(0,H),r:rnd(1,2.4),vx:rnd(-.2,.2),vy:rnd(-.35,-.08),a:rnd(.15,.65),fade:rnd(.003,.006)};}for(let i=0;i<70;i++)P.push(mk());function draw(){ctx.clearRect(0,0,W,H);P.forEach((p,i)=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(99,155,255,${p.a})`;ctx.fill();p.x+=p.vx;p.y+=p.vy;p.a-=p.fade;if(p.a<=0||p.y<-10)P[i]=mk();});requestAnimationFrame(draw);}draw();})();

/* ── Typewriter ─────────────── */
(function(){const phrases=['numbers that make sense.','models that hold up.','reports people read.','predictions worth acting on.'];const el=document.getElementById('typewriter');let pi=0,ci=0,del=false;function tick(){const ph=phrases[pi];if(!del){el.textContent=ph.slice(0,++ci);if(ci===ph.length){del=true;setTimeout(tick,2000);return;}}else{el.textContent=ph.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length;}}setTimeout(tick,del?28:55);}setTimeout(tick,900);})();

/* ── Counters ──────────────── */
(function(){const els=document.querySelectorAll('.counter');let done=false;function run(){els.forEach(el=>{const t=+el.dataset.target,s=el.dataset.suffix||'';let n=0,step=Math.ceil(t/40);const tm=setInterval(()=>{n=Math.min(n+step,t);el.textContent=n+s;if(n>=t)clearInterval(tm);},40);});}const obs=new IntersectionObserver(e=>{if(e[0].isIntersecting&&!done){done=true;setTimeout(run,600);}},{threshold:.4});const hero=document.querySelector('.h-hero');if(hero)obs.observe(hero);})();

/* ── Scroll reveal ─────────── */
(function(){const items=document.querySelectorAll('.reveal-up');if(!window.IntersectionObserver){items.forEach(el=>el.classList.add('visible'));return;}const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -30px 0px'});items.forEach(el=>obs.observe(el));})();

/* ── Scroll cue hide ───────── */
(function(){const cue=document.querySelector('.h-scroll-cue');if(!cue)return;window.addEventListener('scroll',()=>{cue.style.opacity=window.scrollY>80?'0':'1';},{passive:true});})();
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
.fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:stretch;}

/* Cards stretch to equal height via the grid */
.fp-card{display:flex;flex-direction:column;background:#ffffff08;border:1px solid rgba(255,255,255,.09);border-radius:20px;overflow:hidden;transition:transform .32s ease,box-shadow .32s ease,border-color .32s ease;backdrop-filter:blur(4px);}
.fp-card:hover{transform:translateY(-10px);box-shadow:0 32px 64px rgba(0,0,0,.55),0 0 0 1px rgba(59,130,246,.2);border-color:rgba(59,130,246,.25);}
.fp-card__img{position:relative;flex-shrink:0;}
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

/* Card body grows to fill — pushes CTA to bottom */
.fp-card__body{padding:20px 20px 0;flex:1;display:flex;flex-direction:column;}
.fp-card__meta{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;}
.fp-card__title{font-size:1.05rem;color:#fff;line-height:1.3;margin-bottom:10px;}
.fp-card__desc{font-size:.86rem;color:var(--muted);line-height:1.7;margin-bottom:14px;}
.fp-card__bullets{list-style:none;padding:0;margin:0 0 16px;display:flex;flex-direction:column;gap:6px;}
.fp-card__bullets li{font-size:.8rem;color:#cbd5e1;padding-left:16px;position:relative;line-height:1.5;}
.fp-card__bullets li::before{content:"▸";position:absolute;left:0;top:1px;color:var(--blue-lt);font-size:.7rem;}
.fp-card__stack{display:flex;flex-wrap:wrap;gap:5px;padding:12px 0;border-top:1px solid rgba(255,255,255,.05);margin-top:auto;}
.fp-card__stack span{font-size:.7rem;padding:3px 8px;background:rgba(37,99,235,.1);border:1px solid rgba(59,130,246,.18);border-radius:999px;color:#93c5fd;font-family:'DM Sans',sans-serif;}

/* ── CTA button row — always pinned to card bottom ── */
.fp-card__cta{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px 16px;border-top:1px solid rgba(255,255,255,.06);background:rgba(0,0,0,.15);flex-shrink:0;}

/* New unified CTA button styles */
.fp-cta-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 14px;border-radius:9px;font-size:.8rem;font-weight:600;text-decoration:none;transition:all .22s ease;font-family:'DM Sans',sans-serif;letter-spacing:.01em;white-space:nowrap;}
.fp-cta-btn--primary{background:linear-gradient(135deg,#1d4ed8,#2563eb);color:#fff;border:1px solid rgba(99,155,255,.25);box-shadow:0 2px 10px rgba(37,99,235,.3);}
.fp-cta-btn--primary:hover{background:linear-gradient(135deg,#1e40af,#1d4ed8);transform:translateY(-2px);box-shadow:0 6px 20px rgba(37,99,235,.45);}
.fp-cta-btn--ghost{background:rgba(255,255,255,.04);color:var(--muted);border:1px solid rgba(255,255,255,.1);}
.fp-cta-btn--ghost:hover{color:var(--txt);background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.22);transform:translateY(-2px);}

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

/* ══ Responsive ══ */
@media(max-width:1000px){.fp-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:900px){.h-pillars{grid-template-columns:1fr 1fr;}}
@media(max-width:640px){
  .h-section{padding:60px 18px;}
  .h-hero__inner{padding:0 18px;}
  .h-pillars{grid-template-columns:1fr;}
  .fp-grid{grid-template-columns:1fr;}
  .h-trust{gap:16px;}
  .h-trust__divider{height:28px;}
  .h-cta-banner{padding:60px 20px;}
  .h-stack{grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:10px;}
}
@media(max-width:400px){
  .h-hero__title{font-size:2rem;}
  .h-hero__actions,.h-cta-banner__actions{flex-direction:column;align-items:center;}
  .h-btn{width:100%;text-align:center;justify-content:center;}
  .fp-card__cta{grid-template-columns:1fr;}
}
</style>
