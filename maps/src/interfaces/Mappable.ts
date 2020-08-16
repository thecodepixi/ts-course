// instructions for what is able to be mapped/have a marker on the map
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
