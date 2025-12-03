# 🚀 Guide de Déploiement & Accès Client

Ce document explique comment mettre en ligne le site et donner accès à Philippe.

---

## 🌍 1. Mise en ligne sur Netlify

### A. Création du projet
1.  Pousser le code sur GitHub (déjà fait).
2.  Aller sur [Netlify](https://app.netlify.com/).
3.  **"Add new site"** > **"Import an existing project"** > **GitHub**.
4.  Sélectionner le dépôt `philippebrel`.
5.  Netlify détecte le `netlify.toml` et configure tout seul (`npm run build` / `dist`).
6.  **"Deploy site"**.

### B. Configuration de l'Authentification (CRITIQUE)
C'est ici que ça se joue pour que Philippe puisse se connecter.

1.  Aller dans **Site Settings** > **Identity**.
2.  Cliquez sur **"Enable Identity"**.
3.  **Registration preferences** : Mettre sur **"Invite only"** (Important ! Sinon tout le monde peut s'inscrire).
4.  **External providers** : 
    - Si vous voulez faire simple : Activez juste **"Email/Password"** (c'est le défaut).
    - Si vous utilisez Auth0 : Configurez-le ici, mais assurez-vous que `git-gateway` est supporté.
5.  **Services** > **Git Gateway** :
    - Cliquez sur **"Enable Git Gateway"**.
    - Cela va vous demander de vous connecter à GitHub pour donner la permission à Netlify de modifier le dépôt. **C'est obligatoire pour que le CMS puisse enregistrer les modifications.**

---

## 👤 2. Donner l'accès à Philippe (Invitation)

### Méthode Standard (Email/Mot de passe)
C'est la méthode recommandée pour Decap CMS.

1.  Dans Netlify, aller dans l'onglet **"Identity"** (en haut).
2.  Cliquez sur **"Invite users"**.
3.  Entrez l'email de Philippe : `brelphilippe@gmail.com`.
4.  Envoyez l'invitation.

**Ce que Philippe va recevoir :**
1.  Un email avec un lien "Accept the invite".
2.  En cliquant, il arrivera sur le site.
3.  Il devra définir son mot de passe.
4.  Ensuite, il pourra aller sur `/admin/` et se connecter.

### Si vous utilisez Auth0
Si vous avez désactivé "Email/Password" pour Auth0 :
1.  Créez l'utilisateur dans votre dashboard **Auth0**.
2.  Assurez-vous que l'intégration Auth0 dans Netlify Identity est active.
3.  Philippe cliquera sur "Log in with Auth0" sur la page d'admin.

---

## 🛠️ 3. Guide Rapide pour Philippe (à lui envoyer)

**URL d'administration :** `https://philippebrel.fr/admin/` (ou l'URL Netlify temporaire)

**Procédure :**
1.  Clique sur le lien d'invitation reçu par email.
2.  Crée ton mot de passe.
3.  Va sur la page `/admin/`.
4.  Connecte-toi.

**Ajouter une œuvre :**
1.  Colonne de gauche : "Œuvres".
2.  Bouton vert "New Œuvre".
3.  Remplis le formulaire (Titre, Image, Prix...).
4.  Clique sur **"Publish"** (en haut) > **"Publish now"**.
5.  Attends 1 minute, le site se met à jour tout seul !

**Modifier une œuvre :**
1.  Clique sur l'œuvre dans la liste.
2.  Fais tes modifs.
3.  Clique sur "Publish".

---

## ⚠️ Dépannage

- **Erreur "Git Gateway Error"** : Vous n'avez pas activé Git Gateway dans *Settings > Identity > Services*.
- **Page blanche sur /admin/** : Vérifiez que vous êtes bien sur `/admin/` (avec le slash) et que le déploiement est fini.
- **Images ne s'affichent pas dans l'admin** : C'est normal si elles ont été uploadées manuellement avant. Les nouvelles images ajoutées via le CMS s'afficheront correctement.
