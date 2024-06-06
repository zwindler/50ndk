---
title: "29 chapitres - 2 mois après"
description: "Avancement - 10 mars 2024"
tags:
    - avancement du projet
date: "2024-03-10"
cover: "covers/50ndk-8.jpeg"
head:
    meta:
        - name: 'robots'
          content: 'noindex, follow'

---

## 29 chapitres écrits

![](https://geps.dev/progress/58)

Voici la liste des chapitres qui ont été écrits depuis la dernière fois :

* Vagrant (Alvistack)
* Kubespray
* vCluster
* Kubernetes - The Easier Way (k8s-tew)
* KubeMarine
* kURL
* Kosmos Kapsule

## Avancement du projet

La cadence ralentie un peu, ce qui était prévu puisqu'on arrive dans les outils plus complexes et/ou que je connais moins (voire pas du tout).

Je suis quand même super content car on a dépassé la barre symbolique de la moitié du contenu du livre (sans compter toutes les relectures et remise en forme, bien entendu... 🙈)

Suite à une idée qu'on m'a soufflé quand j'ai montré le livre, j'ajoute un élément au livre : un cartouche en fin de chaque chapitre qui sert de conclusion et qui permet d'avoir un aperçu des forces et des faiblesses de la solution.

![](2-mois/cartouche.png)

J'ai aussi pas mal retravaillé la partie génération du livre, suite à la découverte d'un répo bien plus avancé que ce que j'avais trouvé jusqu'à présent.

* [github.com/wikiti/pandoc-book-template](https://github.com/wikiti/pandoc-book-template)

J'ai cependant dû corriger quelques bugs pénibles comme la configuration d'ImageMagick qui est cassée sur les versions récentes d'Ubuntu, mais le rendu est plus sympa qu'avant donc ça valait le coup.

```
# Make sure you have Ghostscript ≥9.24:
    gs --version

# If yes, just remove this whole following section from /etc/ImageMagick-6/policy.xml:
    <!-- disable ghostscript format types -->
    <policy domain="coder" rights="none" pattern="PS" />
    <policy domain="coder" rights="none" pattern="PS2" />
    <policy domain="coder" rights="none" pattern="PS3" />
    <policy domain="coder" rights="none" pattern="EPS" />
    <policy domain="coder" rights="none" pattern="PDF" />
    <policy domain="coder" rights="none" pattern="XPS" />
```

J'ai aussi ajouté la [police Luciole](http://luciole-vision.com/), maintenant inclue dans tous mes side projects. Elle a été conçue dans un projet de recherche et est réputée plus simple à lire pour les personnes ayant des difficultées à lire (personnes malvoyantes ou dyslexiques). 

Sur le papier, ce choix ne me coûte pas grand chose. Dans la pratique, c'est moins clair que ça : je me suis heurté à des problématiques pénibles. La police ne contient pas les emojis, ce qui me fait perdre tous les emojis à la compilation du PDF (pas sur le support HTML).

De même, tout ce qui est blocs de code n'a pas de wraping mais une barre de défilement, qui fonctionne en HTML mais pas en ebook / pdf. Ce sont des problèmes qui devront être réglés si je passe par un PDF pour l'édition du livre.
