const people = [];

function addPerson() {
  const name = prompt("Enter the person's name:");
  const city = prompt("Enter the city:");
  const streetName = prompt("Enter the street name:");
  const streetNumber = parseInt(prompt("Enter the street number:"));

  const person = {
    name: name,
    address: {
      city: city,
      street: {
        name: streetName,
        number: streetNumber
      }
    }
  };

  people.push(person);
}

// Add a few people (you can adjust the number as needed)
addPerson();
addPerson();

// Process the people array (e.g., print their details)
for (const person of people) {
  console.log(`${person.name} lives in ${person.address.city} on ${person.address.street.name} ${person.address.street.number}`);
}
