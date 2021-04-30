---
hero: true
footer: Made by Maksim Kostromin with ❤️ 🤘

---

# vuepress-docs-how-too [![GitHub actions](https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml)

Quick and fast rapid VuePress documentation development
[[toc]]

<!--
## Table of Content
* [VuePress docs](#vuepress-docs)
-->

[[toc]]

## Bootstrap new project

Start from documentation:

```bash
wget -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip | tar xvf -
# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
mv vuepress-docs-how-too my-new-project
cd my-new-project/
# find and replace: vuepress-docs-how-too -> my-new-project
# such as: BASE='/my-new-project/'
vi package.json
vi .vuepress/config.js
```

## VuePress docs

```bash
# npm i
npm run build
npx serve .vuepress/dist/
```

open http://localhost:5000/

Documentation is deployed on [GitHub Pages](https://daggerok.github.io/vuepress-docs-how-too/)
