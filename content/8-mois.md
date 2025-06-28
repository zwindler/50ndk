---
title: "8 mois d'écriture, les premières relectures commencent"
description: "Avancement - 6 septembre 2024"
tags:
    - avancement du projet
date: "2024-09-06"
cover: "8-mois/cartouche.png"
head:
    meta:
        - name: 'robots'
          content: 'follow'

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

Au delà de ces petites difficultés, j'ai aussi passé un long moment sur les relectures des chapitres existants (les miennes mais aussi celles de quelques "happy few" qui ont accès au brouillon).

Un commentaire (extrêmement pertinent) qui est remonté plusieurs fois est qu'il manquait pour chaque "type" d'outil (ex. les outils desktop) une conclusion / un avis / un récap. C'est désormais chose faite.

Dernier point, je suis repassé sur tous les chapitres, et j'ai corrigé tous les chapitres dans lesquels le "cartouche" des pros & cons (idée qui m'est venue en cours de route) manquait.

![](images/8-mois/cartouche.png)

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

<hr>

Si vous n'êtes pas abonnés, vous pouvez toujours le faire ici (je ne fais pas plus d'une news par mois, et seulement si le projet avance) :

<div class="rounded-2xl">
<div class="mx-auto max-w-[1330px] ">
<div class="max-w-screen-xl px-4 py-8 mx-auto flex items-center justify-center">
<div class="border border-slate-200 p-24 rounded-md bg-white shadow-md ">
<span class="text-3xl font-bold text-gray-700 ">Abonnez-vous à la newsletter pour recevoir les nouvelles du livre</span>
<form action="https://rssfeedpulse.com/campaign/83cee038-722a-4fca-9e57-e8fc26326a06/subscribe" method="get" class="flex mt-10 gap-4">
<input name="email" autocomplete="email" type="email" placeholder="votre email" class="p-2 text-gray-700 w-full border border-slate-200" required>
<button class="bg-pink-500 font-bold text-2xl text-black w-full border border-slate-300 py-2 px-4 hover:bg-pink-600 hover:text-white transition-colors duration-200 ease-in-out rounded-md">S'abonner</button>
</form>
</div>
</div>
</div>
</div>
