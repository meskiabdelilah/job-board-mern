# Analyse du Cahier des Charges - Portail Job Board

## 1. Reformulation du Besoin
Le projet consiste à créer un portail web centralisé pour les apprenants MERN 2026/2027 afin d'agréger les offres de stage et d'alternance. Aujourd'hui, les opportunités sont dispersées sur plusieurs canaux, ce qui complique la recherche et le suivi. Le portail offrira une expérience fluide pour consulter, filtrer et suivre ces opportunités en un seul endroit.

## 2. Personas & Parcours Utilisateurs
* **Apprenant :** Consulte les offres, utilise les filtres (technologie, ville, contrat), affiche les détails et sauvegarde ses offres préférées.
* **Visiteur :** Parcourt rapidement la liste des offres publiques sans avoir besoin de créer un compte.
* **Administrateur :** Gère le catalogue d'offres (Ajout, Modification, Suppression, Gestion des technologies associées).

## 3. Arborescence de l'Application (Sitemap)
- **Page d'accueil (`index.html`)** : Liste des offres + Barre de recherche + Filtres
- **Fiche Offre (`offre-detail.html`)** : Description détaillée + Infos entreprise + Bouton de suivi
- **Dépôt d'offre (`deposer-offre.html`)** : Formulaire statique de soumission
- **Offres suivies (`offres-suivies.html`)** : Liste des offres enregistrées par l'utilisateur
- **Back-office Admin (Prévu sur Figma)** : Gestion CRUD des offres

## 4. Règles de Gestion Clés
- Une offre est liée à une seule entreprise et à plusieurs technologies.
- Le type de contrat est strictement restreint à `Stage` ou `Alternance`.
- Le suivi d'une offre est stocké localement sur le navigateur (sans système d'authentification).