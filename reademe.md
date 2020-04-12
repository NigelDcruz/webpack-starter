# To Start

- Run ```npm install```
- We do this to install all npm packages since the node_modules foler is deleted at the time of pushing the project to github since the node_modules folder is huge.

## npm

- Define Entry point based on you project
-  Use ```--save``` if the library will be used as part of our final code, which we ship to the server. (Eg: Lodash)
- Make sure to save npm packages with ``` --save-dev ``` based on the package. (Eg: dev-server)


## ES lint

- Url ```https://www.npmjs.com/package/eslint```
- Installation : ```npm i eslint --save-dev```
- Press ```ctrl + shift + p``` and press ```Create ESLint configuration```
- If you get an error saying:
 ```node_modules\.bin\eslint.cmd --init bash: node_modules.bineslint.cmd: command not found```
Run 
```./node_modules/.bin/eslint --init```
- "no-console": "error" To "no-console": "off" or "warn" to change settings in eslint

## Webpack

- To install ``` npm install webpack webpack-cli --save-dev```

## For Development

- Run ``` npm run start ```
- This will open your project in a new tab along with running the live server.


## For build

- Make sure to link the production ready js file. A random hash will be generated to the file so the name changes on every build.

- Run ``` npm run build-prod ```

