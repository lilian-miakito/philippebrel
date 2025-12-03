# 🎨 Recommandation Technique - Site Philippe Brel

## Analyse du Site Actuel

### Structure observée

Le site Wix actuel est très simple :

1. **Page d'accueil**
   - Titre "ATELIER PHILIPPE BREL"
   - Description multilingue (FR, EN, ES, CN)
   - Image de fond (œuvre)
   - Coordonnées de contact (email, téléphone)
   - Liens réseaux sociaux (Instagram, Facebook, Tumblr)

2. **Boutique/Galerie** (~25-30 œuvres)
   - Grille d'œuvres avec vignettes
   - Titre + prix + disponibilité
   - Pagination (12 œuvres par page)

3. **Page détail d'œuvre**
   - Image principale
   - Titre
   - Description : technique (huile sur toile), dimensions, date
   - Prix
   - Panier e-commerce (non prioritaire selon le client)
   - Navigation précédent/suivant

### Points faibles identifiés
- Pas de page "À propos" / biographie de l'artiste
- Pas de blog / actualités / expositions
- Pas de galerie photo des expositions
- Navigation très limitée
- Traductions basiques (juste quelques lignes)
- Coût élevé de Wix

---

## 🏆 Recommandation : Astro + Decap CMS

### Pourquoi Astro ?

| Critère | Astro | WordPress | Next.js |
|---------|-------|-----------|---------|
| Performance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Simplicité | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Coût hébergement | Gratuit | ~5-10€/mois | Gratuit |
| Facilité maintenance | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Sécurité | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Interface admin | Via CMS | Native | Via CMS |

**Astro génère des sites statiques** = pages HTML pures, ultra-rapides, zéro vulnérabilité serveur.

### Pourquoi Decap CMS ?

**Decap CMS** (anciennement Netlify CMS) offre :

- ✅ **Interface admin intuitive** pour Philippe
- ✅ **Gratuit** et open-source
- ✅ **Édition visuelle** des contenus
- ✅ **Upload d'images** simplifié
- ✅ **Prévisualisation** avant publication
- ✅ **Pas de base de données** (tout est dans des fichiers)
- ✅ **Sauvegarde automatique** via Git

### Alternative considérée : Tina CMS

Si on veut une expérience encore plus visuelle, **Tina CMS** offre :
- Édition en direct sur la page
- Interface plus moderne
- Version gratuite suffisante

---

## 📐 Architecture Proposée

```
philippebrel/
├── src/
│   ├── content/
│   │   ├── oeuvres/          # Collection des œuvres
│   │   │   ├── lastours.md
│   │   │   ├── reaper.md
│   │   │   └── ...
│   │   └── config.ts         # Schéma des collections
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro       # Accueil
│   │   ├── galerie.astro     # Galerie des œuvres
│   │   ├── a-propos.astro    # Biographie (nouveau)
│   │   ├── contact.astro     # Contact (nouveau)
│   │   └── oeuvres/
│   │       └── [slug].astro  # Page détail œuvre
│   └── components/
│       ├── Header.astro
│       ├── Footer.astro
│       ├── OeuvreCard.astro
│       └── GalerieGrid.astro
├── public/
│   ├── images/
│   │   └── oeuvres/          # Images des tableaux
│   └── admin/
│       └── config.yml        # Configuration Decap CMS
├── astro.config.mjs
└── package.json
```

### Structure d'une œuvre (Markdown)

```yaml
---
title: "Lastours"
slug: lastours
image: /images/oeuvres/lastours.jpg
images:  # Pour plusieurs vues
  - /images/oeuvres/lastours.jpg
  - /images/oeuvres/lastours-detail.jpg
technique: "Peinture à l'huile sur toile"
dimensions: "99 x 117 cm"
date: 2024-01-11
prix: 2000
disponible: true
featured: true  # Pour mettre en avant sur l'accueil
description: "Paysage des châteaux de Lastours dans l'Aude"
---

Description longue de l'œuvre si nécessaire...
```

---

## 💰 Coûts Estimés

### Hébergement (3 options)

| Solution | Coût | Avantages |
|----------|------|-----------|
| **Cloudflare Pages** | Gratuit | Très rapide, CDN mondial |
| **Netlify** | Gratuit | Facile, preview automatique |
| **Vercel** | Gratuit | Très populaire |
| **Auto-hébergement** | Variable | Contrôle total |

### Nom de domaine
- **Transfert depuis Wix** : 0€ (juste la procédure)
- **Renouvellement annuel** : ~12-15€/an chez un registrar classique (OVH, Gandi, etc.)

### Coût total estimé
- **Première année** : ~12-15€ (juste le domaine)
- **Années suivantes** : ~12-15€/an

**vs Wix actuellement** : Probablement 150-200€/an

---

## 🚀 Fonctionnalités Proposées

### Phase 1 - MVP (reproduction du site actuel)
- [x] Page d'accueil avec présentation
- [x] Galerie des œuvres
- [x] Pages de détail des œuvres
- [x] Formulaire de contact
- [x] Liens réseaux sociaux
- [x] Interface admin pour gérer les œuvres

### Phase 2 - Améliorations
- [ ] Page "À propos" / biographie de l'artiste
- [ ] Page "Expositions" (passées et à venir)
- [ ] Blog / Actualités
- [ ] Galerie photo des événements
- [ ] Système de filtres (par technique, année, prix...)

### Phase 3 - Optionnel
- [ ] E-commerce simple (Stripe/PayPal)
- [ ] Newsletter
- [ ] Traduction multilingue complète

---

## 📋 Prérequis Techniques

Pour que Philippe puisse gérer son site :

1. **Compte GitHub** (gratuit) - pour stocker le site
2. **Compte Netlify/Cloudflare** (gratuit) - pour l'hébergement
3. **Navigateur moderne** - pour accéder à l'admin

### Workflow de publication

```
Philippe se connecte à l'admin
        ↓
Ajoute/modifie une œuvre via l'interface
        ↓
Clique sur "Publier"
        ↓
Le site se met à jour automatiquement (~1 minute)
```

---

## ⏱️ Planning Estimé

| Phase | Durée | Description |
|-------|-------|-------------|
| Setup & structure | 2h | Configuration Astro + CMS |
| Design & layout | 4h | Création du thème visuel |
| Composants | 3h | Header, galerie, cartes... |
| Pages | 2h | Accueil, galerie, détail |
| Migration contenu | 2h | Import des œuvres depuis Wix |
| Tests & ajustements | 2h | Responsive, bugs |
| Formation Philippe | 1h | Utilisation de l'admin |
| **Total** | **~16h** | |

---

## ✅ Décision

**Stack recommandée :**
- **Framework** : Astro 4.x
- **CMS** : Decap CMS (ou Tina CMS si on veut plus visuel)
- **Hébergement** : Cloudflare Pages ou Netlify (gratuit)
- **Domaine** : Transférer depuis Wix vers OVH/Gandi

Cette solution offre :
- 🎯 Autonomie totale pour Philippe
- 💸 Coût quasi-nul (~15€/an)
- ⚡ Performance excellente
- 🔒 Sécurité maximale (pas de serveur)
- 🛠️ Maintenance minimale

