---
layout: bare
title: Home
---

<link rel="stylesheet" href="{{ '/styles.css' | relative_url }}">

<div class="navbar">
  <div class="logo"><strong>Timothy Maina</strong></div>

  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
  </div>
</div>

<section class="hero">
  <h1>Data Analyst | Aspiring Data Scientist</h1>
  <p>I transform data into actionable insights for smarter decisions.</p>
</section>

<section class="section">
  <div class="container">

    <div class="section-header">
      <h2>Featured Projects</h2>
      <p>Analytics, dashboards, and machine learning work</p>
    </div>

    <div class="grid grid-3">

      <a href="/projects#sales-dashboard" class="card">
        <div class="image-wrapper">
          <img src="{{ '/images/sales-dashboard.png' | relative_url }}">
        </div>
        <div class="card-content">
          <h3>Sales Dashboard</h3>
          <p>Regional performance and KPI tracking.</p>
          <span class="tag">Visualization</span>
        </div>
      </a>

      <a href="/projects#customer-analysis" class="card">
        <div class="image-wrapper">
          <img src="{{ '/images/customer-analysis.png' | relative_url }}">
        </div>
        <div class="card-content">
          <h3>Customer Analysis</h3>
          <p>Segmentation and purchasing insights.</p>
          <span class="tag">Analytics</span>
        </div>
      </a>

      <a href="/projects#predictive-model" class="card">
        <div class="image-wrapper">
          <img src="{{ '/images/predictive-model.png' | relative_url }}">
        </div>
        <div class="card-content">
          <h3>Predictive Modeling</h3>
          <p>Forecasting using ML models.</p>
          <span class="tag">Machine Learning</span>
        </div>
      </a>

    </div>

  </div>
</section>

<div class="footer">
  © 2026 Timothy Maina
</div>
