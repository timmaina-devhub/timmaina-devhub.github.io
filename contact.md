---
layout: default
title: Contact
---

<style>
/* Reuse previous CSS including smooth heading accent and dark mode */
body{font-family:'Helvetica',sans-serif;margin:0;transition:0.3s;}
body.dark-mode{background:#121212;color:#e0e0e0;}
body.dark-mode a{color:#90caf9;}
.navbar{position:sticky;top:0;background:rgba(255,255,255,0.95);padding:15px 30px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 2px 5px rgba(0,0,0,0.1);z-index:100;transition:0.3s;}
body.dark-mode .navbar{background:rgba(18,18,18,0.95);}
.navbar a{margin-left:20px;text-decoration:none;font-weight:bold;color:#333;}
body.dark-mode .navbar a{color:#e0e0e0;}
#darkToggle{cursor:pointer;padding:8px 15px;border-radius:8px;border:none;background:#2575fc;color:white;font-weight:bold;transition:0.3s;}
#darkToggle:hover{background:#6a11cb;}
.section{padding:60px 20px;max-width:1100px;margin:auto;}
.section h2{text-align:center;margin-bottom:40px;font-size:2.2em;position:relative;transition:color 0.3s ease;}
.section h2::after{content:"";display:block;width:80px;height:4px;border-radius:2px;margin:10px auto 0;background:#2575fc;transition: background 0.5s ease, transform 0.5s ease; transform: scaleX(1);}
body.dark-mode .section h2::after{background:#90caf9; transform:scaleX(1.1);}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:25px;}
.card{padding:20px;border-radius:12px;background:#f9f9f9;box-shadow:0 6px 15px rgba(0,0,0,0.1);transition:transform 0.3s,box-shadow 0.3s;}
body.dark-mode .card{background:#1e1e1e;}
.card:hover{transform:translateY(-10px);box-shadow:0 10px 25px rgba(0,0,0,0
