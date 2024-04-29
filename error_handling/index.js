const fs = require('fs');

// Read JSON data from a file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file contents:', err);
    return;
  }
  console.log('File data:', data); //output data correct

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(json); //try to pass a diffrent variable instead of data

    // Console log the JSON data
    console.log('JSON data:', jsonData);
  } catch (err) {
    console.error('Error parsing JSON data:', err); //Error parsing JSON data: ReferenceError: json is not defined
  }
});