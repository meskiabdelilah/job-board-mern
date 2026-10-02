# JobBoard MERN - Portail de Stages et d'Alternances

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## À propos du projet

**JobBoard MERN** est une plateforme web destinée à faciliter la recherche d'offres de stages et d'alternances.

Le **Brief 1** a permis de réaliser :

- l'analyse du besoin ;
- le backlog Jira ;
- les maquettes Figma ;
- les templates HTML/CSS responsives.

Le **Brief 2** transforme cette interface statique en une application interactive côté navigateur grâce à **JavaScript natif**.

Cette version fonctionne sans backend, sans base de données et sans compte utilisateur.

Les offres sont chargées depuis un fichier JSON local.

---

## Objectifs du Brief 2

- [x] Structurer les offres dans un fichier JSON.
- [x] Charger les données avec `fetch()` et `async/await`.
- [x] Gérer l'état de chargement.
- [x] Gérer les erreurs de chargement.
- [x] Gérer l'absence de résultats.
- [x] Générer dynamiquement les cartes d'offres.
- [x] Manipuler le DOM avec JavaScript.
- [x] Gérer les événements utilisateur.
- [x] Rechercher une offre par mot-clé.
- [x] Filtrer les offres par type de contrat.
- [x] Filtrer les offres par ville.
- [x] Filtrer les offres par technologie.
- [x] Combiner plusieurs filtres.
- [x] Trier les offres par date.
- [x] Réinitialiser les filtres.
- [x] Afficher le nombre de résultats.
- [x] Sauvegarder des offres avec `localStorage`.
- [x] Identifier visuellement une offre déjà suivie.
- [x] Supprimer une offre suivie.
- [x] Conserver les offres après actualisation de la page.
- [x] Afficher une page dédiée aux offres suivies.
- [x] Utiliser `map()`, `filter()` et `reduce()`.
- [x] Organiser le code JavaScript en plusieurs modules.
- [x] Utiliser un workflow Git avec des branches de fonctionnalités.

---

## Fonctionnalités principales

### Affichage dynamique des offres

Les données sont stockées dans :

```text
data/offres.json
```

Les offres sont récupérées avec :

```js
fetch()
async / await
```

Les cartes ne sont pas écrites directement dans le HTML.

Elles sont générées dynamiquement avec JavaScript à partir des données JSON.

L'application gère également trois états :

- chargement ;
- erreur ;
- aucun résultat.

---

## Recherche textuelle

L'utilisateur peut rechercher une offre à partir :

- du titre ;
- du nom de l'entreprise ;
- de la description courte.

La recherche est mise à jour automatiquement lorsque l'utilisateur écrit dans le champ de recherche.

---

## Filtres

L'utilisateur peut filtrer les offres par :

- type de contrat ;
- ville ;
- technologie.

Les filtres peuvent être combinés.

Par exemple :

```text
Toutes les offres
        ↓
Filtre par contrat
        ↓
Filtre par ville
        ↓
Filtre par technologie
        ↓
Recherche textuelle
        ↓
Tri par date
        ↓
Résultat final
```

Les choix actuels de l'utilisateur sont enregistrés dans un état JavaScript :

```js
const filtersState = {
    contracts: [],
    city: "",
    technologies: [],
    search: "",
    sort: ""
};
```

Chaque filtre travaille sur le résultat du filtre précédent.

---

## Tri par date

Les offres peuvent être triées :

- de la plus récente à la plus ancienne ;
- de la plus ancienne à la plus récente.

Une copie du tableau est créée avant l'utilisation de `sort()` afin de ne pas modifier directement le tableau original.

Exemple :

```js
const sortedOffres = [...offres];
```

---

## Réinitialisation des filtres

Un bouton permet de réinitialiser tous les filtres.

Il remet à zéro :

- les types de contrat ;
- la ville ;
- les technologies ;
- la recherche ;
- le tri par date.

Après la réinitialisation, toutes les offres sont de nouveau affichées.

---

## Compteur de résultats

Le nombre d'offres affichées est automatiquement mis à jour après chaque filtre.

Exemple :

```text
12 offres trouvées
```

Le compteur affiche également le nombre d'offres selon le type de contrat.

Exemple :

```text
12 offres trouvées — 6 Stage / 6 Alternance
```

---

## Utilisation de reduce()

La méthode `reduce()` est utilisée pour calculer le nombre d'offres selon leur type de contrat.

Exemple de résultat :

```js
{
    stage: 6,
    alternance: 6
}
```

`reduce()` permet ici de transformer un tableau d'offres en une seule valeur contenant les statistiques.

