This functions allows to get result by a place id using [Google Maps Geocoder](https://developers.google.com/maps/documentation/javascript/geocoding).

## Firm

```tsx
const geocodeByPlaceId = (placeId: string): Promise<google.maps.GeocoderResult[]>;
```

## Usage

```js
import { geocodeByPlaceId } from '@eezyquote/react-google-places';

geocodeByPlaceId('ChIJeaZJB3y8yRIRTrJnKfTRWf4')
  .then(results => console.log(results))
  .catch(error => console.error(error));
```