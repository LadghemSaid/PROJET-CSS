# README de rendu — Projet noté — Site vitrine d'un événement

> À compléter puis **renommer en `README.md`** à la racine du rendu (absent → −1 point).
> Pour chaque exigence, indiquez **où** la trouver : `fichier:ligne` (ex. `css/layout.css:42`). Une exigence introuvable est considérée comme absente.

## Groupe

| | |
|---|---|
| Nom du groupe | |
| Membres (et rôle référent) | 1. … (référent·e architecture) · 2. … (référent·e mise en page) · 3. … (référent·e thème, animations et accessibilité) |
| Événement / thème | |
| Lien du dépôt Git (si Git) | |
| Convention de nommage | ex. BEM : `.bloc`, `.bloc__element`, `.bloc--variante` ; utilitaires préfixés `u-` |

## Localisation des exigences

| Exigence | Élément attendu | Fichier:ligne | Commentaire (ce que ça fait, pourquoi) |
|---|---|---|---|
| 1. Architecture | Déclaration de l'ordre des `@layer` | `css/main.css:` | |
| 1. Architecture | Tokens primitifs | `css/tokens.css:` | |
| 1. Architecture | Tokens sémantiques | `css/tokens.css:` | |
| 1. Architecture | Nesting natif (exemple représentatif) | | |
| 2. Mise en page | `grid-template-areas` (mobile → desktop) | | |
| 2. Mise en page | `subgrid` | | |
| 2. Mise en page | Flexbox pour un composant | | |
| 3. Responsive | Première media query mobile-first | | |
| 3. Responsive | Typographie fluide `clamp()` | | |
| 3. Responsive | Container query (`container-type` + `@container`) et ses 2 contextes | | |
| 3. Responsive | Test 320 px sans défilement horizontal (correctif principal) | | |
| 4. Sélecteurs | `:has()` pertinent | | |
| 4. Sélecteurs | `:is()` / `:where()` | | |
| 5. Thème | `light-dark()` / `prefers-color-scheme` + `color-scheme` | | |
| 5. Thème (bonus technique) | Bascule CSS-only | | |
| 6. Animations | Transition n°1 | | |
| 6. Animations | Transition n°2 | | |
| 6. Animations | `@keyframes` | | |
| 6. Animations | `prefers-reduced-motion` | | |
| 6. Animations (bonus technique) | Scroll-driven (`@supports`), View Transitions, `@starting-style`/popover… | | |
| 7. Accessibilité | Landmarks + hiérarchie de titres | `index.html:` | |
| 7. Accessibilité | `:focus-visible` | | |
| 7. Accessibilité | Contrastes AA vérifiés (outil + paires de couleurs testées, 2 thèmes) | | |
| 7. Accessibilité | Images avec `alt` | `index.html:` | |
| 8. Qualité | Résultat du validateur W3C | — | |
| 8. Qualité | `!important` (aucun, ou utilitaire justifié) | | |

## Avertissements du validateur W3C non corrigés

Syntaxes récentes que le validateur ne reconnaît pas encore (non pénalisées si listées ici) :

| Fichier:ligne | Message du validateur | Pourquoi c'est valide |
|---|---|---|
| | | |

## Bonus technique revendiqué

| Fonctionnalité | Fichier:ligne | Explication (et repli prévu pour les navigateurs qui ne la gèrent pas) |
|---|---|---|
| | | |

## JavaScript (facultatif, ≤ 20 lignes)

| Fichier:lignes | Ce que fait le code | Pourquoi ce n'était pas faisable en CSS |
|---|---|---|
| | | |

## Déclaration d'usage d'outils d'IA

| Outil | Pour quoi faire (textes, explication d'une erreur, revue…) | Parties du code concernées |
|---|---|---|
| | | |

> Rappel : chaque membre doit pouvoir expliquer chaque ligne en soutenance (question individuelle, critère H).

## Qui a fait quoi

| Membre | Principales contributions |
|---|---|
| | |
| | |
| | |

## Crédits

Images, polices, icônes : source et licence.