---

## Détail d'une offre

Chaque carte contient un lien :

```text
Voir détails
```

L'identifiant de l'offre est envoyé dans l'URL.

Exemple :

```text
offre-detail.html?id=4
```

La page de détail récupère l'identifiant avec :

```js
URLSearchParams
```

Ensuite, l'offre correspondante est recherchée dans les données avec :

```js
find()
```

La page affiche notamment :

- le titre ;
- l'entreprise ;
- la ville ;
- le type de contrat ;
- la description complète ;
- le profil recherché ;
- les technologies ;
- la date de publication ;
- le lien ou l'adresse de candidature.

---

## Offres suivies

L'utilisateur peut sauvegarder une offre depuis sa page de détail.

Lorsqu'une offre est sauvegardée, le bouton :

```text
Sauvegarder
```

devient :

```text
Offre suivie
```

Le bouton est également désactivé afin d'indiquer clairement que l'offre a déjà été enregistrée.

---

## LocalStorage

Les offres suivies sont sauvegardées avec `localStorage`.

Seuls les identifiants des offres sont enregistrés.

Exemple :

```js
[2, 5, 8]
```

Cela permet d'éviter de dupliquer toutes les informations des offres dans le navigateur.

Les données complètes restent dans :

```text
data/offres.json
```

### Sauvegarde

Un tableau JavaScript doit être transformé en chaîne de caractères avant d'être enregistré dans `localStorage`.

La méthode utilisée est :

```js
JSON.stringify()
```

### Récupération

Lors de la récupération, la chaîne est reconvertie en tableau JavaScript avec :

```js
JSON.parse()
```

Exemple :

```js
const storedOffers = localStorage.getItem("followedOffers");
const followedOffers = JSON.parse(storedOffers);
```

---

## Page des offres suivies

La page :

```text
offres-suivies.html
```

affiche uniquement les offres sauvegardées par l'utilisateur.

Le fonctionnement est le suivant :

```text
offres.json
    ↓
fetch()
    ↓
Toutes les offres

localStorage
    ↓
IDs des offres suivies

        ↓

filter()

        ↓

Offres suivies

        ↓

Affichage dynamique
```

L'utilisateur peut également supprimer une offre suivie.

Après la suppression :

- l'identifiant est supprimé du `localStorage` ;
- la carte disparaît de l'interface ;
- le compteur des offres suivies est mis à jour.

---

## Méthodes JavaScript utilisées

Le projet utilise notamment :

```js
document.getElementById()
document.querySelector()
document.querySelectorAll()

addEventListener()

fetch()
async / await

map()
filter()
reduce()
find()
some()
includes()

Array.from()

localStorage.getItem()
localStorage.setItem()

JSON.stringify()
JSON.parse()

URLSearchParams()
```

---

## Pages du projet

| Page | Fichier | Description |
|---|---|---|
| Liste des offres | `index.html` | Affichage dynamique, recherche, filtres et tri |
| Détail d'une offre | `offre-detail.html` | Informations complètes et sauvegarde |
| Dépôt d'une offre | `deposer-offre.html` | Template du formulaire de publication |
| Offres suivies | `offres-suivies.html` | Liste des offres enregistrées |

---

## Structure du projet

```text
job-board/
│
├── index.html
├── offre-detail.html
├── deposer-offre.html
├── offres-suivies.html
│
├── css/
│   └── style.css
│
├── data/
│   └── offres.json
│
├── js/
│   ├── app.js
│   ├── data.js
│   ├── details.js
│   ├── filters.js
│   ├── offres-suivies.js
│   ├── render.js
│   └── storage.js
│
├── assets/
│   └── images/
│
├── docs/
│   ├── analyse-cahier-des-charges.md
│   ├── jira-export.md
│   └── figma-link.md
│
└── README.md
```

---

## Organisation du JavaScript

### `app.js`

Ce fichier contrôle la page principale.

Il gère notamment :

- le chargement initial ;
- les événements ;
- l'état des filtres ;
- la combinaison des filtres ;
- le tri ;
- le compteur ;
- le rendu des résultats.

### `data.js`

Ce fichier est responsable du chargement des offres.

Il utilise :

```js
fetch()
async / await
```

Il vérifie également :

```js
response.ok
```

et gère les erreurs avec :

```js
try / catch
```

### `filters.js`

Ce fichier contient la logique liée aux données :

- filtre par contrat ;
- filtre par ville ;
- filtre par technologie ;
- recherche textuelle ;
- tri par date ;
- filtre des offres suivies ;
- statistiques avec `reduce()`.

