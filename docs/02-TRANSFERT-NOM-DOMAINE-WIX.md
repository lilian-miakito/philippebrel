# 🔄 Guide : Transférer son Nom de Domaine depuis Wix

## Contexte

Philippe a acheté le domaine `philippebrel.fr` via Wix. Pour pouvoir l'utiliser avec un autre hébergeur, il faut le **transférer** vers un autre registrar (OVH, Gandi, etc.) ou simplement **modifier les DNS**.

Il y a deux approches possibles :

---

## Option A : Transfert Complet du Domaine (Recommandé)

Transférer la propriété du domaine vers un autre registrar (OVH, Gandi, Namecheap...).

### Avantages
- ✅ Contrôle total sur le domaine
- ✅ Généralement moins cher pour le renouvellement
- ✅ Plus de dépendance à Wix

### Prérequis
- Le domaine doit avoir plus de 60 jours
- Le domaine ne doit pas expirer dans les 15 jours
- Accès au compte Wix et à l'email associé

### Étapes

#### 1. Débloquer le domaine sur Wix

1. Se connecter à **Wix.com** avec le compte de Philippe
2. Aller dans **Mon compte** → **Domaines**
3. Cliquer sur le domaine `philippebrel.fr`
4. Aller dans **Paramètres avancés** ou **Transférer le domaine**
5. **Désactiver le verrouillage de transfert** (Transfer Lock)
6. **Obtenir le code d'autorisation (EPP/Auth Code)**
   - Wix l'envoie par email ou l'affiche directement

#### 2. Initier le transfert chez le nouveau registrar

**Exemple avec OVH** (français, ~10€/an) :

1. Aller sur [ovh.com](https://www.ovh.com/fr/domaines/)
2. Cliquer sur "**Transférer un domaine**"
3. Entrer `philippebrel.fr`
4. Entrer le **code d'autorisation** obtenu de Wix
5. Payer (inclut généralement 1 an de renouvellement)
6. **Valider le transfert** via l'email de confirmation

**Exemple avec Gandi** :

1. Aller sur [gandi.net](https://www.gandi.net/fr)
2. "Transférer" → entrer le domaine
3. Suivre les étapes similaires

#### 3. Confirmer le transfert

- Wix enverra un email pour **approuver** le transfert
- OVH/Gandi enverra un email pour confirmer
- Le transfert prend généralement **5-7 jours**

#### 4. Configurer les DNS sur le nouveau registrar

Une fois transféré, pointer le domaine vers le nouvel hébergement :

```
Type    Nom     Valeur
A       @       IP_DU_SERVEUR (ou Netlify/Cloudflare)
CNAME   www     nom-du-site.netlify.app
```

Pour **Cloudflare Pages** ou **Netlify**, ils fournissent les instructions exactes.

---

## Option B : Garder le Domaine chez Wix, Changer les DNS

Si le transfert n'est pas possible (domaine trop récent, expiration proche...).

### Avantages
- ✅ Plus rapide (quelques heures)
- ✅ Pas besoin de transfert

### Inconvénients
- ❌ Toujours dépendant de Wix pour le renouvellement
- ❌ Wix facture le domaine (~15-20€/an)

### Étapes

1. Se connecter à **Wix.com**
2. Aller dans **Mon compte** → **Domaines** → `philippebrel.fr`
3. Aller dans **DNS** ou **Paramètres DNS**
4. **Supprimer les enregistrements Wix existants**
5. **Ajouter les nouveaux enregistrements** fournis par l'hébergeur

---

## 📧 Informations à Demander à Philippe

Pour pouvoir l'aider :

1. **Email du compte Wix** : ________________
2. **Date d'achat du domaine** : ________________
3. **Date d'expiration du domaine** : ________________
4. **A-t-il accès au compte Wix ?** : Oui / Non

---

## ⚠️ Points d'Attention

### Avant le transfert
- [ ] S'assurer que l'email du compte Wix est accessible
- [ ] Vérifier la date d'expiration (pas dans les 15 jours)
- [ ] Sauvegarder les emails du domaine si utilisés

### Pendant le transfert
- [ ] Le site Wix actuel peut être temporairement inaccessible
- [ ] Prévoir ~5-7 jours de délai
- [ ] Ne pas laisser expirer le domaine pendant le transfert

### Après le transfert
- [ ] Vérifier que le site pointe bien vers le nouvel hébergement
- [ ] Configurer le certificat SSL (HTTPS)
- [ ] Tester toutes les pages

---

## 🔗 Liens Utiles

- [Guide officiel Wix - Transférer un domaine](https://support.wix.com/fr/article/transférer-un-domaine-wix-vers-un-autre-fournisseur)
- [OVH - Transférer un domaine](https://www.ovh.com/fr/domaines/transfert-domaine.xml)
- [Gandi - Transférer un domaine](https://www.gandi.net/fr/domain/transfer)

---

## 💡 Recommandation

**Notre conseil** : Opter pour l'**Option A** (transfert complet vers OVH ou Gandi) dès que possible.

- Coût : ~10-15€ (inclut 1 an de renouvellement)
- Durée : 5-7 jours
- Résultat : Indépendance totale vis-à-vis de Wix

Si le domaine expire bientôt, le **renouveler d'abord sur Wix** puis transférer après.

