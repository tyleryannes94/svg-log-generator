const inquirer = require ('inquirer');
const fs = require('fs');
const path = require('path');

function createSVG({ text, textColor, shape, shapeColor }) {
    let svgShape = '';
    const svgHeader = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    const svgFooter = '</svg>';

    // Define the SVG shape based on user input
    switch (shape) {
        case 'circle':
            svgShape = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            svgShape = `<polygon points="150,20 80,180 220,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            svgShape = `<rect x="75" y="50" width="150" height="150" fill="${shapeColor}" />`;
            break;
    }

    // Add text to the SVG
    const svgText = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="20">${text}</text>`;

    // Combine all SVG parts
    const svgContent = `${svgHeader}${svgShape}${svgText}${svgFooter}`;

    const filePath = path.join(__dirname, 'examples', 'logo.svg');

    // Write the SVG content to a file
    fs.writeFile(filePath, svgContent, (err) => {
      if (err) {
          console.error('Error writing file:', err);
      } else {
          console.log('Generated logo.svg in examples folder');
      }
  });
}

function promptUser() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 ? true : 'Maximum 3 characters allowed.'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):',
      },
    ]);
  }

  promptUser()
    .then(answers => {
        createSVG(answers);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });