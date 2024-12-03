function mergeObjects() {
  const profile = {
    name: prompt("Enter the person's name:"),
    age: parseInt(prompt("Enter the person's age:")),
    address: {
      city: prompt("Enter the city:"),
      zipcode: prompt("Enter the zipcode:")
    }
  };

  const updates = {
    age: parseInt(prompt("Enter the updated age:")),
    address: {
      zipcode: prompt("Enter the updated zipcode:"),
      country: prompt("Enter the country:")
    }
  };

  const mergedObject = { ...profile, ...updates };

  console.log(mergedObject);
}

mergeObjects();
