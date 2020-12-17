<p align="center">
  <a href="https://eezyquote.github.io/react-google-places" target="_blank">
    <img width="150"src="./docs/public/place.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@eezyquote/react-google-places">
    <img src="https://img.shields.io/npm/v/@eezyquote/react-google-places.svg"/>
    <img src="https://img.shields.io/npm/dm/@eezyquote/react-google-places.svg"/>
  </a>
  <a href="https://travis-ci.org/@eezyquote/react-google-place">
    <img src="https://img.shields.io/travis/@eezyquote/react-google-place/main.svg?logo=travis"/>
  </a>
  <a href="https://www.npmjs.com/package/@eezyquote/react-google-places">
    <img src="https://badgen.net/badge/bundlephobia/tree-shaking/green">
  </a>
</p>


# React Google Places

React component for easily use Google Places Autocomplete


## Getting started

Install the latest version:
```sh
npm install --save @eezyquote/react-google-places
  or
yarn add @eezyquote/react-google-places
```

Example:
```tsx
import React from 'react';
import GooglePlacesAutocomplete from '@eezyquote/react-google-places';

const Component = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey={process.env.GOOGLE_MAPS_API_KEY}
    />
  </div>
);

export default Component;
```


## Documentation

[**Read The Docs**](https://eezyquote.github.io/react-google-places)