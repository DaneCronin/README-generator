
// Function to generate markdown for README
function generateMarkdown(data) {
  
// Section that adds License Badge
 // and adds a link to more information about the license in the 'license' section
 let badgeChoice = `${data.license}`;
 let licenseLink = '';

 if (badgeChoice === 'GNU GPLv3') {
  badgeChoice = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
};

if (badgeChoice === 'Mozilla Public License 2.0') {
  badgeChoice = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
  licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
};

if (badgeChoice === 'Apache 2.0 License') {
  badgeChoice = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
};

 if (badgeChoice === 'MIT License') {
   badgeChoice = 'https://img.shields.io/badge/License-MIT-yellow.svg';
   licenseLink = 'https://choosealicense.com/licenses/mit/';
 };

 if (badgeChoice === 'The Unlicense') {
   badgeChoice = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
   licenseLink = 'https://choosealicense.com/licenses/unlicense/';
 };


  return ` 
  # ${data.title}
  ![badge](${badgeChoice})

  ## Table of Contents:
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions?](#questions)

  ## Description
   ${data.description}

  ## Installation
  *Steps required to install project and how to get application running*
  ${data.installation}

  ## Usage
  *Instructions and examples for use:*
  ${data.usage}

  ## Contributing
  *Please follow these guidelines if you would like to contribute:*
  ${data.contributing}

  ## Tests
  *Tests for application and how to run them:*
  ${data.tests}

  ## License
  
  ${data.license}

  For more information go to: [${data.license}](${licenseLink})

  ## Questions?

  *For any questions, please contact me through the information below:*
 
  GitHub: [${data.userName}](https://github.com/${data.userName})

  Email: ${data.email}

  Link to repo on GitHub: ${data.repo}

`;
};

module.exports = generateMarkdown;
