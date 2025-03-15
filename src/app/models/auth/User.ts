export interface User{ 
    id: number;
    email: string;
    username: string;
    password: string;
    name: Name;
    address: Address;
    phone: string;
}

interface Name {
  first: string;
  last: string;
}

interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: GeoLocation;
}

interface GeoLocation {
  lat: string;
  long: string;
}