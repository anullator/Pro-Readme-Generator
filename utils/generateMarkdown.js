// Create a function that returns a license badge based on which license is passed in
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

// Get the current year
function getYear() {
  const currDate = new Date();
  const year = currDate.getFullYear();
  return year;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  const licenseContent = {
    'Apache 2.0': 
        `Copyright ${getYear()} ${username}\n\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and limitations under the License.`,
    'MIT': 
        `Copyright ${getYear()} ${username}\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
    'GNU GPL v3': 
        `Copyright (C) ${getYear()} ${username}\n\nThis program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version 3 of the License, or (at your option) any later version.\n\nThis program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    'CC0 1.0': 
        `Copyright (C) ${getYear()} ${username}\n\nThe person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.\n\nYou can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.`,
    'Eclipse Public License 1.0': 
        `Copyright (C) ${getYear()} ${username}\n\nTHE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT’S ACCEPTANCE OF THIS AGREEMENT.`,
  }
  return license ? licenseContent[license] : '';
}

// Create function to dynamically render table of contents based on the names in the answers sections
function renderTableOfContents(data) {
  let contentsMd = '';

  // adds table contents for each section added by the prompts
  contentsMd+= `- [Description](#description)\n`;
  contentsMd+= `- [Installation](#installation)\n`;
  contentsMd+= `- [Usage](#usage)\n`;
  data.credits ? contentsMd+= `- [Credits](#credits)\n`: '';
  contentsMd+= `- [License](#license)\n`;
  data.features ? contentsMd+= `- [Features](#features)\n`: '';
  contentsMd+= `- [How To Contribute](#how-to-contribute)\n`;
  data.tests ? contentsMd+= `- [Tests](#tests)\n` : '';
  data.badges ? contentsMd+= `- [Badges](#badges)\n`: '';
  contentsMd+= `- [Questions](#questions)`;

  return contentsMd;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  let tableContents = '';
    data.tableContents === 'Yes' ? tableContents = renderTableOfContents(data) : '';

  return `# ${data.title}
    \n${renderLicenseBadge(data.license)}
    \n## Description
    \n${data.description}
    ${tableContents ? 
    `\n## Table of Contents
    \n${tableContents}\n` : ''
  }\n## Installation
    \n${data.installation}
    \n## Usage
    \n${data.usage}
    \nHere's a quick demo of the application in action: [ReadMe Generator Demo](https://drive.google.com/file/d/1mv0qmzdQmgBKFIud7W1fbwGfi72m12v8/view)
    ${data.credits ? // adds credits section if it exists
      `\n## Credits
      \n${data.credits}\n` : ''
    }\n## License
    \n${renderLicenseSection(data.license, data.githubUsername)}
    ${data.features ? // adds features section if it exists
    `\n ## Features
    \n${data.features}\n` : ''
    }${data.contribute ? // adds contribution instructions section if it exists
    `\n## How to Contribute
    \n${data.contribute}\n` : ''
    }${data.tests ? // adds tests section if it exists
    `\n## Tests
    \n${data.tests}\n` : ''
    }${data.badges ? // adds badges section if it exists
    `\n## Badges
    \n${data.badges}\n\nTODO: create a checkbox for badges so I can dynamically add and render any applicable badges\n\n//  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)\n\n// Check out the badges hosted by [shields.io](https://shields.io/).\n` : ''
    }\n## Questions
    \n[${data.githubUsername}](https://github.com/${data.githubUsername})
    \n${data.email}
    \n${data.contact}`;
}

module.exports = generateMarkdown;
