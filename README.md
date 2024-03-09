# Country Finder App

## Requirements

[www.restcountries.com](https://restcountries.com) Get information about countries via a RESTful API.

Libraries (required): React js, Redux, Redux-saga

Instructions: (demo - ws application).

1.  Write a promise which should emit an event message every 15 seconds (similar to a message from a
    web socket), the output should be countries (from this API) that start with the same letter in the
    alphabetical order (a-z)..

2.  Write a redux-saga eventChannel function for the event message and pass the message to redux
    store.

3.  Store the data (validation: check if the data already exists in the state).

4.  Create a sidebar component:

    4.1. Alphabetical sidebar navigation (only for countries that exist in the list).

    4.2. Clicking on a letter should display all the countries that start with the same letter in a list next to
    the sidebar.

    4.3. Advantage: add search country input.

5.  Create a list component:

    5.1. Clicking on the country name from the list should display the country’s details in the “Country
    Details” component (detailed below).

6.  Create a “Country Details” component:

    6.1. Create a title, use Country.name.

    6.2. Create the below view :

        |-----------------------------------|
        | Capital    | Country.capital      |
        | Population | Country.population   |
        | alpha2Code | Country.alpha2Code   |
        | Flag       | Country.flag (image) |
        |-----------------------------------|

7.  Place a “back” button in the top corner (right || left) show the button when it is possible to go back.

```
● Use CSS / SCSS / styled-component, design it yourself. (Advantage: add  media queries).

● Use Modern JS syntax (Advantage: TS).

● Use saga, function generators.

● Use github / gitlab / other
```

## Screenshots

![animated gif](screenshots/animation.gif?raw=true "Animation")

## Tech/framework used

- [ReactJS](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation

**Running Locally**

git, npm and node softwares should be installed before moving on

```bash
git clone https://github.com/dimakol/react-country-finder-app.git
cd react-country-finder-app
npm install
npm run dev
```

**Building for production**

```bash
npm run build
```

## Deployed to Github pages

https://dimakol.github.io/react-country-finder-app/

## License

(The MIT License)

Copyright © 2024 Dima Kolyas
