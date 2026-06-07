import { fakerNL as faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomPhone = faker.phone.number();
const randomStreetAddr = faker.location.streetAddress();
const randomCity = faker.location.city();
const randomPostCode = faker.location.zipCode();
const randomIban = faker.finance.iban();
const randomBSN = faker.string.numeric({ length: 9, exclude: ['0'] }) ;
console.log(`${randomName} ${randomPhone}`);
console.log(`${randomStreetAddr}, ${randomPostCode}, ${randomCity}`);
console.log(`IBAN ${randomIban}`);
console.log(`Citizen Service Number (BSN) ${randomBSN}`);

//https://fakerjs.dev/guide/
//npm install @faker-js/faker --save-dev
