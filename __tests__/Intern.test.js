// Import Engineer class with require()
const Intern = require("../lib/Intern");
// Test setting school
// Assign school to a new variable
// Instantiate the Employee class, passing an name and an id and an email and the school variable as auguments, to create an object and assign it to an new variable

test("test setting of school for interns", () => {
    const person = new Intern("Greg", 99, "Greg@gmail.com", "Rutgers");
    expect(person.school).toBe("Rutgers");
});

// Test get role method
// Assign "Intern" to a new role variable
// Instantiate the Employee class, passing an employee name and an id and an email and a school as auguments, to create an object and assign it to an new variable
// Export getRole() to return the role to be equal to the value of the role variable

test("test getRole Method", () => {
    const person = new Intern("Greg", 99, "Greg@gmail.com", "Rutgers");
    expect(person.getRole()).toBe("Intern");
});


