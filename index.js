// Requirements
const inquirer = require("inquirer");
const fs = require("fs");
const { Console } = require("console");

// Code

// Question Code

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please enter a project description.",
      name: "description",
    },
    {
      type: "input",
      message: "Please enter the installation instructions.",
      name: "installInstructions",
    },
    {
      type: "input",
      message: "Please enter the usage infromation.",
      name: "usageInformation",
    },
    {
      type: "input",
      message: "Please enter the project contributors.",
      name: "contributions",
    },
    {
      type: "input",
      message: "Please enter the test instructions.",
      name: "testInstructions",
    },
    {
      type: "list",
      message: "Please pick a license.",
      name: "license",
      choices: [
        "Apache 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause Simplified License",
        "BSD 3-Clause New or Revised License",
        "Boost Sofetware License 1.0",
        "creative Commons Zero v1.0 Universal",
        " Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU Gerneral Public License v2.0",
        "GNU Lesser General Public liencese v2.1",
        "Mozilla Public License 2.0",
        "The Unilicense",
      ],
    },

    {
      type: "input",
      message: "What is your GitHub username?",
      name: "userName",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((data) => {
    fs.writeFile("../README.md", createFile(data), (error) => {
      error ? console.log("error") : console.log("Creating your file now.");
    });
  });

// Create README file function

function createFile(data) {
  const {
    title,
    description,
    installInstructions,
    usageInformation,
    contributions,
    testInstructions,
    license,
    userName,
    email,
  } = data;

  return `
  
  # ${title}   
  
  <a name="description"></a>
  ## Description

  ${description}


  #Table of Contents

  [Installation Information](#installInstructions)  

  [Usage Infromation](#usageInformation)  

  [Contributions Information](#contributions)  

  [Test Information](#testInstructions)  

  [License Information](#license)  

  [Contact Information](#contactMe)  

  <a name="installinstructions"></a>
  ## Installation
  ${installInstructions}






  <a name="usage"></a>
  ## Usage  
  ${usageInformation}






  <a name="contributions"></a>
  ## Contributors  
  ${contributions}






  <a name="testInstructions"></a>
  ## Test Information  
  ${testInstructions}






  <a name="license"></a>
  ## License Information  

  This project uses ${license}.






  <a name="contactMe"></a>
  ## Question or Comments?  

  Please reach out with any questions or concerns.  

  Github Username: ${userName}  
  Email: ${email}
 `;
}

// License Information Function
