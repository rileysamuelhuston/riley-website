---
title: Riley Huston
layout: index.liquid
---


{% for projects in collections.projects %}

<div class="grid-item">
<a href="{{ projects.url }}"><img src="/images/{{ projects.data.postTitle | slug }}/{{ projects.data.postTitle | slug }}.png" alt="">{{projects.data.postTitle }}
      </a>
</div>

{% endfor %}
