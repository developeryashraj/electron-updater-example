## Follow below steps to make updater working (Only windows)

1. `clone` or `download` this repo
1. Run `npm install`.
1. Do `npm start` to verify if every things is working properly.
1. Run `yarn add electron-builder --dev` only if required.
1. Now install npm serve globally by `yarn global add serve`
1. Create one seperate folder parallel to current folder where we will put over updated builds.
1. `serve` that folder. `serve FOLDER_NAME` or only `serve` if you are inside that folder already.
1. URL will be shown in command prompt where this folder is being serve. Change URL in `package.json` under **publish** if required. Also change it in `dev-app-update.yml`
1. If everything works, change version to `1.0.1` in `package.json` and prepare a build using `yarn dist`
1. Put 4 files from `dist` folder once build is complete in that new seperate (parallel) folder.
1. Now again change version to `1.0.0` and do `npm start` to open it in dev mode.
1. Click on **Check for update** button and check logs in command prompt or in dev tool as well.
