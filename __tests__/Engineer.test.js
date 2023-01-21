// Import Engineer class with require()
const Engineer = require('../lib/Engineer')
// Test setting github account
// Assign github account to a new variable
// Instantiate the Employee class, passing an name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable

test("Export the github of the employee object to be equal to the value of the github variable", () => {
  const person = new Engineer("John", 1, "john@gmail.com", "John123");
  expect(person.github).toBe("John123");
});

// Test get role method
// Assign "Engineer" to a new role variable
// Instantiate the Employee class, passing an employee name and an id and an email and a github account name as auguments, to create an object and assign it to an new variable
// Export getRole() to return the role to be equal to the value of the role variable

test("test getRole Method", () => {
  const person = new Engineer("John", 1, "john@gmail.com", "John123");
  expect(person.getRole()).toBe("Engineer");
});

// Test get github method
// Assign github account to a new variable
// Instantiate the Employee class, passing an employee name and an id and an email and the github variable as auguments, to create an object and assign it to an new variable
// Expect getGithub() to return the github  name to be equal to the value of the github variable
test("", () => {
  const person = new Engineer("John", 1, "john@gmail.com", "John123");
  expect(person.getGithub()).toBe("John123");
});
