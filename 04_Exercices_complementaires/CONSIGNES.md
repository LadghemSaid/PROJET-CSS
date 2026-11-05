# Exercices complémentaires — Consignes et déroulé

Ce dossier rassemble trois types d'exercices qui complètent les cours et les TP du module « CSS avancé ». Ils relèvent de l'**évaluation formative** : ils sont **non notés** et servent à vérifier la compréhension, à réactiver les notions et à préparer le projet noté.

```
04_Exercices_complementaires/
  CONSIGNES.md                     ce document (enseignant)
  quiz.html                        quiz de révision à projeter (8 banques, 87 questions)
  debogage/
    session1_cascade_layout/       session 1 : index.html (sommaire + toutes les fiches) et carte_01 à carte_06.html
    session2_responsive_a11y/      session 2 : idem
    SOLUTIONS.md                   corrigé enseignant
  reproduction_maquette/
    cibles.html                    les 5 cibles, à projeter
    atelier.html                   page de travail des étudiants
    cibles.js                      définition des cibles
    CONSIGNES.md                   consignes détaillées et critères de réussite
    solutions/                     solutions de référence commentées (enseignant)
```

Tout s'ouvre en double-cliquant dans un navigateur récent (Chrome, Edge, Firefox), sans installation ni connexion.

## 1. Les trois types d'exercices

### Quiz de révision — `quiz.html`

**Objectif** : vérifier, question par question, la compréhension des notions du cours (cascade, spécificité, Grid, unités, custom properties, container queries, accessibilité, animations…) et corriger immédiatement les représentations erronées.

**Principe** : l'enseignant projette une question à choix multiple (souvent accompagnée d'un extrait de code), les étudiants répondent, puis l'enseignant révèle la bonne réponse et son explication, qui sert de point de départ à la correction collective.

| Banque | Moment conseillé | Questions | Contenu |
|---|---|---|---|
| Test de positionnement — J1 | J1 · 9h30 | 10 | Prérequis : modèle de boîte, sélecteurs, flexbox simple, unités, media queries |
| Révision — J1 matin | J1 · fin de matinée | 10 | Cascade, `@layer`, spécificité, héritage, `:is()`, `:where()`, `:has()`, nesting |
| Révision — J1 après-midi | J1 · 16h30 | 10 | Grid avancé, subgrid, Flexbox, dimensionnement intrinsèque, `aspect-ratio` |
| Révision — bilan J1 | J2 · 9h00 | 10 | Bilan de la journée 1, niveau d'exigence supérieur |
| Révision — J2 | J2 · fin de journée | 11 | Custom properties, `@property`, couleurs, `clamp()`, container queries, propriétés logiques, accessibilité |
| Révision — bilan J2 | J3 · 9h00 | 10 | Bilan de la journée 2, niveau d'exigence supérieur |
| Révision — J3 | J3 · 11h00 | 11 | Transitions, keyframes, transformations, `@starting-style`, popover, View Transitions, scroll-driven, performance |
| Quiz de synthèse | J3 · 16h00 | 15 | Questions de synthèse sur les trois journées |

Le **test de positionnement** permet à l'enseignant de repérer, dès la première matinée, les prérequis à consolider ; il ne donne lieu à aucun résultat individuel.

**Utilisation** :

- Minuteur réglable sur l'écran d'accueil (20 s par défaut ; 0 = sans minuteur). Un clic sur le minuteur le met en pause.
- Clavier (compatible télécommande de présentation) : `Espace` ou `Entrée` révèle la réponse puis passe à la question suivante ; `←` / `→` (ou `Page préc.` / `Page suiv.`) naviguent ; `P` met en pause, `R` relance le minuteur ; `F` bascule en plein écran ; `Échap` revient à l'accueil ; `?` affiche l'aide.
- Bouton **Imprimer avec corrigé** sur chaque banque (et en fin de banque) : version A4 avec toutes les questions, la bonne réponse et son explication. Utile comme fiche de préparation pour l'enseignant ou comme plan B sans vidéoprojecteur.
- Thème clair par défaut ; bouton « Thème clair/sombre » pour une salle très sombre. Le choix du thème et la durée du minuteur sont mémorisés sur le poste.

### Exercices de débogage — `debogage/`

**Objectif** : lire un code existant, poser un diagnostic argumenté et utiliser les outils de développement du navigateur. Chaque fiche présente un rendu défectueux, l'effet attendu, le HTML et le CSS complets.

**Consigne donnée aux étudiants** : identifier le ou les défauts, expliquer leur cause, proposer un correctif.

