---
layout: default
title: Contact
---

<style>
/* Reuse same styling from index.md for consistency */
body{font-family:'Helvetica',sans-serif;margin:0;transition:0.3s;}
body.dark-mode{background:#121212;color:#e0e0e0;}
.navbar{position:sticky;top:0;background:rgba(255,255,255,0.95);padding:15px 30px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 5px rgba(0,0,0,0.1);z-index:100;transition:0.3s;}
body.dark-mode .navbar{background:rgba(18,18,18,0.95);}
.navbar a{margin-left:20px;text-decoration:none;font-weight:bold;color:#333;}
body.dark-mode .navbar a{color:#e0e0e0;}
#darkToggle{cursor:pointer;padding:8px 15px;border-radius:8px;border:none;background:#2575fc;color:white;font-weight:bold;transition:0.3s;}
#darkToggle:hover{background:#6a11cb;}
.section{padding:60px 20px;max-width:1100px;margin:auto;}
.section h2{text-align:center;margin-bottom:40px;font-size:2.2em;position:relative;}
.section h2::after{content:"";display:block;width:80px;height:4px;background:#2575fc;margin:10px auto 0;border-radius:2px;}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:25px;}
.card{padding:20px;border-radius:12px;background:#f9f9f9;box-shadow:0 6px 15px rgba(0,0,0,0.1);transition:transform 0.3s,box-shadow 0.3s;}
body.dark-mode .card{background:#1e1e1e;}
.card:hover{transform:translateY(-10px);box-shadow:0 10px 25px rgba(0,0,0,0.2);}
.button{display:inline-block;margin-top:10px;padding:10px 18px;background:#2575fc;color:white;border-radius:8px;text-decoration:none;font-weight:bold;transition:background 0.3s;}
.button:hover{background:#6a11cb;}
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

<!-- CONTACT -->
<div class="section">
  <h2>📬 Get in Touch</h2>
  <div class="cards">
    <div class="card">
      <h3>Email</h3>
      <p>your@email.com</p>
    </div>
    <div class="card">
      <h3>LinkedIn</h3>
      <p><a href="#">linkedin.com/in/yourprofile</a></p>
    </div>
    <div class="card">
      <h3>GitHub</h3>
      <p><a href="#">github.com/yourusername</a></p>
    </div>
  </div>
  <p style="text-align:center; margin-top:40px;">Feel free to reach out — I’m open to collaborations, internships, and junior data analyst opportunities.</p>
</div>

<script>
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
</script>
