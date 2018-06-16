var fs = require('fs');

function sayHello(name) {
  console.log('hello ' + name);
}

function CreateFile() {
  fs.appendFile('mynewfile1.txt', 'Hello content yolo!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
}

function ReadFile() {
  fs.readFile('mynewfile1.txt', 'utf8', function(err, data) {
    console.log(data);
    });
}

sayHello('yolo v0001');
CreateFile();
ReadFile();
