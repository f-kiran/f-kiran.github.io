<h2 id="publications" style="margin: 2px 0px -15px;">Publications</h2>

{% assign journals = site.data.publications.main | where: "type", "journal" %}
{% assign conferences = site.data.publications.main | where: "type", "conference" %}
{% assign theses = site.data.publications.main | where: "type", "thesis" %}

{% if journals.size > 0 %}
<h3 id="journal-articles" class="publication-category">Journal Articles</h3>
{% include publication-list.html publications=journals %}
{% endif %}

{% if conferences.size > 0 %}
<h3 id="conference-papers" class="publication-category">Conference Papers</h3>
{% include publication-list.html publications=conferences %}
{% endif %}

{% if theses.size > 0 %}
<h3 id="theses" class="publication-category">Thesis</h3>
{% include publication-list.html publications=theses %}
{% endif %}
