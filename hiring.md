---
layout: default
title: "Hiring Opportunity | Join Our Team"
description: "Join Zey Brow & Wax as a Licensed Esthetician / Brow & Lash Specialist in Dallas, Texas."
permalink: /hiring/
---

<section class="hiring-page-hero">
  <div class="container">
    <p class="section-eyebrow">{{ site.content.hiring.section_label }}</p>
    <h1>{{ site.content.hiring.section_title }}</h1>
    <p>{{ site.content.hiring.section_subtitle }}</p>
  </div>
</section>

<section class="section hiring-page-section">
  <div class="container">
    <div class="hiring-layout">
      <article class="hiring-card hiring-main-card">
        <div class="hiring-position-heading">
          <div>
            <p class="hiring-kicker">Now Hiring</p>
            <h2>{{ site.content.hiring.position_title }}</h2>
          </div>
          <span class="hiring-type">{{ site.content.hiring.employment_type }}</span>
        </div>
        <p>{{ site.content.hiring.intro }}</p>
        <div class="hiring-columns">
          <div>
            <h3>{{ site.content.hiring.requirements_title }}</h3>
            <ul class="hiring-list">
              {% for item in site.content.hiring.requirements %}<li>{{ item }}</li>{% endfor %}
            </ul>
          </div>
          <div>
            <h3>{{ site.content.hiring.specialties_title }}</h3>
            <ul class="hiring-list hiring-list-compact">
              {% for item in site.content.hiring.specialties %}<li>{{ item }}</li>{% endfor %}
            </ul>
          </div>
        </div>
      </article>
      <aside class="hiring-card hiring-side-card">
        <h2>{{ site.content.hiring.culture_title }}</h2>
        <p>{{ site.content.hiring.culture_text }}</p>
        <h3>{{ site.content.hiring.schedule_title }}</h3>
        <p>{{ site.content.hiring.schedule_text }}</p>
      </aside>
    </div>

    <div class="hiring-apply">
      <h2>{{ site.content.hiring.apply_title }}</h2>
      <p>{{ site.content.hiring.apply_text }}</p>
      {% if site.business.email %}
      <a class="btn btn-primary" href="mailto:{{ site.business.email }}?subject=Application%20-%20{{ site.content.hiring.position_title | url_encode }}">{{ site.content.hiring.apply_button }}</a>
      {% endif %}
    </div>
  </div>
</section>
