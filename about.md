---
layout: default
title: About
---

<style>
/* Use same styles as index.md for consistency */
body {
  font-family: 'Helvetica', sans-serif;
  margin: 0;
  transition: background 0.3s, color 0.3s;
}
body.dark-mode { background-color: #121212; color: #e0e0e0; }

.navbar { position: sticky; top: 0; background: rgba(255,255,255,0.95); padding: 15px 30px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 5px rgba(0,0,0,0.1); z-index:100; transition: background 0.3s;}
body.dark-mode .navbar { background: rgba(18,18,18,0.95);}
.navbar a { margin-left: 20px; text-decoration:none; font-weight:bold; color:#333;}
body.dark-mode .navbar a { color:#e0e0e0; }

#darkToggle { cursor:pointer; padding:8px 15px; border-radius:8px; border:none; background:#2575fc; color:white; font-weight:bold; transition:0.3s;}
#darkToggle:hover { background:#6a11cb; }

.section { padding:60px 20px; max-width:1100px; margin:auto; }
.section h2 { text-align:center; margin-bottom:40px; font-size:2.2em; position:relative; }
.section h2::after { content:""; display:block; width:80px; height:4px; background:#2575fc; margin:10px auto 0; border-radius:2px; }
.cards { display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:25px; }
.card { padding:20px; border-radius:12px; background:#f9f9f9; box-shadow:0 6px 15px rgba(0,0,0,0.1); transition: transform 0.3s, box-shadow 0.3s; }
body.dark-mode .card { background:#1e1e1e; }
.card:hover { transform: translateY(-10px); box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
</style>

<!-- NAVBAR -->
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

<!-- ABOUT HERO -->
<div class="section">
  <h2>👤 About Me</h2>
  <div class="cards">
    <div class="card">
      <p>
        Hi! I'm <strong>Timothy Maina</strong>, a Data Analyst passionate about transforming raw data into actionable business insights.
      </p>
      <p>
        My journey started with curiosity about why businesses succeed or fail. Today, I use Python, SQL, Tableau, and Power BI to analyze trends, build dashboards, and support decision-making.
      </p>
    </div>
    <div class="card">
      <h3>My Approach</h3>
      <ul>
        <li>Data should tell a clear story</li>
        <li>Insights must drive action</li>
        <li>Make complex data easy to understand</li>
      </ul>
    </div>
    <div class="card">
      <h3>Career Goal</h3>
      <p>To become a data-driven problem solver, helping organizations grow through insights.</p>
    </div>
  </div>
</div>

<script>
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
</script>
