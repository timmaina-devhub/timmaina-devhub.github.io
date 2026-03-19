---
layout: default
title: Home
---

<style>
/* ---------- GENERAL ---------- */
body { font-family: 'Helvetica', sans-serif; margin:0; transition: background 0.3s, color 0.3s;}
body.dark-mode { background:#121212; color:#e0e0e0;}
body.dark-mode a { color: #90caf9; }

/* ---------- NAVBAR ---------- */
.navbar { position: sticky; top:0; background: rgba(255,255,255,0.95); padding: 15px 30px; display:flex; justify-content: space-between; align-items:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); z-index:100; transition: background 0.3s;}
body.dark-mode .navbar { background: rgba(18,18,18,0.95); }
.navbar a { margin-left:20px; text-decoration:none; font-weight:bold; color:#333; }
body.dark-mode .navbar a { color:#e0e0e0; }
#darkToggle { cursor:pointer; padding:8px 15px; border-radius:8px; border:none; background:#2575fc; color:white; font-weight:bold; transition:0.3s; }
#darkToggle:hover { background:#6a11cb; }

/* ---------- HERO ---------- */
.hero { text-align:center; padding:100px 20px; background:linear-gradient(135deg,#6a11cb 0%,#2575fc 100%); color:white; animation: fadeIn 1.5s ease-in-out; }
.hero h1 { font-size:3em; margin-bottom:20px; }
.hero p { font-size:1.3em; }

/* ---------- SECTIONS ---------- */
.section { padding:60px 20px; max-width:1100px; margin:auto; }
.section h2 { text-align:center; margin-bottom:40px; font-size:2.2em; position:relative; transition: color 0.3s ease; }
.section h2::after {
  content:""; display:block; width:80px; height:4px; border-radius:2px; margin:10px auto 0;
  background:#2575fc; transition: background 0.5s ease, transform 0.5s ease; transform: scaleX(1);
}
body.dark-mode .section h2::after { background:#90caf9; transform: scaleX(1.1); }

/* ---------- CARD GRID ---------- */
.cards { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:25px; }
.card { padding:20px; border-radius:12px; background:#f9f9f9; box-shadow:0 6px 15px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
body.dark-mode .card { background:#1e1e1e; }
.card:hover { transform: translateY(-10px); box-shadow:0 10px 25px rgba(0,0,0,0.2); }
.card img { max-width:100%; border-radius:8px; margin-bottom:15px; transition: transform 0.3s; }
.card img:hover { transform: scale(1.05); }
.button { display:inline-block; margin-top:10px; padding:10px 18px; background:#2575fc; color:white; border-radius:8px; text-decoration:none; font-weight:bold; transition: background 0.3s; }
.button:hover { background:#6a11cb; }

/* ---------- ANIMATIONS ---------- */
@keyframes fadeIn { 0%{opacity:0;transform:translateY(20px);} 100%{opacity:1;transform:translateY(0);} }
</style>

<!-- ---------- NAVBAR ---------- -->
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

<!-- ---------- HERO ---------- -->
<div class="hero">
  <h1>Turning Data Into Actionable Insights</h1>
  <p>Hi, I'm <strong>Timothy Maina</strong> — Data Analyst & Dashboard Specialist</p>
</div>

<!-- ---------- WHAT I DO ---------- -->
<div class="section">
  <h2>🚀 What I Do</h2>
  <div class="cards">
    <div class="card">Data Analysis & Insights</div>
    <div class="card">Dashboard Development</div>
    <div class="card">Business Intelligence</div>
  </div>
</div>

<!-- ---------- FEATURED PROJECTS ---------- -->
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

<!-- ---------- SKILLS ---------- -->
<div class="section">
  <h2>🧠 Skills</h2>
  <div class="cards">
    <div class="card">Python & SQL</div>
    <div class="card">Tableau & Power BI</div>
    <div class="card">Data Visualization</div>
  </div>
</div>

<!-- ---------- CONTACT ---------- -->
<div class="section">
  <h2>📬 Contact</h2>
  <p>Email: your@email.com</p>
  <p>LinkedIn | GitHub</p>
</div>

<script>
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
</script>
