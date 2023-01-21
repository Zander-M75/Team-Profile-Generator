// Import Employee class with require()
const Employee = require('../lib/Employee')
// Test instantiate Employee instance
test("testing functionality to create new employee", () => {
  // Instantiate the Employee class with new operator to create an object and assign it to an new variable
  // Expect the type of the variable to be the "object" data type
  const person = new Employee("John", 1, "john@company.com");
  expect(typeof (person)).toBe("object")
});

// Test setting name of an employee
test("test functionality of setting name", () => {
  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as an augument, to create an object and assign it to an new variable
  // Expect the value of the name property of the object to be equal to the value of the variable of the employee name
  const person = new Employee("John", 1, "john@company.com");
  expect(person.name).toBe("John")
});

// Test setting id of an employee
test("Test ID setting for employees", () => {
  // Assign a number as an id to a new variable for the employeee id
  // Instantiate the Employee class with an employee name of your choice and the id variable as input arguments to create an employee object and assign it to a new variable
  // Expect the id of the employe object to be equal to the value of the id variable
  const person = new Employee("John", 1, "john@company.com");
  expect(person.id).toBe(1)
});



// Test setting email of an employee
test("Test email setting for employees", () => {
  // Assign an email to a new variable
  // Instantiate the Employee class, passing a name and an id and the email variable as input arguments, to create an employee object and assign it to a new variable
  // Expect the email of the employee object to be equal to the value of the email variable
});

// Test get name method
test("test get name method", () => {
  // Assign the name of an employee to a new variable
  // Instantiate the Employee class, passing the variable of the employee name as input augument, to create an object and assign it to an new variable
  // Expect the getName method of the object to return the name to be equal to the value of the emplyee name variable
  const person = new Employee("John", 1, "john@company.com");
  expect(person.getName()).toBe("John")

});

// Test get id method
test("test id method", () => {
  // Assign an id of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and the id variable as auguments, to create an object and assign it to an new variable
  // Expect the getId method of the object to return the id to be equal to the value of the emplyee id variable
  const person = new Employee("John", 1, "john@company.com");
  expect(person.getID()).toBe(1)
});

// Test get email method
test("test get email method", () => {
  // Assign an email of an employee to a new variable
  // Instantiate the Employee class, passing an employee name and an id and the email variable as auguments, to create an object and assign it to an new variable
  // Expect the getEmail method of the object to return the email to be equal to the value of the emplyee email variable
  const person = new Employee("John", 1, "john@company.com");
  expect(person.getEmail()).toBe("john@company.com")
});

// Test get role method
test("test role method", () => {
  // Assign "Employee" to a new role variable
  // Instantiate the Employee class, passing an employee name and an id and an email as auguments, to create an object and assign it to an new variable
  // Expect getRole() to return the role to be equal to the value of the role variable
  const person = new Employee("John", 1, "john@company.com");
  expect(person.getRole()).toBe("Employee")
});
