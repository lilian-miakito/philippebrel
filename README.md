# 🎨 Atelier Philippe Brel

Site portfolio de Philippe Brel, peintre expressionniste abstrait.

**Stack technique :** Astro + Decap CMS

---

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** version 18 ou supérieure
- **npm** (inclus avec Node.js)

### Installation

```bash
# 1. Aller dans le dossier du projet
cd philippebrel

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:4321**

---

## 📁 Structure du Projet

```
philippebrel/
├── public/
│   ├── admin/           # Interface Decap CMS
│   ├── images/          # Images (œuvres, portraits...)
│   └── favicon.svg
├── src/
│   ├── components/      # Composants réutilisables
│   ├── content/
│   │   ├── oeuvres/     # 📄 Les œuvres (fichiers .md)
│   │   ├── pages/       # Pages éditables
│   │   └── settings/    # Paramètres du site
│   ├── layouts/         # Layouts de base
│   ├── pages/           # Pages du site
│   └── styles/          # Styles globaux
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🖼️ Ajouter des Images

### Pour les œuvres

1. Placer les images dans `public/images/oeuvres/`
2. Nommer le fichier en minuscules avec des tirets (ex: `lastours.jpg`)
3. Formats recommandés : JPG ou WebP
4. Taille recommandée : 1200-2000px de large

### Pour le hero et le portrait

- Hero de la page d'accueil : `public/images/hero-bg.jpg`
- Portrait de l'artiste : `public/images/philippe-brel-portrait.jpg`

---

## ✏️ Gérer le Contenu

### Via Decap CMS (Interface Admin)

1. Lancer le backend local : `npx decap-server`
2. Dans un autre terminal : `npm run dev`
3. Aller sur **http://localhost:4321/admin/**
4. Ajouter/modifier les œuvres via l'interface

### Manuellement (Fichiers Markdown)

Créer un fichier dans `src/content/oeuvres/` :

```markdown
---
title: "Nom de l'œuvre"
image: "/images/oeuvres/nom-oeuvre.jpg"
technique: "Peinture à l'huile sur toile"
dimensions: "100 x 80 cm"
date: 2024-01-15
prix: 1500
disponible: true
featured: true
lieu: "Nom du lieu"
description: "Description courte de l'œuvre"
ordre: 1
---

Description longue optionnelle...
```

---

## 🛠️ Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Prévisualise le build |
| `npx decap-server` | Lance le backend CMS local |

---

## 🌐 Déploiement

### Option 1 : Netlify (Recommandé)

1. Créer un compte sur [netlify.com](https://netlify.com)
2. Connecter le repo GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Activer Identity pour l'authentification CMS

### Option 2 : Cloudflare Pages

1. Créer un compte sur [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connecter le repo GitHub
3. Build command: `npm run build`
4. Build output directory: `dist`

### Option 3 : Auto-hébergement

```bash
npm run build
# Copier le contenu de dist/ sur votre serveur web
```

---

## 📧 Contact

- **Email** : brelphilippe@gmail.com
- **Téléphone** : +33 6 62 45 97 83
- **Site** : [philippebrel.fr](https://philippebrel.fr)

---

## 📄 Licence

© Philippe Brel - Tous droits réservés

