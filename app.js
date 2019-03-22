//Q1

console.log('Hello World');

//Q2

const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//Q3

const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, function(err, data){
  if(err){
    console.error(err);
  }
  console.log(data.toString());
});

//Q3_e

fs.readFile('test.txt', 'utf8', function(err,data){
  if(err){
    console.error(err);
  }
  console.log(data);
})

//Q3_f way 1

const data = fs.readFileSync(fileName);
console.log(data.toString());

//Q3_f way 2

const data1 = fs.readFileSync('test.txt', 'utf8');
console.log(data1);
