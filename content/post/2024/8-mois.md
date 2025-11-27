---
title: 8 mois d'écriture, les premières relectures commencent
description: Avancement - 6 septembre 2024
slug: 8-mois
date: '2024-09-06'
image: /images/8-mois/cartouche.png
tags:
- avancement du projet
categories:
- Kubernetes
---

## 41 chapitres écrits, plus que 9

![](https://geps.dev/progress/82)

Voici la liste des chapitres qui ont été écrits depuis la dernière fois :

* Canonical Kubernetes
* Cluster API
* Typhoon
* Orbstack

## Avancement du projet

Une fois de plus, peu de chapitres écrits, mais pour de *bonnes* raisons.

La première, c'est que les vacances sont passées par là et que ce n'était évidemment pas la priorité.

Mais au-delà de ça, je suis surtout tombé sur un chapitre qui m'a demandé pas mal de préparations : la cluster API. Ce chapitre m'a donné du fil à retordre car je me suis mis dans une position complexe : utiliser Proxmox VE comme fournisseur d'infrastructure. Et je peux dire avec le recul que si c'est une idée amusante, de pouvoir générer "as code" des clusters Kubernetes dans Proxmox VE, ce n'est pas amusant à configurer (du tout !). Mais ça fonctionne :D.

Au-delà de ces petites difficultés, j'ai aussi passé un long moment sur les relectures des chapitres existants (les miennes mais aussi celles de quelques "happy few" qui ont accès au brouillon).

Un commentaire (extrêmement pertinent) qui est remonté plusieurs fois est qu'il manquait pour chaque "type" d'outil (ex. les outils desktop) une conclusion / un avis / un récap. C'est désormais chose faite.

Dernier point, je suis repassé sur tous les chapitres, et j'ai corrigé tous les chapitres dans lesquels le "cartouche" des pros & cons (idée qui m'est venue en cours de route) manquait.

![](/images/8-mois/cartouche.png)

Prochaines étapes : finir les chapitres manquants, dont la liste commence à se stabiliser. Sauf surprise de dernière minute, ça sera :

* Crossplane (exemple avec Azure)
* k0smotron
* Kops
* Harvester (exemple sur Equinix Metal)
* Kubernatic Kubernetes Platform
* Gardener
* Elemental OS (exemple avec RKE2)
* EKS (exemple avec Karpenter)
* LeafCloud


