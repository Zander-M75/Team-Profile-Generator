// create team function with team array passed in
const create_team_function = team => {
  let teamMembers = [];


  // create the manager html function with manager object passed in as input parameter
  // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
  const create_manager_html_function = manager => {
    console.log(manager);
    return `

        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.name}</div>
        <div class="card-body">
          <h5 class="card-title"> ${manager.getRole()}</h5>
          <li class="body-item">ID:${manager.id}</li>
          <li class="body-item">Email:${manager.email}</li>
          <li class="body-item">Office:${manager.officeNumber}</li>
        </div>

        `;
  };

  // create the html function for engineers with engineer object passed in as input parameter
  // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
  const create_engineer_html_function = engineer => {
    console.log(engineer);
    return `

        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.getName()}</div>
        <div class="card-body">
          <h5 class="card-title">${engineer.getRole()}</h5>
          <li class="body-item">ID:${engineer.getId()}</li>
          <li class="body-item">Email:${engineer.getEmail()}</li>
          <li class="body-item">Github:${engineer.getGithub()}</li>
        </div>

        `;
  };

  // create the html function for interns with intern object passed in as input parameter
  // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
  const create_intern_html_function = intern => {
    console.log(intern);
    return `

        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.getName()}</div>
        <div class="card-body">
          <h5 class="card-title">${intern.getRole()}</h5>
          <li class="body-item">ID:${intern.getId()}</li>
          <li class="body-item">Email:${intern.getEmail()}</li>
          <li class="body-item">School:${intern.getSchool()}</li>
        </div>



        `;
  };


  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {

      console.log("adding manager");
      teamMembers.push(create_manager_html_function(team[i]));

    } else if (team[i].getRole() === "Engineer") {

      console.log("adding engineer");
      teamMembers.push(create_engineer_html_function(team[i]));

    } else if (team[i].getRole() === "Intern") {

      console.log("adding intern");
      teamMembers.push(create_intern_html_function(team[i]));
    }

  }
  return teamMembers.join("");

}


function render(employee) {
  return `

        <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Team profile html page generated through node commands."/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <link rel="stylesheet" href="style.css">
    <div class="card">
    <div class="card-header">
      My Team
    </div>
    <div class="card-body">
      ${create_team_function(employee)}
    </div>
  </div>

    `;
};

module.exports = render;


