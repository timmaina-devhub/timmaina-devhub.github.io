---
layout: default
title: Home
---

<style>
:root {
  --accent-color: #2575fc;
  --text-color: #333;
  --body-bg: #fff;
  --card-bg: #f9f9f9;
}

body.dark-mode {
  --accent-color: #90caf9;
  --text-color: #e0e0e0;
  --body-bg: #121212;
  --card-bg: #1e1e1e;
}

.site-title {
  color: var(--text-color);
  transition: color 0.5s ease;
  display: inline-block;
  font-weight: bold;
  font-size: 2em;
  margin: 0;
}

/* Optional: underline animation like section headings */
.site-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  margin-top: 5px;
  border-radius: 2px;
  background-color: var(--accent-color);
  transition: background-color 0.5s ease, transform 0.5s ease;
}
body.dark-mode .site-title::after {
  transform: scaleX(1.1);
}
body {
  background-color: var(--body-bg);
  color: var(--text-color);
  font-family: 'Helvetica', sans-serif;
  margin:0;
  transition: background-color 0.5s ease, color 0.5s ease;
}

.navbar {
  position: sticky;
  top:0;
  background: rgba(255,255,255,0.95);
  padding: 15px 30px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 2px 5px rgba(0,0,0,0.1);
  z-index:100;
  transition: background 0.5s ease;
}
body.dark-mode .navbar { background: rgba(18,18,18,0.95); }
.navbar a { margin-left:20px; text-decoration:none; font-weight:bold; color: var(--text-color); transition: color 0.5s ease; }
#darkToggle { cursor:pointer; padding:8px 15px; border-radius:8px; border:none; background: var(--accent-color); color:white; font-weight:bold; transition: background 0.5s ease; }
#darkToggle:hover { background:#6a11cb; }

.hero { text-align:center; padding:100px 20px; background: linear-gradient(135deg,#6a11cb 0%,#2575fc 100%); color:white; animation: fadeIn 1.5s ease-in-out; }
.hero h1 { font-size:3em; margin-bottom:20px; }
.hero p { font-size:1.3em; }

.section { padding:60px 20px; max-width:1100px; margin:auto; }
.section h2 {
  text-align:center; margin-bottom:40px; font-size:2.2em; position:relative;
  transition: color 0.5s ease;
}
.section h2::after {
  content:""; display:block; width:80px; height:4px; margin:10px auto 0;
  border-radius:2px; background-color: var(--accent-color);
  transition: background-color 0.5s ease, transform 0.5s ease;
}
body.dark-mode .section h2::after { transform: scaleX(1.1); }

.cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:25px; }
.card { padding:20px; border-radius:12px; background: var(--card-bg); box-shadow:0 6px 15px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s, background 0.5s ease; }
.card:hover { transform: translateY(-10px); box-shadow:0 10px 25px rgba(0,0,0,0.2); }
.card img { max-width:100%; border-radius:8px; margin-bottom:15px; transition: transform 0.3s; }
.card img:hover { transform: scale(1.05); }
.button { display:inline-block; margin-top:10px; padding:10px 18px; background: var(--accent-color); color:white; border-radius:8px; text-decoration:none; font-weight:bold; transition: background 0.5s ease; }
.button:hover { background:#6a11cb; }

@keyframes fadeIn { 0%{opacity:0; transform:translateY(20px);} 100%{opacity:1; transform:translateY(0);} }
</style>

<h1 class="site-title">{{ site.title }}</h1>

<div class="navbar">
  <div><strong>Timothy Maina</strong></div>
  <div>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
    <a href="contact.html">Contact</a>
    <button id="darkToggle">🌙</button>
  </div>
</div>

<div class="hero">
  <h1>Turning Data Into Actionable Insights</h1>
  <p>Hi, I'm <strong>Timothy Maina</strong> — Data Analyst & Dashboard Specialist</p>
</div>

<div class="section">
  <h2>🚀 What I Do</h2>
  <div class="cards">
    <div class="card">Data Analysis & Insights</div>
    <div class="card">Dashboard Development</div>
    <div class="card">Business Intelligence</div>
  </div>
</div>

<div class="section">
  <h2>📊 Featured Projects</h2>
  <div class="cards">
    <div class="card">
      <img src="assets/images/sales-dashboard.png" alt="Sales Dashboard">
      <h3>Sales Dashboard</h3>
      <p>Analyzed regional sales trends and identified key revenue drivers.</p>
      <a class="button" href="projects.html">View Project →</a>
    </div>
    <div class="card">
      <img src="assets/images/customer-segmentation.png" alt="Customer Segmentation">
      <h3>Customer Segmentation</h3>
      <p>Clustered customers for targeted marketing strategies.</p>
      <a class="button" href="projects.html">View Project →</a>
    </div>
  </div>
</div>

<div class="section">
  <h2>🧠 Skills</h2>
  <div class="cards">
    <div class="card">Python & SQL</div>
    <div class="card">Tableau & Power BI</div>
    <div class="card">Data Visualization</div>
  </div>
</div>

<div class="section">
  <h2>📬 Contact</h2>
  <p>Email: your@email.com</p>
  <p>LinkedIn | GitHub</p>
</div>

<script>
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
</script>
