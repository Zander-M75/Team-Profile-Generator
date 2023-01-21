// Import Engineer class with require()
const Manager = require("../lib/Manager");



test("test setting office number", () => {
    const person = new Manager("Sara", 999, "sara@gmail.com", 123);
    expect(person.officeNumber).toBe(123);
});

// Test get role method
// Assign "Manager" to a new role variable
// Instantiate the Employee class, passing an employee name and an id and an email and office number name as auguments, to create an object and assign it to an new variable
// Export getRole() to return the role to be equal to the value of the role variable

test("test getRole Method", () => {
    const person = new Manager("Sara", 999, "sara@gmail.com", "123");
    expect(person.getRole()).toBe("Manager");
});

