# 🟥 Skarll'13 — Dashboard Organisation GTA RP

Interface web privée pour gérer une organisation **GTA RolePlay** : membres, opérations et cartes d'identité.

🔗 Accès au site : https://dracotve.github.io/orga-gta/

---

## ✨ Fonctionnalités

### 🔐 Système de connexion

* Accès protégé par identifiant / mot de passe
* Interface verrouillée avant identification
* Empêche l'accès aux informations sensibles

---

### 📊 Informations générales

* Membres actifs
* Opérations totales
* Gains totaux
* Niveau de l'organisation
* Territoires contrôlés
* Dernière mise à jour système

---

### 🎯 Planning des opérations

Affichage des opérations avec statut :

| Statut       | Description                 |
| ------------ | --------------------------- |
| 🔴 En cours  | Mission actuellement active |
| 🟡 Planifiée | Préparation d'opération     |
| ⚫ Complétée  | Mission terminée            |

Chaque opération contient :

* Date & heure
* Leader
* Taille de l’équipe
* Risque
* Gain estimé / réel

---

### 🪪 Cartes d'identité membres

Chaque membre possède sa fiche :

* Nom de code
* Numéro ID
* Rang
* Spécialité
* Date d'entrée
* Statut
* Nombre d'opérations
* Taux de réussite
* Photo

---

## 🖥️ Technologies utilisées

* HTML5
* CSS3 (UI style organisation / cartel)
* JavaScript Vanilla
* Google Fonts

---

## 📁 Structure

```
orga-gta/
│── index.html
│── README.md
```

---

## 🔧 Installation locale

```bash
git clone https://github.com/dracotve/orga-gta.git
cd orga-gta
```

Puis ouvre simplement :

```
index.html
```

(Aucun serveur requis)

---

## 🛠️ Personnalisation

Pour ajouter un membre :

1. Copier un bloc `id-card`
2. Modifier les informations
3. Ajouter une image Imgur (lien direct i.imgur.com)

---

## ⚠️ Projet

Projet fictif destiné à un serveur GTA RP.
Aucune donnée réelle.

---

## 👤 Auteur

DracoTVE
