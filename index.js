// 1.
// import manager, engineer, intern files with require()
// import inquirer with require()
// import path with require()
// import fs with require()

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



// 2.
// import page-template.js from subfolder src with require and assign it to a variable to be called later to render html

const render = require('./src/page-template');

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
// create variable to hold the path to team.html using path lib join method

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

// 4.
// create an empty employee member array variable to store the employee members, manager, engineers, and interns
// create an empty employee id array to store the employee ids

const employeeMember = [];
const employeeId = [];


// 5.
// print user of usage

console.log('Please build your team');

// 6.
// make call to create manager function to start the main process

function begin() {
    getManager();
}

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function

function getManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the manager name?',

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the manager id?',

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the manager email?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the manager office number?',
            },
        ])

        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employeeMember.push(manager);
            employeeId.push(answers.id);
            createTeam();
        });
}

function createTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the employee?',
                choices: ['Engineer', 'Intern', 'I am done adding team members'],
            },
        ])
        .then((answers) => {
            if (answers.role === 'Engineer') {
                getEngineer();
            } else if (answers.role === 'Intern') {
                getIntern();
            } else {
                buildTeam();
            }
        });
}

function getEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineer name?',

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineer id?',

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineer email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer github username?',
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeMember.push(engineer);
            employeeId.push(answers.id);
            createTeam();
        });

}

function getIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern name?',

            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the intern id?',

            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the intern email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where did the intern go to school?',
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeMember.push(intern);
            employeeId.push(answers.id);
            createTeam();
        });

}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } else {
        fs.writeFileSync(outputPath, render(employeeMember), 'utf-8');
        console.log("Your team profile has been created! Please check the dist folder for the team.html file.")
    }
}

begin();




// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function

// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable



