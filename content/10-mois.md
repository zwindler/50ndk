---
title: "10 mois d'écriture, des chapitres non prévus, weasyprint, ..."
description: "Avancement - 5 novembre 2024"
tags:
    - avancement du projet
date: "2024-11-05"
cover: "10-mois/weasyprint.png"
head:
    meta:
        - name: 'robots'
          content: 'follow'

---

## 47 chapitres écrits, il n'en reste que trois

![](https://geps.dev/progress/94)

Voici la liste des 8 nouveaux chapitres qui ont été écrits depuis la dernière fois :

* Omni (Sidero Labs)
* kOps
* Elemental (Rancher labs)
* Kubermatic Kubernetes Platform
* KubeKey
* Gardener
* Crossplane (exemple avec AKS)
* K0smotron

## Comment ça, il en reste 3 ?

**Beaucoup de travail réalisé en deux mois**. Je n'ai pas communiqué le mois dernier, car je n'ai pas trouvé les avancées assez significatives pour communiquer là-dessus. Du coup, il n'est pas étonnant que ce post soit plus chargé, puisqu'il y a deux mois de travail.

Les plus attentives/attentifs d'entre vous auront remarqués que j'ai écrit **huit** chapitres et qu'il m'en reste **trois**, alors que lors de l'article précédent, je disais qu'il m'en restait seulement **neuf** à écrire...

C'est parce qu'au fil des recherches, j'ai découvert plusieurs nouveaux outils intéressants et que je n'avais pas le cœur à les ignorer alors qu'ils étaient prometteurs.

Ça veut donc dire qu'il a fallu faire un choix, et j'ai retiré deux chapitres pourtant déjà écrits :

* Kubernetes - The Easier Way (k8s-tew)
* k8e, Kubernetes Easy Engine

Pour être parfaitement honnête, je n'avais pas trouvé ces deux projets très enthousiasmants et ce n'est probablement pas une grande perte, même si j'ai toujours un peu de mal à "jeter" du travail déjà réalisé. 

Kamaji me fait aussi de l'œil. Il faudra voir si un autre chapitre passe à la trappe ou pas...

Dans tous les cas, leur sort final n'est pas encore déterminé, j'ai plusieurs idées.

## Markdown to PDF

Depuis le début, je me heurte à un problème en apparence anodin, mais finalement assez pénible : faire un joli PDF à partir d'un Markdown. 

J'ai essayé beaucoup de solutions (wkhtmltopdf, pandoc + xelatex) et rien n'est vraiment terrible... je n'avais pas réussi jusqu'à présent à faire quoique ce soit qui me convenait, avec des images correctes, des balises de codes, une font personnalisée et un support des emojis.

... jusqu'à ce que je tombe sur le projet [weasyprint.org](https://weasyprint.org/), véritable pépite pour transformer un HTML en PDF.

Ça m'a demandé pas mal d'adaptations de mon CSS actuel (qui était sympa pour le rendu HTML, mais ne marchait pas du tout avec weazyprint), mais le rendu est beaucoup plus satisfaisant.

Cette partie "construction d'un livre technique rédigé en markdown" sera d'ailleurs probablement open sourcée une fois le livre sorti.

## Prochaines étapes

Finir les trois chapitres manquants, dont la liste commence à se stabiliser. Sauf surprise de dernière minute, ça sera :

* kwok
* harvester (exemple avec Equinix metal)
* EKS et Karpenter

... Voire ajouter Kamaji (clastix), très similaire à k0smotron mais utilisant kubeadm (et la clusterAPI) au lieu de k0s (et la clusterAPI).

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
