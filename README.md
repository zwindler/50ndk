# Kubernetes : 50 solutions pour les postes de dev et les clusters de prod

Site de promotion du livre "Kubernetes : 50 solutions pour les postes de développement et les clusters de production" édité chez Eyrolles.

## À propos du site

Ce site est construit avec [Hugo](https://gohugo.io/) et utilise le thème [Stack](https://github.com/CaiJimmy/hugo-theme-stack).

## Prérequis

- [Hugo Extended](https://gohugo.io/installation/) (version 0.100.0 ou supérieure)
- [Go](https://golang.org/doc/install) (version 1.21 ou supérieure, pour les modules Hugo)

## Installation

```bash
# Cloner le repository
git clone https://github.com/zwindler/50ndk.git
cd 50ndk

# Télécharger le thème via les modules Hugo
hugo mod get
```

## Développement local

```bash
# Lancer le serveur de développement
hugo server

# Le site sera accessible sur http://localhost:1313/
```

## Build pour production

```bash
# Générer le site statique
hugo

# Les fichiers générés seront dans le dossier /public/
```

## Structure du projet

```
.
├── content/
│   ├── page/           # Pages spéciales (about, archives)
│   │   ├── about/
│   │   └── archives/
│   └── post/           # Articles du blog
│       ├── 2024/
│       └── 2025/
├── static/
│   ├── images/         # Images du site
│   └── avatar.jpg      # Avatar du sidebar
├── hugo.yaml           # Configuration Hugo
├── go.mod              # Modules Hugo (thème Stack)
└── README.md           # Ce fichier
```

## Thème

Ce site utilise le thème [Stack](https://github.com/CaiJimmy/hugo-theme-stack) de CaiJimmy, un thème Hugo moderne et responsive avec support des catégories, tags, et archives.

## Auteur

Denis Germain - [@zwindler](https://github.com/zwindler)
