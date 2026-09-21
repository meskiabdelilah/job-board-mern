# JobBoard MERN - Portails de Stages et d'Alternances

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## À propos du projet

Le projet **JobBoard MERN** est une plateforme web visant à faciliter la recherche et la publication d'offres de stages et d'alternances pour les étudiants et recruteurs. 

Ce dépôt contient le travail réalisé dans le cadre du **Brief 1**, qui se concentre sur l'analyse du besoin, l'organisation Agile (Jira), la conception UI/UX (Figma), et l'intégration statique responsive en **HTML5 et CSS3 natif**.


## Objectifs du Brief 1

- [x] Reformuler le besoin produit et identifier les parcours utilisateurs.
- [x] Rédiger le backlog Agile complet (Epics, User Stories, Tâches, Definition of Done).
- [x] Concevoir les wireframes et maquettes haute fidélité (Desktop & Mobile) sur Figma.
- [x] Intégrer les templates HTML/CSS statiques, propres, sémantiques et responsifs.
- [x] Gérer le versionnement du projet via un workflow Git propre (Feature Branch Workflow).


## Liens Utiles & Livrables

- **Projet Jira (Backlog & Board) :** [Lien vers le projet Jira](https://abdelilah.atlassian.net/jira/software/projects/JBM/boards/333?sprintStarted=true&filter=&groupBy=none)
- **Maquettes Figma (Desktop/Mobile) :** [Lien vers le fichier Figma](https://www.figma.com/design/MmxpZL3cGy8q3JqNMwBtTW/Untitled?node-id=6-344&t=79tE8R3KjDek1jA1-0)
- **Analyse du Cahier des Charges :** Consutable dans [`docs/analyse-cahier-des-charges.md`](./docs/analyse-cahier-des-charges.md)


## Pages Intégrées (Templates HTML/CSS)

L'intégration respecte une structure **HTML5 sémantique** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) et utilise des **variables CSS**, **Flexbox** et **CSS Grid** pour le responsive.

| Page | Fichier HTML | Description |
| :--- | :--- | :--- |
| **Liste des offres** | `index.html` | Page d'accueil avec recherche, filtres transversaux et cartes d'offres. |
| **Détail d'une offre** | `offre-detail.html` | Vue complète d'une offre (missions, compétences, bouton postuler). |
| **Dépôt d'une offre** | `deposer-offre.html` | Formulaire statique de publication d'offre pour les recruteurs. |
| **Offres suivies** | `offres-suivies.html` | Liste des offres sauvegardées par l'utilisateur. |


## Structure du Projet

job-board/
├── index.html
├── offre-detail.html
├── deposer-offre.html
├── offres-suivies.html
├── css/
│   └── style.css
├── assets/
│   └── images/
├── docs/
│   ├── analyse-cahier-des-charges.md
│   ├── jira-export.md
│   └── figma-link.md
└── README.md