| Session | Notions | Exercices | Défauts |
|---|---|---|---|
| Session 1 — `session1_cascade_layout/` | spécificité, `@layer`, `:is()` / `:where()`, `grid-template-areas`, `minmax()`, `z-index` et fusion des marges | 6 | 9 |
| Session 2 — `session2_responsive_a11y/` | unités de viewport, focus clavier, unités et zoom du texte, contrastes, flex et `min-width`, cibles tactiles | 6 | 10 |

`index.html` de chaque session contient le sommaire et toutes les fiches (à projeter, ou à imprimer : une fiche par page). Les fichiers `carte_0N.html` permettent d'ouvrir un exercice seul. Déroulé conseillé : 12 min d'analyse, puis 8 min de correction collective (voir `debogage/SOLUTIONS.md`).

### Reproduction de maquette — `reproduction_maquette/`

**Objectif** : mobiliser le modèle de boîte, le positionnement, Grid et Flexbox, `border-radius` et les dégradés pour reproduire une image cible de 400 × 300 px, en HTML et CSS uniquement.

**Critères de réussite** : fidélité visuelle vérifiée en superposition dans l'atelier (modes Superposition et Différence) ; code lisible et commenté. Les consignes détaillées, la durée indicative et la grille d'auto-évaluation figurent dans `reproduction_maquette/CONSIGNES.md`.

## 2. Place dans le planning

| Jour | Moment | Exercice | Fichier(s) | Durée indicative |
|---|---|---|---|---|
| J1 | 9h30 | Test de positionnement — J1 | `quiz.html` | ≈ 10 min |
| J1 | Fin de matinée | Révision — J1 matin | `quiz.html` | ≈ 10 min |
| J1 | ≈ 11h40 | Exercices de débogage, session 1 | `debogage/session1_cascade_layout/` | 20 min |
| J1 | ≈ 15h30 | Reproduction de maquette, séance 1 (cibles 1 à 3) | `reproduction_maquette/` | ≈ 25 min |
| J2 | 9h00 | Révision — bilan J1 | `quiz.html` | ≈ 10 min |
| J2 | ≈ 15h45 | Exercices de débogage, session 2, puis reproduction de maquette, séance 2 (cibles 4 et 5) | `debogage/session2_responsive_a11y/`, `reproduction_maquette/` | 20 min + ≈ 25 min |
| J3 | 9h00 | Révision — bilan J2 | `quiz.html` | ≈ 10 min |
| J3 | 16h00 | Quiz de synthèse | `quiz.html` | ≈ 15 min |

Les banques « Révision — J1 après-midi » (J1, 16h30), « Révision — J2 » (fin de J2) et « Révision — J3 » (J3, 11h00) sont utilisables selon le temps disponible, en fin de demi-journée ou pour une reprise en autonomie.

## 3. Modalités

- **Non noté** : aucun de ces exercices n'entre dans la note du module ; il n'y a ni points ni classement.
- **Réponses individuelles ou en groupe** : selon le moment, les étudiants répondent seuls ou en groupe (les trinômes du projet). Pour le quiz : ardoise, feuille ou main levée. Pour le débogage : réponse écrite ou orale (ligne en cause, cause, correctif). Pour la reproduction de maquette : travail dans l'atelier ; en groupe, alternez au clavier, chaque membre doit coder.
- **Correction collective** : chaque exercice se termine par une mise en commun. Demandez à un étudiant ou à un groupe de **justifier** sa réponse avant de révéler la solution ; une réponse juste mais non expliquée reste à consolider.
- Les erreurs fréquentes repérées pendant ces exercices peuvent être reprises en début de séance suivante (banques « bilan »).

## 4. Fichiers à distribuer ou non

| Fichier | À distribuer aux étudiants ? |
|---|---|
| `quiz.html` | À projeter. Le fichier contient les réponses : ne le communiquez, si vous le souhaitez, qu'après le quiz de synthèse (support de révision). |
| `debogage/session1_cascade_layout/`, `debogage/session2_responsive_a11y/` | Oui (projetés ou imprimés). |
| `debogage/SOLUTIONS.md` | **Non** : corrigé enseignant. |
| `reproduction_maquette/cibles.html`, `atelier.html`, `cibles.js`, `CONSIGNES.md` | Oui (les trois premiers fichiers doivent rester dans le même dossier). |
| `reproduction_maquette/solutions/` | **Non** : solutions de référence, à projeter lors de la correction collective. Copiez le dossier `reproduction_maquette/` **sans** ce sous-dossier. |
| `CONSIGNES.md` (ce document) | Document enseignant. |
