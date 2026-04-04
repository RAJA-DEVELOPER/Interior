const fs = require('fs');

const services = [
    { id: 'visualization', title: '3D Visualization', desc: 'Photorealistic 3D renders and virtual walkthroughs.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80', label: 'Tech & Art' },
    { id: 'retail', title: 'Retail & Showroom', desc: 'Retail environments designed for impact and customer journey.', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80', label: 'Commercial impact' },
    { id: 'furniture', title: 'Furniture Curation', desc: 'Bespoke selection and procurement from world-class artisans.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80', label: 'Curation' },
    { id: 'management', title: 'Project Management', desc: 'End-to-end execution and oversight from concept to reveal.', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80', label: 'Execution' }
];

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{TITLE}} — Lumière</title>
  <meta name="description" content="{{DESC}}"/>
  <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
<div id="navbar-placeholder"></div>

<section class="page-header" style="padding:220px 0 120px">
  <div class="ph-bg" style="background-image:url('{{IMG}}')"></div>
  <div class="container"><div class="ph-content">
    <div class="breadcrumb"><a href="index.html">Home</a><span class="sep">/</span><a href="services.html">Services</a><span class="sep">/</span><span>{{TITLE}}</span></div>
    <div class="section-label" style="margin-bottom:10px">{{LABEL}}</div>
    <h1>{{TITLE}}</h1>
    <p>{{DESC}}</p>
  </div></div>
</section>

<section class="section">
  <div class="container">
    <div class="about-wrap">
      <div class="reveal-left">
        <span class="section-label">Superior Results</span>
        <h2>Excellence With <em>Lumière</em></h2>
        <div class="divider"></div>
        <p style="color:var(--text-muted);line-height:1.8;margin-bottom:16px">Our expert team handles {{TITLE}} with precision and care, ensuring that every detail is attended to and every expectation is exceeded.</p>
        <p style="color:var(--text-muted);line-height:1.8;margin-bottom:16px">Lumière is synonymous with quality and sophisticated design, and our services are tailored to meet the highest industry standards of the modern world.</p>
      </div>
      <div class="about-img-wrap reveal-right">
        <img class="about-img-main" src="{{IMG}}" alt="{{TITLE}}" loading="lazy"/>
      </div>
    </div>
  </div>
</section>

<div id="footer-placeholder"></div>
<script src="js/main.js"></script>
</body>
</html>`;

services.forEach(s => {
    let html = template
        .replace(/{{TITLE}}/g, s.title)
        .replace(/{{DESC}}/g, s.desc)
        .replace(/{{IMG}}/g, s.img)
        .replace(/{{LABEL}}/g, s.label);
    fs.writeFileSync(`c:/Users/russe/Desktop/Interior design/service-${s.id}.html`, html);
});
console.log("Done generating files.");
