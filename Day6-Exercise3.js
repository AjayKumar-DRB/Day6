class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    // Method to display details of the person
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log("Address:");
      console.log(`\tStreet: ${this.address.street}`);
      console.log(`\tCity: ${this.address.city}`);
      console.log(`\tPin Code: ${this.address.pinCode}`);
    }
}
  
const person1 = new Person("Ajay Kumar", 25, 
    {
    street: "ACB Street",
    city: "Chennai",
    pinCode: "600028",
    });

person1.displayDetails();
