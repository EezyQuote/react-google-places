This functions allows to get results by an address using [Google Maps Geocoder](https://developers.google.com/maps/documentation/javascript/geocoding).

## Firm

```tsx
const geocodeByAddress = (address: string): Promise<google.maps.GeocoderResult[]>;
```

## Usage

```js
import { geocodeByAddress } from '@eezyquote/react-google-places';

geocodeByAddress('La penne-sur-huveaune, France')
  .then(results => console.log(results))
  .catch(error => console.error(error));
```