### `render.js`

Ce fichier est responsable de l'affichage dans le DOM.

Il contient notamment les fonctions pour afficher :

- les cartes ;
- le détail d'une offre ;
- le chargement ;
- les erreurs ;
- les offres suivies ;
- les compteurs ;
- l'état vide.

### `storage.js`

Ce fichier centralise la gestion du `localStorage`.

Il permet :

- de récupérer les offres suivies ;
- d'ajouter une offre ;
- d'éviter les doublons ;
- de supprimer une offre.

### `details.js`

Ce fichier contrôle la page de détail.

Il :

- récupère l'identifiant depuis l'URL ;
- charge les offres ;
- recherche l'offre correspondante ;
- affiche ses informations ;
- permet de la sauvegarder ;
- détecte si elle est déjà suivie.

### `offres-suivies.js`

Ce fichier contrôle la page des offres suivies.

Il :

- charge toutes les offres ;
- récupère les IDs depuis `localStorage` ;
- filtre les offres correspondantes ;
- affiche les cartes ;
- gère la suppression ;
- met à jour le compteur.

---

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/meskiabdelilah/job-board-mern.git
```

Entrer dans le dossier du projet :

```bash
cd job-board
```

Aucune installation de dépendances n'est nécessaire pour le Brief 2.

Le projet utilise uniquement :

- HTML ;
- CSS ;
- JavaScript natif ;
- JSON.

---

## Lancement du projet

Le projet doit être exécuté avec un serveur local car il utilise `fetch()` pour charger le fichier JSON.

### Solution 1 : Live Server

Avec Visual Studio Code :

1. Installer l'extension **Live Server**.
2. Ouvrir le projet.
3. Faire un clic droit sur `index.html`.
4. Cliquer sur **Open with Live Server**.

### Solution 2 : Python

Dans le terminal :

```bash
python -m http.server 5500
```

Puis ouvrir :

```text
http://localhost:5500
```

Il n'est pas recommandé d'ouvrir directement `index.html` avec `file://` car le navigateur peut bloquer le chargement du fichier JSON avec `fetch()`.

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6+
- JSON
- LocalStorage
- Git
- GitHub
- Jira
- Figma

---

## Workflow Git

Le projet utilise un **Feature Branch Workflow**.

Quelques branches utilisées pendant le Brief 2 :

```text
brief-2/dynamic-rendering
brief-2/offer-details
brief-2/filters-search
brief-2/favorites-localstorage
```

Chaque fonctionnalité est développée dans une branche dédiée.

Après vérification, les modifications sont fusionnées avec la branche principale.

La branche `main` reste la version stable du projet.

---

## Gestion du projet avec Jira

Le backlog et le suivi des tâches sont réalisés avec Jira.

### Projet Jira

[Accéder au projet Jira](https://abdelilah.atlassian.net/jira/software/projects/JBM/boards/333?sprintStarted=true&filter=&groupBy=none)

---

## Maquettes Figma

Les maquettes Desktop et Mobile réalisées pendant le Brief 1 sont disponibles sur Figma.

[Accéder aux maquettes Figma](https://www.figma.com/design/MmxpZL3cGy8q3JqNMwBtTW/Untitled?node-id=6-344&t=79tE8R3KjDek1jA1-0)

---

## Analyse du cahier des charges

L'analyse réalisée pendant le Brief 1 est disponible dans :

```text
docs/analyse-cahier-des-charges.md
```

---

## Responsive Design

L'interface est adaptée aux différentes tailles d'écran grâce à :

- CSS Grid ;
- Flexbox ;
- Media Queries ;
- variables CSS.

Le projet peut être utilisé sur :

- ordinateur ;
- tablette ;
- smartphone.

---

## Limites du Brief 2

Cette version fonctionne uniquement côté navigateur.

Elle ne contient pas encore :

- de backend ;
- de base de données ;
- d'authentification ;
- de compte utilisateur ;
- d'API backend ;
- de véritable système d'envoi de candidature.

Les données proviennent actuellement d'un fichier JSON local.

Ces fonctionnalités seront ajoutées progressivement dans les prochains briefs.

---

## Évolution prévue

Dans le prochain brief, le fichier JSON pourra être remplacé progressivement par une architecture backend avec notamment :

- Node.js ;
- Express ;
- MySQL ;
- vues dynamiques ;
- données stockées dans une base de données.

---

## Auteur

Projet réalisé dans le cadre de la formation Développement Web.

---

## Statut

**Brief 2 terminé : application Front-End interactive avec JavaScript natif.**