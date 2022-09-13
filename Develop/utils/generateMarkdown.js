// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
   ${data.table_of_contents}

  ## Description
   ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  
  ${data.license}

  ## Questions?

  For any questions, please contact me with the information below:
 
  GitHub User: ${data.username}
  Email: ${data.email}
  Link to repo on GitHub: ${data.repo}

`;
};

module.exports = generateMarkdown;
