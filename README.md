# 🎮 Shadow Syndicate - Dashboard GTA Organisation

Dashboard temps réel pour organisation GTA avec système de rôles et synchronisation en direct.

## 🚀 Fonctionnalités

- ✅ **Système de connexion** avec rôles (Admin / Membre)
- ✅ **Synchronisation en temps réel** via WebSockets
- ✅ **Gestion des opérations** (Admin uniquement)
- ✅ **Statistiques en direct** de l'organisation
- ✅ **Cartes d'identité** personnalisées
- ✅ **Interface responsive** (mobile & desktop)

## 👥 Comptes Disponibles

### Admin
- **Utilisateur:** `alex shadow`
- **Mot de passe:** `1596`
- **Privilèges:** Modification complète des données

### Membre
- **Utilisateur:** `draco_tve`
- **Mot de passe:** `1596`
- **Privilèges:** Lecture seule

## 📦 Installation

### Prérequis
- Node.js 16+ installé
- Git installé

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/VOTRE-USERNAME/syndicate-dashboard.git
cd syndicate-dashboard
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Démarrer le serveur**
```bash
npm start
```

4. **Accéder au dashboard**
Ouvrez votre navigateur sur : `http://localhost:3000`

## 🌐 Déploiement sur GitHub Pages + Backend

### Option 1 : Heroku (Recommandé pour le backend)

1. Créez un compte sur [Heroku](https://heroku.com)

2. Installez Heroku CLI
```bash
npm install -g heroku
```

3. Déployez l'application
```bash
heroku login
heroku create syndicate-dashboard
git push heroku main
```

### Option 2 : Render.com (Gratuit)

1. Créez un compte sur [Render.com](https://render.com)
2. Connectez votre repository GitHub
3. Créez un nouveau "Web Service"
4. Sélectionnez votre repository
5. Paramètres :
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Port:** Auto-détecté (3000)

### Option 3 : Railway.app (Gratuit + Simple)

1. Créez un compte sur [Railway.app](https://railway.app)
2. Cliquez sur "New Project" → "Deploy from GitHub"
3. Sélectionnez votre repository
4. Railway déploiera automatiquement !

## 📁 Structure du Projet

```
syndicate-dashboard/
├── server.js           # Serveur Node.js + WebSocket
├── package.json        # Dépendances npm
├── public/
│   └── index.html     # Frontend (dashboard)
└── README.md          # Ce fichier
```

## 🔧 Configuration

### Ajouter de nouveaux utilisateurs

Éditez `server.js`, section `database.users` :

```javascript
users: {
  'alex shadow': { password: '1596', role: 'admin', id: '001596', name: 'ALEX SHADOW' },
  'draco_tve': { password: '1596', role: 'membre', id: '002001', name: 'DRACO_TVE' },
  // Ajoutez vos utilisateurs ici
  'nouveau_membre': { password: 'motdepasse', role: 'membre', id: '003000', name: 'NOUVEAU_MEMBRE' }
}
```

### Modifier les données

Les données se trouvent dans `server.js` :
- `database.stats` - Statistiques de l'organisation
- `database.operations` - Liste des opérations
- `database.info` - Informations générales

## 🔐 Sécurité

⚠️ **IMPORTANT** : Pour un usage en production :

1. **Utilisez une vraie base de données** (MongoDB, PostgreSQL)
2. **Hashez les mots de passe** (bcrypt)
3. **Ajoutez des tokens JWT** pour l'authentification
4. **Utilisez HTTPS** en production
5. **Ajoutez des variables d'environnement** (.env)

## 🛠️ Scripts NPM

```bash
npm start      # Démarrer le serveur
npm run dev    # Mode développement avec nodemon (auto-reload)
```

## 📱 Utilisation

1. **Connexion** - Utilisez un compte admin ou membre
2. **Navigation** - 3 sections disponibles (Info, Planning, Carte ID)
3. **Admin** - Les admins peuvent modifier les opérations en temps réel
4. **Temps réel** - Tous les utilisateurs voient les changements instantanément

## 🌟 Fonctionnalités Avancées

### Temps Réel
Utilise Socket.IO pour synchroniser :
- Statistiques de l'organisation
- Ajout/modification/suppression d'opérations
- Notifications en direct

### Rôles & Permissions
- **Admin** : Accès complet, peut tout modifier
- **Membre** : Lecture seule, voit toutes les données

## 🐛 Dépannage

### Le serveur ne démarre pas
```bash
# Vérifiez que le port 3000 n'est pas utilisé
lsof -ti:3000 | xargs kill -9

# Relancez
npm start
```

### Erreur de connexion WebSocket
- Vérifiez que le serveur est bien démarré
- Assurez-vous d'accéder via `http://localhost:3000` et non en ouvrant le fichier HTML

## 📄 Licence

MIT - Libre d'utilisation

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout feature'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 💬 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Développé avec ❤️ pour Shadow Syndicate**
