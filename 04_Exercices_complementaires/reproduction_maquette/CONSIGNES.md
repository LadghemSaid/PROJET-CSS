# Exercice de reproduction de maquette — Consignes

Exercice complémentaire **non noté**, sans classement. Il consiste à reproduire le plus fidèlement possible une image cible de **400 × 300 px**, uniquement en HTML et CSS, avec un code **lisible et commenté**.

## Objectif pédagogique

Mobiliser, sur une forme simple et vérifiable, les notions vues en cours :

- **modèle de boîte** : dimensions, `box-sizing`, marges, bordures épaisses utilisées comme formes ;
- **positionnement** : `position: absolute` / `fixed`, coordonnées, contexte d'empilement ;
- **Grid et Flexbox** : centrage (`place-items`), alignement, empilement de plusieurs éléments dans une même cellule ;
- **`border-radius`** : cercles, anneaux, coins arrondis choisis un par un ;
- **dégradés** : `linear-gradient()` à arrêts nets pour produire des bandes de couleur.

L'enjeu n'est pas seulement d'obtenir le bon rendu, mais de **savoir expliquer** chaque déclaration : pourquoi cette valeur, d'où vient ce calcul, pourquoi ce mode de positionnement.

## Matériel

| Fichier | Rôle |
|---|---|
| `cibles.html` | Les 5 cibles numérotées, avec leur niveau de difficulté, les notions mobilisées, leur palette (codes hexadécimaux) et leurs dimensions. À **projeter** au début de chaque séance. |
| `atelier.html` | Page de travail : éditeur, rendu en direct (400 × 300), cible, outils de comparaison (superposition, différence, rideau), rappel des critères de réussite. `atelier.html#3` ouvre directement la cible 3. |
| `cibles.js` | Définition des cibles (le code des cibles est encodé en base64 pour que la solution ne se lise pas directement dans la source). |
| `solutions/cible_N.html` | Solution de référence commentée de chaque cible, à coller telle quelle dans l'atelier. **Document enseignant : à ne pas distribuer.** |

Tout s'ouvre en double-cliquant, sans connexion. Le code de chaque cible est sauvegardé automatiquement dans le navigateur du poste : il est conservé si l'on recharge la page, mais il reste propre à ce poste et à ce navigateur.

## Déroulé

Vous travaillez individuellement ou en groupe (dans ce cas, alternez au clavier : chaque membre doit coder au moins une cible).

| Séance | Quand | Cibles | Durée indicative |
|---|---|---|---|
| **Séance 1** | Jour 1, vers 15h30 (après le TP2) | 1 (difficulté 1/5), 2 (2/5), 3 (3/5) | ≈ 25 min |
| **Séance 2** | Jour 2, vers 15h45 (après l'exercice de débogage n°2) | 4 (4/5), 5 (5/5) | ≈ 25 min |

Pour chaque séance :

1. **2 min** : projection de `cibles.html` et rappel des consignes ; chacun ouvre `atelier.html`.
2. **15 min** : réalisation des cibles de la séance, dans l'ordre de votre choix. Commencez par la structure (quels éléments ?), puis la mise en place (quel mode de positionnement ?), enfin les couleurs et les arrondis.
3. **≈ 8 min** : correction collective. L'enseignant projette une ou deux productions d'étudiants (avec leur accord) et la solution de référence, puis compare les approches possibles (positionnement absolu ou Grid, bordures ou `clip-path`, etc.).

Vous pouvez enregistrer votre travail avec le bouton **Télécharger** (fichier `nom_cibleN.html`), par exemple pour le reprendre plus tard.

## Contraintes

- HTML + CSS uniquement (JavaScript désactivé dans le rendu). **Pas d'image** : ni `<img>`, ni `url()`, ni SVG.
- La palette exacte de chaque cible est fournie (cliquer sur une pastille copie le code hexadécimal).
- Le rendu se fait dans une page vide : le `body` garde sa marge par défaut de 8 px. Pensez à `body { margin: 0 }`.
- Le travail est personnel (ou propre au groupe) : ne copiez pas le code d'un autre étudiant.

## Critères de réussite

Auto-évaluation par l'étudiant, vérifiée par l'enseignant pendant la séance ou lors de la correction collective.

### 1. Fidélité visuelle (vérifiée en superposition)

Dans l'atelier, comparez votre rendu à la cible en mode **Superposition** (opacité 50 %), puis en mode **Différence** (opacité 100 % : noir = pixel identique).

| Niveau | Ce que l'on observe en mode Différence |
|---|---|
| **Atteint** | Image entièrement noire. Seuls de fins liserés d'anticrénelage sur les bords courbes ou obliques sont tolérés. |
| **Partiellement atteint** | Formes et couleurs justes, mais décalages visibles de quelques pixels. |
| **Non atteint** | La cible est reconnaissable, mais une forme, une taille ou une couleur est fausse ; ou le rendu est sans rapport avec la cible. |

### 2. Code lisible et commenté

- Indentation régulière, une déclaration par ligne.
- Noms de classes explicites (`.lune`, `.anneau`, `.montagne-gauche`…).
- Un commentaire pour chaque choix de mise en page : mode de positionnement retenu, origine d'une valeur calculée (par exemple `/* (300 - 150) / 2 = 75 px : centrage vertical */`).
- Pas de valeur « magique » inexpliquée.

## Solutions de référence (enseignant)

Les solutions de `solutions/` sont indentées et commentées, pour être lues et discutées lors de la correction collective. Chacune a été vérifiée par superposition dans l'atelier (mode Différence entièrement noir, hors liserés d'anticrénelage). Elles utilisent un balisage minimal (`<p>`, `<a>` employés comme simples formes, sans classe) : c'est l'occasion de montrer, lors de la correction, ce qu'apportent des classes explicites à la lisibilité.

| Cible | Notions mises en œuvre dans la solution de référence |
|---|---|
| 1 — Pleine lune | `margin: auto`, `border-radius: 50%` |
| 2 — Hublot | dégradé à arrêts nets, `border` épaisse, `place-items` |
| 3 — Feuilles | `border-radius` sur deux coins opposés, Flexbox, pseudo-élément positionné |
| 4 — Montagnes | triangles en bordures transparentes, `position: fixed`, `::before` |
| 5 — Rosace | `rotate`, anneau en `border`, empilement Grid (`grid-area: 1 / 1`), `box-shadow` multiples, ordre de peinture (`position: relative`) |

Pistes de discussion lors de la correction : comparer une solution en positionnement absolu et une solution en Grid ou Flexbox (laquelle résiste le mieux à un changement de taille ?), expliquer le calcul des coordonnées, montrer qu'une même forme peut s'obtenir de plusieurs façons (bordures transparentes, `clip-path`, dégradé).
