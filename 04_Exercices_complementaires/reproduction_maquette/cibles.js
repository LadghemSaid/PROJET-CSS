// Exercice de reproduction de maquette — définition des cibles.
// Le code de chaque cible est encodé en base64 pour que la solution ne se lise pas directement dans la source.
// « seance » : 1 = jour 1 (cibles 1 à 3), 2 = jour 2 (cibles 4 et 5).
// « notions » : notions mobilisées, affichées aux étudiants (objectif pédagogique).
// Les solutions de référence (lisibles et commentées) sont dans solutions/ (à ne pas distribuer).
window.CIBLES = [
  {
    "num": 1,
    "nom": "Pleine lune",
    "difficulte": 1,
    "seance": 1,
    "notions": "Modèle de boîte, centrage, border-radius",
    "palette": [
      "#2B2D42",
      "#EDF2F4"
    ],
    "code64": "PGRpdiBjbGFzcz0ibHVuZSI+PC9kaXY+CjxzdHlsZT5odG1sLGJvZHl7bWFyZ2luOjA7d2lkdGg6NDAwcHg7aGVpZ2h0OjMwMHB4O292ZXJmbG93OmhpZGRlbn1ib2R5e2JhY2tncm91bmQ6IzJCMkQ0Mn0KLmx1bmV7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMjVweDt0b3A6NzVweDt3aWR0aDoxNTBweDtoZWlnaHQ6MTUwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojRURGMkY0fTwvc3R5bGU+"
  },
  {
    "num": 2,
    "nom": "Hublot",
    "difficulte": 2,
    "seance": 1,
    "notions": "Dégradés, bordures, centrage avec Grid ou Flexbox",
    "palette": [
      "#F2E8CF",
      "#386641",
      "#BC4749"
    ],
    "code64": "PGRpdiBjbGFzcz0iYmFuZGUiPjwvZGl2PjxkaXYgY2xhc3M9ImFubmVhdSI+PC9kaXY+PGRpdiBjbGFzcz0idHJvdSI+PC9kaXY+CjxzdHlsZT5odG1sLGJvZHl7bWFyZ2luOjA7d2lkdGg6NDAwcHg7aGVpZ2h0OjMwMHB4O292ZXJmbG93OmhpZGRlbn1ib2R5e2JhY2tncm91bmQ6I0YyRThDRn0KLmJhbmRle3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MTAwcHg7d2lkdGg6NDAwcHg7aGVpZ2h0OjEwMHB4O2JhY2tncm91bmQ6IzM4NjY0MX0KLmFubmVhdXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjEyMHB4O3RvcDo3MHB4O3dpZHRoOjE2MHB4O2hlaWdodDoxNjBweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNCQzQ3NDl9Ci50cm91e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTcwcHg7dG9wOjEyMHB4O3dpZHRoOjYwcHg7aGVpZ2h0OjYwcHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDojRjJFOENGfTwvc3R5bGU+"
  },
  {
    "num": 3,
    "nom": "Feuilles",
    "difficulte": 3,
    "seance": 1,
    "notions": "border-radius coin par coin, Flexbox, positionnement",
    "palette": [
      "#0B2027",
      "#40798C",
      "#70A9A1",
      "#CFD7C7"
    ],
    "code64": "PGRpdiBjbGFzcz0iZjEiPjwvZGl2PjxkaXYgY2xhc3M9ImYyIj48L2Rpdj48ZGl2IGNsYXNzPSJjb2V1ciI+PC9kaXY+CjxzdHlsZT5odG1sLGJvZHl7bWFyZ2luOjA7d2lkdGg6NDAwcHg7aGVpZ2h0OjMwMHB4O292ZXJmbG93OmhpZGRlbn1ib2R5e2JhY2tncm91bmQ6IzBCMjAyN30KLmYxLC5mMntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6OTBweDt3aWR0aDoxMjBweDtoZWlnaHQ6MTIwcHh9Ci5mMXtsZWZ0OjgwcHg7YmFja2dyb3VuZDojNDA3OThDO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NjBweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo2MHB4fQouZjJ7bGVmdDoyMDBweDtiYWNrZ3JvdW5kOiM3MEE5QTE7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NjBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjYwcHh9Ci5jb2V1cntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjE4MHB4O3RvcDoxMzBweDt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2JvcmRlci1yYWRpdXM6MjBweDtiYWNrZ3JvdW5kOiNDRkQ3Qzd9PC9zdHlsZT4="
  },
  {
    "num": 4,
    "nom": "Montagnes",
    "difficulte": 4,
    "seance": 2,
    "notions": "Positionnement, formes triangulaires, pseudo-éléments",
    "palette": [
      "#1A1423",
      "#EACDC2",
      "#B75D69",
      "#774C60"
    ],
    "code64": "PGRpdiBjbGFzcz0ic29sZWlsIj48L2Rpdj48ZGl2IGNsYXNzPSJtMSI+PC9kaXY+PGRpdiBjbGFzcz0ibTIiPjwvZGl2Pgo8c3R5bGU+aHRtbCxib2R5e21hcmdpbjowO3dpZHRoOjQwMHB4O2hlaWdodDozMDBweDtvdmVyZmxvdzpoaWRkZW59Ym9keXtiYWNrZ3JvdW5kOiMxQTE0MjN9Ci5zb2xlaWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoyNjBweDt0b3A6NDBweDt3aWR0aDo4MHB4O2hlaWdodDo4MHB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6I0VBQ0RDMn0KLm0xe3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MTAwcHg7d2lkdGg6MzAwcHg7aGVpZ2h0OjIwMHB4O2JhY2tncm91bmQ6I0I3NUQ2OTtjbGlwLXBhdGg6cG9seWdvbig1MCUgMCwxMDAlIDEwMCUsMCAxMDAlKX0KLm0ye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTgwcHg7dG9wOjE2MHB4O3dpZHRoOjIyMHB4O2hlaWdodDoxNDBweDtiYWNrZ3JvdW5kOiM3NzRDNjA7Y2xpcC1wYXRoOnBvbHlnb24oNTAlIDAsMTAwJSAxMDAlLDAgMTAwJSl9PC9zdHlsZT4="
  },
  {
    "num": 5,
    "nom": "Rosace",
    "difficulte": 5,
    "seance": 2,
    "notions": "Transformations, empilement avec Grid, box-shadow",
    "palette": [
      "#2E294E",
      "#F1E9DA",
      "#541388",
      "#FFD400"
    ],
    "code64": "PGRpdiBjbGFzcz0ibG9zYW5nZSI+PC9kaXY+PGRpdiBjbGFzcz0iYW5uZWF1Ij48L2Rpdj4KPGRpdiBjbGFzcz0icHQiIHN0eWxlPSJsZWZ0OjE4OHB4O3RvcDoxMzhweCI+PC9kaXY+CjxkaXYgY2xhc3M9InB0IiBzdHlsZT0ibGVmdDoxODhweDt0b3A6MjQuODZweCI+PC9kaXY+PGRpdiBjbGFzcz0icHQiIHN0eWxlPSJsZWZ0OjE4OHB4O3RvcDoyNTEuMTRweCI+PC9kaXY+CjxkaXYgY2xhc3M9InB0IiBzdHlsZT0ibGVmdDo3NC44NnB4O3RvcDoxMzhweCI+PC9kaXY+PGRpdiBjbGFzcz0icHQiIHN0eWxlPSJsZWZ0OjMwMS4xNHB4O3RvcDoxMzhweCI+PC9kaXY+CjxzdHlsZT5odG1sLGJvZHl7bWFyZ2luOjA7d2lkdGg6NDAwcHg7aGVpZ2h0OjMwMHB4O292ZXJmbG93OmhpZGRlbn1ib2R5e2JhY2tncm91bmQ6IzJFMjk0RX0KLmxvc2FuZ2V7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMjBweDt0b3A6NzBweDt3aWR0aDoxNjBweDtoZWlnaHQ6MTYwcHg7YmFja2dyb3VuZDojRjFFOURBO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfQouYW5uZWF1e3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTQwcHg7dG9wOjkwcHg7d2lkdGg6ODBweDtoZWlnaHQ6ODBweDtib3JkZXI6MjBweCBzb2xpZCAjNTQxMzg4O2JvcmRlci1yYWRpdXM6NTAlfQoucHR7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiNGRkQ0MDB9PC9zdHlsZT4="
  }
];
for (const c of window.CIBLES) c.code = atob(c.code64);
