# Documentation Design UI/UX - Figma

Ce document regroupe les liens, l'organisation et la structure du travail de conception UI/UX réalisé sur Figma pour la plateforme **JobBoard MERN**.


## Lien du Fichier Figma

- **Lien Figma du Projet :** [Cliquez ici pour accéder aux Maquettes Figma](https://www.figma.com/file/votre-lien-figma-ici) *(Remplacer par votre lien)*


## Arborescence et Parcours Utilisateurs

Le design couvre l'ensemble des parcours pour les deux utilisateurs cibles :
1. **Candidat (Étudiant) :**
   - Parcours Recherche/Consultation : Page d'accueil -> Liste des offres -> Filtres -> Page détail d'une offre.
   - Parcours Suivi : Ajouter une offre aux favoris -> Page "Offres suivies".
2. **Recruteur (Entreprise) :**
   - Parcours Dépôt : Accès au formulaire -> Saisie des détails de l'offre -> Validation.


## Écrans et Maquettes Conçus

Le fichier Figma est structuré en plusieurs sections / pages :

### 1. Wireframes (Basse Fidélité / Low-Fi)
- Structuration des dispositions de pages (Layouts).
- Placement des blocs principaux (Navigation, Filtres, Cartes, Formulaires).

### 2. Maquettes Haute Fidélité (High-Fi)
- **Desktop (1440px) :**
  - Page Liste des offres (`index.html`)
  - Page Détail d'une offre (`offre-detail.html`)
  - Page Dépôt d'une offre (`deposer-offre.html`)
  - Page Offres suivies (`offres-suivies.html`)
- **Mobile (375px) :**
  - Adaptation Responsive de l'ensemble des 4 pages (Menus burger, empilement des cartes, formulaires mono-colonne).


## Mini Design System / Style Guide

- **Palette de Couleurs :**
  - Primary (Bleu) : `#2563eb`
  - Dark (Texte principal) : `#0f172a`
  - Muted (Gris texte) : `#64748b`
  - Background Light : `#f8fafc`
  - Danger (Suppression) : `#ef4444`

- **Composants Réutilisables (Components) :**
  - `JobCard` (Carte d'offre avec variants)
  - `Button` (Primary, Outline, Danger)
  - `Badge` (Stage / Alternance)
  - `Tag` (Technologies)
  - `Input / Select` (Formulaires)
  - `Navbar & Footer`