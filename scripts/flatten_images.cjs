const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OEUVRES_DIR = path.join(IMAGES_DIR, 'oeuvres');
const CONTENT_DIR = path.join(__dirname, '../src/content/oeuvres');

// 1. Déplacer les images
if (fs.existsSync(OEUVRES_DIR)) {
    const files = fs.readdirSync(OEUVRES_DIR);
    files.forEach(file => {
        const oldPath = path.join(OEUVRES_DIR, file);
        const newPath = path.join(IMAGES_DIR, file);
        
        // Vérifier si le fichier existe déjà à la destination
        if (fs.existsSync(newPath)) {
            console.log(`⚠️  ${file} existe déjà dans images/, pas écrasé.`);
        } else {
            fs.renameSync(oldPath, newPath);
            console.log(`📦 Déplacé : ${file}`);
        }
    });
    
    // Supprimer le dossier s'il est vide
    try {
        fs.rmdirSync(OEUVRES_DIR);
        console.log('🗑️  Dossier oeuvres/ supprimé.');
    } catch (e) {
        console.log('ℹ️  Dossier oeuvres/ non vide, conservé.');
    }
} else {
    console.log('ℹ️  Pas de dossier public/images/oeuvres trouvé.');
}

// 2. Mettre à jour les fichiers Markdown
if (fs.existsSync(CONTENT_DIR)) {
    const mdFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
    
    mdFiles.forEach(file => {
        const filePath = path.join(CONTENT_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remplacer /images/oeuvres/ par /images/
        if (content.includes('/images/oeuvres/')) {
            content = content.replace(/\/images\/oeuvres\//g, '/images/');
            fs.writeFileSync(filePath, content);
            console.log(`📝 Mis à jour : ${file}`);
        }
    });
}

console.log('✨ Migration terminée !');

