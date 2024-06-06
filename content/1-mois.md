---
title: "22 chapitres - 1 mois après le début du projet"
description: "Avancement - 11 février 2024"
tags:
    - avancement du projet
date: "2024-02-11"
cover: "1-mois/cover.png"
head:
    meta:
        - name: 'robots'
          content: 'noindex, follow'

---

## 22 chapitres écrits

![](https://geps.dev/progress/44)

Ca fait pile un mois que j'ai commancé le projet et j'ai ajouté 10 chapitres depuis le point précédent. Voici la liste des chapitres que j'ai ajouté depuis la denière fois :

* crc (openshift version desktop)
* desktop-kubernetes (ensemble de scripts bash pour créer des VMs locales)
* minikube (exemple avec Hyper-V sous Windows 11)
* k3d
* orbstack
* k0s
* kairos Linux
* k3sup
* CIVO cloud
* Exoscale (via des appels à l'API)

## Avancement

A priori j'ai terminé l'écriture de tous les chapitres pour les "outils Desktop", qui permettent d'installer un cluster Kubernetes basique sur votre machine de développement.

J'ai "juste" besoin d'un Mac pour installer Orbstack, a priori un outil avec une bien meilleure expérience utilisateur que Docker Desktop pour MacOS, mais qui ne fonctionne... QUE sous MacOS...

Il faudra qu'on m'en prête un, ou alors que j'essaye d'installer un machine sous MacOS (via un [Mac Mini à distance de chez Scaleway par exemple](https://www.scaleway.com/fr/hello-m1/))

Il n'y a pas encore eu de grosses modification au niveau de la mise en page, je reste sur mon Makefile qui utilise pandoc pour l'instant.

J'ai aussi essayé de générer un nuancier avec le logo de Kubernetes dedans et l'IA m'a donné que ça (au mieux). Bof...

![](1-mois/cover.png)
