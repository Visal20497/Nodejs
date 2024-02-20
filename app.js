const fileOperations = require('./Main.js');

const fileName = 'data.json';

fileOperations.update(fileName);
fileOperations.clear(fileName); 
fileOperations.reUpdate(fileName);
fileOperations.deleteFile(fileName); 
