## Install

```bash
npm install --save @eezyquote/react-google-places
```
or
```bash
yarn add @eezyquote/react-google-places
```

## Basic Usage

### Load Google Maps JavaScript API

First, generate an `apiKey` in order to use it to load [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/). Then, use it to load it in your HTML file, adding a script tag:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places" type="text/javascript" />
```

**Note:** if you pass down the `apiKey` prop to the component, you can skip loading the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/), as the component will inject that script on the page.

### Use the component

```tsx
import React from 'react';
import GooglePlacesAutocomplete from '@eezyquote/react-google-places';

const Component = () => <GooglePlacesAutocomplete />

export default Component;
```