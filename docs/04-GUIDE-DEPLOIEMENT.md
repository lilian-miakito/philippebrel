# 🚀 Guide de Déploiement & Comprendre l'Architecture "Git-based"

Ce document explique comment mettre en ligne le site de Philippe Brel et comment fonctionne cette architecture particulière (Astro + Decap CMS).

---

## 💡 Le Concept : "Tout est dans Git"

Contrairement à un CMS classique (WordPress, Drupal) qui a besoin :
- D'un serveur PHP/Node.js qui tourne 24h/24
- D'une base de données (MySQL, PostgreSQL)

Ici, nous utilisons une architecture **JAMstack** avec un **Git-based CMS**.

### Comment ça marche ?

1.  **Stockage** : Tout le contenu (textes, infos des œuvres) est stocké dans des fichiers **Markdown** (`.md`) directement dans le dossier `src/content/`. Les images sont dans `public/images/`.
2.  **Base de données** : Il n'y en a pas ! C'est votre dépôt Git (GitHub) qui fait office de base de données.
3.  **L'Admin (Decap CMS)** : C'est une simple application React (`admin/index.html`) qui se connecte à l'API de GitHub. Quand Philippe ajoute une œuvre, le CMS fait un **commit** dans le dépôt Git.
4.  **Déploiement** : À chaque nouveau commit (manuel ou via le CMS), l'hébergeur (Netlify) détecte le changement, **reconstruit** tout le site en HTML statique et le publie.

### Avantages pour Philippe
- **Coût** : 0€ (pas de serveur, pas de DB).
- **Sécurité** : Impossible à pirater (ce sont juste des fichiers HTML).
- **Vitesse** : Extrêmement rapide.
- **Backup** : L'historique Git sert de sauvegarde complète.

---

## 🌍 Mise en ligne sur Netlify (Recommandé)

C'est la méthode la plus simple car Netlify a créé ce CMS et gère tout nativement.

### 1. Pousser le code sur GitHub
Si ce n'est pas déjà fait, créez un dépôt privé ou public sur GitHub et poussez le code :

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USER/philippebrel.git
git push -u origin main
```

### 2. Connecter à Netlify
1.  Allez sur [Netlify](https://app.netlify.com/).
2.  Cliquez sur **"Add new site"** > **"Import an existing project"**.
3.  Choisissez **GitHub**.
4.  Sélectionnez le dépôt `philippebrel`.
5.  Netlify va détecter Astro automatiquement :
    - **Build command** : `npm run build`
    - **Publish directory** : `dist`
6.  Cliquez sur **"Deploy site"**.

### 3. Activer l'Authentification (Identity)
C'est ce qui permet à Philippe de se connecter à l'admin.

1.  Dans le tableau de bord Netlify de votre site, allez dans **"Site configuration"** > **"Identity"**.
2.  Cliquez sur **"Enable Identity"**.
3.  Dans **"Registration preferences"**, mettez "Invite only" (pour éviter que n'importe qui s'inscrive).
4.  Dans **"Services"** > **"Git Gateway"**, cliquez sur **"Enable Git Gateway"** (cela lie l'auth Netlify à votre repo GitHub).

### 4. Créer le compte admin
1.  Toujours dans l'onglet **Identity**, cliquez sur **"Invite users"**.
2.  Entrez l'email de Philippe (ou le vôtre pour tester).
3.  Vous recevrez un mail pour définir le mot de passe.

### 5. C'est fini !
Le site est en ligne.
- **Site public** : `https://votre-site.netlify.app`
- **Admin** : `https://votre-site.netlify.app/admin/`

---

## 🔧 Maintenance & Évolutions

### Si vous (le dev) voulez modifier le code
Vous travaillez en local, vous faites vos modifs (CSS, layouts...), vous poussez sur Git.
👉 Netlify détecte le push et met à jour le site.

### Si Philippe modifie le contenu
Il va sur l'admin, modifie une œuvre, clique sur "Publish".
👉 Decap CMS fait un commit sur Git.
👉 Netlify détecte le commit et met à jour le site.

Les deux flux se rejoignent parfaitement !

---

## 🆘 En cas de problème

**Les images ne s'affichent pas dans l'admin ?**
Vérifiez que `config.yml` pointe bien vers `public/images` (notre configuration actuelle est correcte).

**L'admin demande une URL Git Gateway ?**
C'est que vous n'avez pas activé "Git Gateway" dans les paramètres Netlify (étape 3.4).

**Le site ne se met pas à jour ?**
Regardez les logs de déploiement dans Netlify ("Deploys"). Si le build échoue, l'erreur sera indiquée (souvent une erreur de syntaxe dans un fichier .md ou .astro).

