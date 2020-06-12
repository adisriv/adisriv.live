# My Personal Website

[Link to My Website](https://adisriv.live/) created in React.

## Creating React App

1. Create an empty repository on github: `<repo-name>`
2. Then on your computer in terminal type: `npx create-react-app <repo-name>`, this will create a react app named `<repo-name>` in whichever directory you're on.
3. `cd <app-name>`
4. Next, create a git repository in the folder of the react app: `git init`
5. Add the empty repository you created in step 1 as a "remote" in your local git repository: `git remote add origin https://github.com/username/<repo-name>.git`

## How to Deploy

 1. `npm i gh-pages --save-dev` (--save-dev adds the installed package to your `package.json` file so that if anyone else clones your repo they will be able to retrieve all the needed packages for the app through `npm install`)
 2. Add some properties to your app's `package.json` file
			 1. At the top, somewhere under `"name"`, add `"homepage": "http://<username>.github.io/<repo-name>"`, the url for homepage in this case is your github pages link, but you can also add whichever link you want this app to be displayed at.
			 2. In the `scripts` property, add the following `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`
3. Then to generate a production build of your react app type `npm run deploy`
			1. Now this will push your production build to github under the `gh-pages` branch, and your app will be now accessible under the URL you provided in `"homepage"`
4. Then push your source code up to the `master` branch as this does not exist on github yet
			1. `git add .`
			2. `git commit -m "Your Message"`
			3. `git push origin master`
			4. Now this will create your `master` branch and push your code their.  

## Helpful Resources

[Creating React App](https://create-react-app.dev/docs/getting-started/)  

[Deploying React App to Github Pages](https://github.com/gitname/react-gh-pages)  

[Installing NPM Packages](https://www.npmjs.com/)

