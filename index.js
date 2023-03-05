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
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU Gerneral Public License v2.0",
        "GNU Lesser General Public liencese v2.1",
        "Mozilla Public License 2.0",
        "The Unilicense",
        "None",
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
  const licenseBadge = renderlicenseBadge(data.license);
  return `
  
  # ${title}   ${licenseBadge}
  
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

const renderlicenseBadge = (license) => {
  switch (license) {
    case "Apache 2.0":
      return `[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-blue)](https://www.apache.org/licenses/LICENSE-2.0)`;
      break;

    case "GNU General Public License v3.0":
      return `[![License: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-blue)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
      break;
    case "MIT License":
      return `[![License: MIT License](https://img.shields.io/badge/license-MIT-blue)](https://www.mit.edu/~amini/LICENSE.md)`;
      break;
    case "BSD 2-Clause Simplified License":
      return `[![License: BSD 2-Clause Simplified License](https://img.shields.io/badge/license-BSD%202--Clause%20Simplified%20License-blue)](https://opensource.org/license/bsd-2-clause/)`;
      break;
    case "BSD 3-Clause New or Revised License":
      return `[![License: BSD 3-Clause New or Revised License](https://img.shields.io/badge/license-BSD%203--Clause%20New%20or%20Revised%20License-blue)](https://choosealicense.com/licenses/bsd-3-clause/)`;
      break;
    case "Boost Sofetware License 1.0":
      return `[![License: Boost Sofetware License 1.0](https://img.shields.io/badge/license-Boost%20Sofetware%20License%201.0-blue)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Creative Commons Zero v1.0 Universal":
      return `[![License: Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0%20Universal-blue)](https://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "Eclipse Public License 2.0":
      return `[![License: Eclipse Public License 2.0](https://img.shields.io/badge/license-Eclipse%20Public%20License%202.0-blue)](https://www.eclipse.org/legal/epl-2.0/)`;
      break;
    case "GNU Affero General Public License v3.0":
      return `[![License: GNU Affero General Public License v3.0](https://img.shields.io/badge/license-GNU%20Affero%20General%20Public%20License%20v3.0-blue)](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
      break;
    case "GNU Gerneral Public License v2.0":
      return `[![License: GNU Gerneral Public License v2.0](https://img.shields.io/badge/license-GNU%20Gerneral%20Public%20License%20v2.0-blue)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case "GNU Lesser General Public liencese v2.1":
      return `[![License: GNU Lesser General Public liencese v2.1](https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public%20liencese%20v2.1-blue)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
      break;
    case "Mozilla Public License 2.0":
      return `[![License: Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)](https://www.mozilla.org/en-US/MPL/2.0/)`;
      break;
    case "The Unilicense":
      return `[![License: The Unilicense](https://img.shields.io/badge/license-The%20Unilicenselic%20License%202.0-blue)](https://unlicense.org/)`;
      break;
    case "None":
      return ``;
      break;
  }
};
