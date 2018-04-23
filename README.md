# Personal Site

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3333
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Publishing

Windows

``` bash
# generate static files
$ npm run generate

# copy dist files into folder outside the repo
$ xcopy /I /E "./dist" "../nickardson.github.io.dist"

# move to the 'release' master branch
$ git checkout master

# copy dist files back in
$ xcopy /I /E "../nickardson.github.io.dist" "."

# commit, push, and return to dev
$ git add -A
$ git commit -m "Update from 967ecb85818310f0728f0adde9570705dd446d38"
$ git push origin master
$ git checkout dev
```
