This functions allows to get the latitude and longitude of a geocoder result.

## Firm

```tsx
const getLatLng = (result: google.maps.GeocoderResult): Promise<any>;
```

## Usage

```js
import { geocodeByAddress, getLatLng } from '@eezyquote/react-google-places';

geocodeByAddress('La penne-sur-huveaune, France')
  .then(results => getLatLng(results[0]))
  .then(({ lat, lng }) =>
    console.log('Successfully got latitude and longitude', { lat, lng })
  );
```