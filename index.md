<!-- ═══════════════════════════════════════════
     FEATURED PROJECTS — Optimized for clarity
════════════════════════════════════════════ -->
<section class="h-section h-section--alt">
  <div class="container">
    <div class="h-section-header reveal-up">
      <p class="h-eyebrow">Selected Work</p>
      <h2>Featured <em>Projects</em></h2>
      <p class="h-section-sub">Real problems. Real data. Real outcomes.</p>
    </div>

    <div class="fp-grid">

      <!-- ── Card 1 ── -->
      <div class="fp-card reveal-up" style="--d:.05s">
        <div class="fp-card__img">
          <img src="{{ '/images/sales-dashboard.png' | relative_url }}" alt="Superstore Sales Executive Dashboard showing KPIs and forecasts" loading="lazy">
          <span class="fp-card__type">Dashboard</span>
        </div>
        <div class="fp-card__body">
          <h3 class="fp-card__title">Superstore Sales Dashboard</h3>
          <p class="fp-card__desc">
            Executive dashboard combining 4 years of sales data, KPI tracking, and 6-month forecasts to enable data-driven budget planning.
          </p>
          <ul class="fp-card__outcomes">
            <li>Identified loss-making categories reducing profit margin</li>
            <li>6-month forecast enabling proactive planning</li>
            <li>Reduced insight time from hours to one screen</li>
          </ul>
          <div class="fp-card__meta">
            <span class="fp-tag">Tableau</span>
            <span class="fp-tag">Time Series</span>
          </div>
        </div>
        <div class="fp-card__cta">
          <a href="/projects#sales-dashboard" class="fp-btn fp-btn--primary">View Case Study →</a>
        </div>
      </div>

      <!-- ── Card 2 ── -->
      <div class="fp-card reveal-up" style="--d:.15s">
        <div class="fp-card__img">
          <img src="{{ '/images/customer-analysis.png' | relative_url }}" alt="Customer Churn Analysis showing RFM segments and risk factors" loading="lazy">
          <span class="fp-card__type">Machine Learning</span>
        </div>
        <div class="fp-card__body">
          <h3 class="fp-card__title">Customer Churn Prediction</h3>
          <p class="fp-card__desc">
            End-to-end ML system combining RFM feature engineering and clustering to identify at-risk customers before they leave.
          </p>
          <ul class="fp-card__outcomes">
            <li>Inactivity and refund patterns identified as churn signals</li>
            <li>3 actionable customer segments via K-Means</li>
            <li>High-recall model ensuring no at-risk customer missed</li>
          </ul>
          <div class="fp-card__meta">
            <span class="fp-tag">Python</span>
            <span class="fp-tag">scikit-learn</span>
          </div>
        </div>
        <div class="fp-card__cta">
          <a href="/projects#customer-analysis" class="fp-btn fp-btn--primary">View Case Study →</a>
        </div>
      </div>

      <!-- ── Card 3 ── -->
      <div class="fp-card reveal-up" style="--d:.25s">
        <div class="fp-card__img">
          <img src="{{ '/images/fraud-dashboard.png' | relative_url }}" alt="Fraud Detection dashboard tracking transaction patterns and velocity alerts" loading="lazy">
          <span class="fp-card__type">Real-Time ML</span>
        </div>
        <div class="fp-card__body">
          <h3 class="fp-card__title">Fraud Detection System</h3>
          <p class="fp-card__desc">
            Behavioral ML pipeline analyzing velocity patterns and device signals to flag fraudulent transactions with high precision.
          </p>
          <ul class="fp-card__outcomes">
            <li>Random Forest with strong precision-recall on imbalanced data</li>
            <li>High-frequency burst patterns flagged as primary signal</li>
            <li>Real-time Tableau dashboard tracking fraud trends</li>
          </ul>
          <div class="fp-card__meta">
            <span class="fp-tag">Random Forest</span>
            <span class="fp-tag">Tableau</span>
          </div>
        </div>
        <div class="fp-card__cta">
          <a href="/projects#fraud-detection" class="fp-btn fp-btn--primary">View Case Study →</a>
        </div>
      </div>

    </div>

    <!-- View all -->
    <div class="h-all-projects reveal-up" style="--d:.35s">
      <a href="/projects" class="h-btn h-btn--ghost">
        See All Projects →
      </a>
    </div>
  </div>
</section>

<style>
/* ══════════════════════════════════════
   FEATURED PROJECTS — Simplified & Clear
══════════════════════════════════════ */
.fp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: start;
}

/* ── Card Structure ────────────────────── */
.fp-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.fp-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.3);
}

/* ── Image: High Priority ─────────────── */
.fp-card__img {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--sur);
}

.fp-card__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.fp-card:hover .fp-card__img img {
  transform: scale(1.04);
}

/* Type badge (replaces chrome) */
.fp-card__type {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 5px 12px;
  background: rgba(37, 99, 235, 0.9);
  color: #fff;
  border-radius: 999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

/* ── Card Body: Clean & Scannable ────── */
.fp-card__body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.fp-card__title {
  font-size: 1.15rem;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 10px;
  font-weight: 600;
}

.fp-card__desc {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* ── Key Outcomes: Lightweight ───────── */
.fp-card__outcomes {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.fp-card__outcomes li {
  font-size: 0.85rem;
  color: #cbd5e1;
  line-height: 1.5;
  padding-left: 18px;
  position: relative;
}

.fp-card__outcomes li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-size: 0.75rem;
  font-weight: 600;
}

/* ── Meta Tags ──────────────────────── */
.fp-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;
}

.fp-tag {
  display: inline-block;
  padding: 4px 11px;
  font-size: 0.72rem;
  font-weight: 500;
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 999px;
  color: #93c5fd;
  white-space: nowrap;
}

/* ── Single CTA Button ──────���───────── */
.fp-card__cta {
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.2);
}

.fp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6px;
  padding: 11px 18px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  border: 1px solid #2563eb;
}

.fp-btn--primary {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
}

.fp-btn--primary:hover {
  background: #1d4ed8;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.45);
  transform: translateY(-2px);
}

/* ── Responsive ────────────────────── */
@media (max-width: 1100px) {
  .fp-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .fp-grid {
    grid-template-columns: 1fr;
  }

  .fp-card__body {
    padding: 20px;
  }

  .fp-card__title {
    font-size: 1.05rem;
  }

  .fp-card__outcomes li {
    font-size: 0.82rem;
  }
}

@media (max-width: 480px) {
  .fp-card__img {
    aspect-ratio: 16 / 12;
  }

  .fp-card__body {
    padding: 16px;
  }

  .fp-btn {
    padding: 10px 16px;
    font-size: 0.85rem;
  }
}

/* ── All Projects Link ──────────────── */
.h-all-projects {
  text-align: center;
  margin-top: 40px;
}
</style>
