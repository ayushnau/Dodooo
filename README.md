# How to deploy backend to render.com
- In index.js file add  
 `const port = process.env.port || 4000`
- add start script in package.json file.
- create a new project in render.com 
- add environment variables in advanced setting.
-deploy.


# how to deploy react with frontend to netlify.

- In helper.js file the link to the link in which backend is deployed.
- in public folder create a file called _redirects 
    add /* /index.html 200
- build the react project  
    `npm run build`
- directly upload the build folder to the netilfy.