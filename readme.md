# To Start

- Run ```npm install```
- We do this to install all npm packages since the node_modules foler is deleted at the time of pushing the project to github since the node_modules folder is huge.

## Git Config

- Add your new remote by running ```git remote set-url --add origin ADD_NEW_URL_HERE```
- Remove the previous repo link by running: ```git remote set-url --delete origin https://github.com/NigelDcruz/webpack-starter.git```

## npm

- Define Entry point based on you project
-  Use ```--save``` if the library will be used as part of our final code, which we ship to the server. (Eg: Lodash)
- Make sure to save npm packages with ``` --save-dev ``` based on the package. (Eg: dev-server)

## Webpack

- To install ``` npm install webpack webpack-cli --save-dev```

## For Development

- Run ``` npm run start ```
- This will open your project in a new tab along with running the live server.


## For build

- Make sure to link the production ready js file. A random hash will be generated to the file so the name changes on every build.

- Run ``` npm run build-prod ```

