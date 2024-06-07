---
title: "12 premiers chapitres et première version du tooling de génération du livre"
description: "Avancement - 31 janvier 2024"
tags:
    - avancement du projet
date: "2024-01-31"
cover: "20-jours/makefile.png"
head:
    meta:
        - name: 'robots'
          content: 'noindex, follow'

---

## Liste des chapitres qui ont été écrits jusqu'à présent

![](https://geps.dev/progress/24)

* kind
* microk8s
* docker Desktop
* Rancher Desktop
* lima-vm avec Podman Desktop
* pulumi (exemple avec MKS d'OVHCloud)
* opentofu (exemple avec GKE de Google Cloud)
* kubeadm (exemple avec la CLI)
* kubeadm (exemple avec la ClusterConfiguration)
* k3s (exemple avec la CLI)
* Talos Linux
* Binaire par binaire

## Avancement du projet

Les premiers jours ont été très productifs.

D'abord, une liste de chapitres prévisionelle a été écrite, avec les outils qui me semblaient les plus prometteurs parmis la liste du tableur que j'avais initialement écrite le 11/01.

![](images/20-jours/01-31-chapitres.png)

Ensuite, un format a été choisi : le Markdown. J'ai l'habitude d'écrire du Markdown au kilomètre (notamment grâce au [blog](https://blog.zwindler.fr) et tous mes supports de conférence) et je suis donc efficace avec.

J'ai trouvé plusieurs références sur le web pour transformer des fichiers markdown en livre, notamment en ebook.

* [flogg.fr/ecrire-un-epub-en-markdown/](https://flogg.fr/ecrire-un-epub-en-markdown/)
* [github.com/sydasif/my-pandoc-book](https://github.com/sydasif/my-pandoc-book)
* [medium.com/@sydasif78/book-creation-with-pandoc-and-markdown-893c7d72cb35](https://medium.com/@sydasif78/book-creation-with-pandoc-and-markdown-893c7d72cb35)

Avec un petit Makefile, on a quelque chose de fonctionnel rapidement, même si pour l'instant ça reste "un peu moche". On fera mieux plus tard, pour l'instant je me concentre sur le contenu.

```Makefile
clean:
	rm -f ../50-nuances-de-kubernetes.html ../50-nuances-de-kubernetes.epub ../50-nuances-de-kubernetes.pdf

html: clean
	pandoc metadata.yaml *.md -o ../50-nuances-de-kubernetes.html --section-divs --self-contained

epub: clean
	pandoc metadata.yaml *.md -o ../50-nuances-de-kubernetes.epub

pdf: html
	wkhtmltopdf ../50-nuances-de-kubernetes.html ../50-nuances-de-kubernetes.pdf
```

J'ai déjà écrit 12 méthodes d'installer Kubernetes sur 50, en m'appuyant sur le travail que j'avais déjà effectué sur mon blog. Les prochains chapitres iront forcément moins vite, à mesure que je découvrirai des outils plus complexes / exotiques.
