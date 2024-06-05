---
title: "26 février 2024 - 45 jours après le début du projet"
description: "Avancement - 26 février 2024"
tags:
    - avancement du projet
date: "2024-02-26"
cover: "cover.png"
head:
    meta:
        - name: 'robots'
          content: 'noindex, follow'

---

## Troisième point d'avancement depuis le début du projet

![](https://geps.dev/progress/52)

La cadence ralentie un peu, ce qui était prévu puisqu'on arrive dans les outils plus complexes et/ou que je connais moins (voire pas du tout). Je suis quand même super content car on a dépassé la barre symbolique de la moitié du contenu du livre (sans compter toutes les relectures et remise en forme, bien entendu... 🙈)

Suite à une idée qu'on m'a soufflé quand j'ai montré le livre à une chanceuse, j'ajoute un élément au livre : un cartouche en fin de chaque chapitre dans la conclusion qui permet d'avoir un aperçu des forces et des faiblesses de la solution.

![](45-jours/cartouche.png)

J'ai aussi pas mal retravaillé la partie génération du livre, suite à la découverte d'un répo bien plus avancé que ce que j'avais trouvé jusqu'à présent.

* [github.com/wikiti/pandoc-book-template](https://github.com/wikiti/pandoc-book-template)

J'ai cependant du corriger quelques bugs pénibles comme la configuration d'ImageMagick qui est cassée sur les versions récentes d'Ubuntu, mais le rendu est plus sympa.

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

J'ai aussi ajouté la police Luciole que j'ajoute partout. Elle est réputée plus simple à lire pour les personnes ayant des difficultées à lire (personnes malvoyantes ou dyslexiques). 

Sur le papier, ce choix ne me coûte pas grand chose, mais dans la pratique, je me suis heurté à des problématiques pénibles : la police ne contient pas les emoji, ce qui me fait perdre tous les emojis à la compilation du PDF.

De même, tout ce qui est blocs de code n'a pas de wraping mais une barre de défilement, qui fonctionne en HTML mais pas en ebook / pdf. Ce sont des problèmes qui devront être réglés si je passe par un PDF pour l'édition du livre.
