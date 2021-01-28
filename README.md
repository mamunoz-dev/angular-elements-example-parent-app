# Angular Elements Example (Parent App)

## Summary of the work done in this repo:

Create an Angular application using @nrwl/nx: 
```
npx create-nx-workspace
```

**Pull Request #1**: Get Micro Front-End script and show custom element inside parent: https://github.com/mamunoz-dev/angular-elements-example-parent-app/pull/1

## How to test it?

### Child App:

* Download Angular Elements Example (Child App): https://github.com/mamunoz-dev/angular-elements-example-child-app
* Install dependencies with ``npm install``
* Build the project with ``npm run build``
* Generate the Micro Front-End script with ``npm run package``
* Start the Nest.js app with ``npx nx serve api`` to serve the Micro Front-End script.

### Parent App:

* Download this repo.
* Install dependencies with ``npm install``
* Start the Angular app with ``npm run start``.
* Go to http://localhost:4200 and check that "Example works!" appears on your browser.
