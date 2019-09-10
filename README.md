# vuepress-docs-how-too
Quick and fast rapid VuePress documentation development [![Build Status](https://travis-ci.org/daggerok/vuepress-docs-how-too.svg?branch=master)](https://travis-ci.org/daggerok/vuepress-docs-how-too)

[[toc]]

<!--
## Table of Content
* [VuePress docs](#vuepress-docs)
-->

## Bootstrap new project

Start from documentation:

```bash
wget -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip | tar xvf -
# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
mv vuepress-docs-how-too my-new-project
cd my-new-project/
# BASE_HREF'/my-new-project/'
vi package.json
vi .vuepress/config.js
# git init
# ...
```

## VuePress docs

```bash
# npm i
npm run build
npx serve .vuepress/dist/
```

open http://localhost:5000/

Documentation is deployed on [GitHub Pages](https://daggerok.github.io/vuepress-docs-how-too/)
