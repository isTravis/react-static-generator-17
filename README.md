# React Static Generator 17

A project that uses React for the development and build process, but exports plain static HTML files on build. To be clear, the output HTML does not initialize React. This does not produce a React SPA, but rather a set of plain HTML files to be served statically. 

Auto-deployed from Master to demo at: [https://react-static-generator-17.netlify.com](https://react-static-generator-17.netlify.com)

## To Install

```
npm install
```

## To Run Dev Mode

```
npm start
```

## To Build and Run Production 

```
npm run prod
```

# Static Files

Static files such as images, robots.txt, manifest.json, etc are stored in the /static folder. The contents of this folder are copied to the /dist folder during the production build. The contents, not the folder itself, are copied, so that robots.txt, etc will be at the top-level of the deployed application.
 
# Config

## Routes
Be sure to set the routes that you want generated into static files by editing `webpack/staticPaths`.