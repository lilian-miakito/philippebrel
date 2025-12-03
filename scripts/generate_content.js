const fs = require('fs');
const path = require('path');

// Liste des œuvres récupérées (avec prix/dispo si connu)
const oeuvresData = [
  {
    "title": "Reaper",
    "slug": "reaper",
    "image": "/images/oeuvres/reaper.jpg",
    "prix": 1000,
    "disponible": true
  },
  {
    "title": "Plougrescant",
    "slug": "plougrescant",
    "image": "/images/oeuvres/plougrescant.jpg",
    "prix": 1500, // Estimé
    "disponible": false
  },
  {
    "title": "Baraigne",
    "slug": "baraigne",
    "image": "/images/oeuvres/baraigne.jpg",
    "prix": 600,
    "disponible": true
  },
  {
    "title": "Avignonet lauragais",
    "slug": "avignonet-lauragais",
    "image": "/images/oeuvres/avignonet-lauragais.jpg",
    "prix": 600,
    "disponible": true
  },
  {
    "title": "Avignonet",
    "slug": "avignonet-1", // Attention au slug
    "image": "/images/oeuvres/avignonet-1.jpg",
    "prix": 600,
    "disponible": true
  },
  {
    "title": "CEASAR",
    "slug": "ceasar",
    "image": "/images/oeuvres/ceasar.jpg",
    "prix": 1000,
    "disponible": true
  },
  {
    "title": "Lastours",
    "slug": "lastours",
    "image": "/images/oeuvres/lastours.jpg",
    "prix": 2000,
    "disponible": true
  },
  {
    "title": "sans titre (Villefranche de Lauragais)",
    "slug": "sans-titre-villefranche-de-lauragais",
    "image": "/images/oeuvres/sans-titre-villefranche.jpg",
    "prix": 100,
    "disponible": true
  },
  {
    "title": "sans titre (Villenouvelle)",
    "slug": "sans-titre-villenouvelle",
    "image": "/images/oeuvres/sans-titre-villenouvelle.jpg",
    "prix": 100,
    "disponible": true
  },
  {
    "title": "Enrouleur",
    "slug": "enrouleur",
    "image": "/images/oeuvres/enrouleur.jpg",
    "prix": 100,
    "disponible": true
  },
  {
    "title": "Jaguar camouflage brun terre de France",
    "slug": "jaguar-camouflage-brun-terre-de-france",
    "image": "/images/oeuvres/jaguar-camouflage.jpg",
    "prix": 1000,
    "disponible": true
  },
  {
    "title": "Dora hiver 23",
    "slug": "dora-hiver-23",
    "image": "/images/oeuvres/dora-hiver-23.jpg",
    "prix": 1500,
    "disponible": true
  }
];

// Liste de TOUTES les images téléchargées
const allImages = [
    "reaper.jpg", "plougrescant.jpg", "baraigne.jpg", "avignonet-lauragais.jpg", "avignonet-1.jpg", 
    "ceasar.jpg", "lastours.jpg", "sans-titre-villefranche.jpg", "sans-titre-villenouvelle.jpg", 
    "enrouleur.jpg", "jaguar-camouflage.jpg", "dora-hiver-23.jpg", "pissenlits.jpg", "paquerettes.jpg", 
    "ficaire.jpg", "georges-drigny.jpg", "cerisier-du-japon.jpg", "cosprons.jpg", "avignonet.jpg", 
    "les-anticonformes.jpg", "cour-des-lions.jpg", "square-des-cardeurs.jpg", "cergy-le-haut-v.jpg", 
    "noyers.jpg", "cergy-le-haut-iv.jpg", "cregy-le-haut-iii.jpg", "rue-de-la-plaine.jpg", "charonne.jpg", 
    "cergy-le-haut-i.jpg", "cergy-le-haut.jpg", "yvonne-godard.jpg", "choux-de-pontoise.jpg", 
    "poireaux-carottes-betterave.jpg", "mandarines.jpg", "butternut-echalion.jpg", "square-emily-dickinson.jpg", 
    "square-marcel-nadaud.jpg", "chaise-orange.jpg", "piscine-municipale-de-villefranche-de-lauragais.jpg", 
    "square-sarah-bernhardt.jpg", "bercy.jpg", "picasso-marron.jpg", "place-leon-blum.jpg", 
    "1-place-leon-blum-paris-11.jpg", "courge-musquee-potimarron-table.jpg", "poire-isabelle-c-ur.jpg", 
    "grenade-jean-jacquinot.jpg", "peche-poire-machiko-hagiwara.jpg", "angle-menilmontant-amandiers.jpg", 
    "montparnasse.jpg", "clementines-atsonios.jpg", "potimarron-atsonios.jpg", "theiere-mug-tabouret.jpg", 
    "evier.jpg"
];

const CONTENT_DIR = path.join(__dirname, '../src/content/oeuvres');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
}

function formatTitle(filename) {
    const name = filename.replace('.jpg', '').replace(/-/g, ' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function generateMarkdown(imageFile) {
    // Chercher si on a des infos précises
    const info = oeuvresData.find(o => o.image.includes(imageFile)) || {};
    
    const title = info.title || formatTitle(imageFile);
    const slug = info.slug || imageFile.replace('.jpg', '');
    const prix = info.prix || 0; // 0 = Sur demande
    const disponible = info.disponible !== undefined ? info.disponible : true;
    
    // Déterminer technique et dimensions par défaut (à affiner)
    const technique = "Peinture à l'huile sur toile";
    const dimensions = "À définir";
    const date = new Date().toISOString().split('T')[0];
    
    const content = `---
title: "${title}"
image: "/images/oeuvres/${imageFile}"
technique: "${technique}"
dimensions: "${dimensions}"
date: ${date}
prix: ${prix}
disponible: ${disponible}
featured: ${imageFile === 'lastours.jpg' || imageFile === 'ceasar.jpg' || imageFile === 'avignonet-lauragais.jpg'}
description: "Œuvre originale de Philippe Brel."
ordre: ${Math.floor(Math.random() * 100)}
---

Cette œuvre unique est réalisée à la peinture à l'huile sur toile.
`;

    const filePath = path.join(CONTENT_DIR, `${slug}.md`);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Créé : ${slug}.md`);
}

console.log('🚀 Génération des contenus...');
allImages.forEach(generateMarkdown);
console.log('✨ Terminé !');

