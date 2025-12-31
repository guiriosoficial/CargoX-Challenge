# Challenge ![CargoX](https://raw.githubusercontent.com/guiriosoficial/cargox-challenge/main/public/logo.png)
This project is my challenge for a job at CargoX.  
CargoX is the largest freight marketplace in Brazil!

## The Challenge
The challenge is create a **VueJS** application usin de following API: [Mocky API](http://www.mocky.io/v2/5c7552e43100009c20c23450)
- They like _reactive views_,
- They like _components_,
- They like _responsive layouts_,
- They like _tests_.

The following layouts must been created:

**Desktop**
![tela](https://user-images.githubusercontent.com/234173/53424507-17f6ce00-39c2-11e9-945e-766d1961b4ac.png)

**Mobile**
![tela_responsiva](https://user-images.githubusercontent.com/234173/53424574-2e048e80-39c2-11e9-9972-2c613bf0de73.png)

#### Notes:
The API was moved to a new version (v3) of Mocky.io
- [ ] Old API: <http://www.mocky.io/v2/5c7552e43100009c20c23450>
- [x] New API: <https://run.mocky.io/v3/e56aec3b-c21f-44a6-887e-50133f4f5853>

A Second API was been created to test different cases
- [x] New API: <https://run.mocky.io/v3/d735b346-0b5a-42f9-8cf7-acfd1dde3f60>

A Second Screen was created to navigate between cases
- [x] New API: <https://run.mocky.io/v3/1e985b3b-8543-4406-b8df-dd65baac501c>


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
npm run lint:fix
```

## TODO
- Adjust Mocks
- Create Tests
- Fix Lint Ans Types ($router)
- Migrate to Composition API
- Migrate Pinia Store do Composition API
- Tuns Status Types in Enum

> **Status:** I Got the Job 🚚