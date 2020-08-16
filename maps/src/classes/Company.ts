import faker from 'faker';
import { Mappable } from '../interfaces/Mappable';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPhrase}</h3>
    <h3>Lat: ${this.location.lat}</h3>
    <h3>Lng: ${this.location.lng}</h3>
    </div>
    `;
  }
}
