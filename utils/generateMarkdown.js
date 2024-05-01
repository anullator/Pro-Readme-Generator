// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges = {
        'Apache 2.0': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        'MIT': `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        'GNU GPL v3': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        'CC0 1.0': `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`,
        'Eclipse Public License 1.0': `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
    }
    return license ? badges[license] : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create function to dynamically render table of contents based on the names in the answers sections
function renderTableOfContents(data) {
  console.log(data);
  let contentsMd = '';
  if (data.description) {
    contentsMd+= `- [Description](#description)\n`;
  }
  if (data.installation) {
    contentsMd+= `- [Installation](#installation)\n`;
  }
  if (data.usage) {
    contentsMd+= `- [Usage](#usage)\n`;
  }
  if (data.credits) {
    contentsMd+= `- [Credits](#credits)\n`;
  }
  if (data.license) {
    contentsMd+= `- [License](#license)\n`;
  }
  if (data.badges) {
    contentsMd+= `- [Badges](#badges)\n`;
  }
  if (data.features) {
    contentsMd+= `- [Features](#features)\n`;
  }
  if (data['how-to-contribute']) {
    contentsMd+= `- [How To Contribute](#how-to-contribute)\n`;
  }
  if (data.tests) {
    contentsMd+= `- [Tests](#tests)\n`;
  }
  return contentsMd;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let tableContents = renderTableOfContents(data);
    if (tableContents) {
      tableContents = `## Table of Contents\n\n${tableContents}`;
    }

  return `# ${data.title}
    \n## Description
    \n${data.description}
    \n${tableContents}
    \n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
//    Provide instructions and examples for use. Include screenshots as needed.
    
//    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:
    
//    ![alt text](assets/images/screenshot.png)
    
//    This is the link to the deployed webpage: _webpage url_
    
    \n## Credits
    \n${data.credits}
    
//    List your collaborators, if any, with links to their GitHub profiles.
    
//    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
//    If you followed tutorials, include links to those here as well.
    
    \n## License
    \n${data.license}

    //TODO: create array of license markdown for each license
    
//    MIT License
    
 //   Copyright (c) 2024 Dany Goodwin
    
//    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
//    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
//    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    
    \n## Badges
    \n${data.badges}

    TODO: create a checkbox for badges so I can dynamically add and render any applicable badges
    
//    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
//    Badges aren't necessary, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    \n ## Features
    \n${data.features}
    \n## How to Contribute
    \n${data.contribute}
//    If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    \n## Tests
    \n${data.tests}
    
//    Go the extra mile and write tests for your application. Then provide examples on how to run them here.{
    \n## Questions
    \n${data.questions}
`;
}

module.exports = generateMarkdown;
