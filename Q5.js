//Question 5
const http =require('http');

http.createServer(function(req,res){
  res.setHeader('Content-Type', 'text/html');

switch (req.method) {
  case 'GET':
    res.write('<h1>Hello World</h1>');
    res.end();
    break;

  case 'POST':
    req.on('data', function(data){
      res.write('<h1>Hello' + data + '</h1>');
      res.end();
    });
    break;
  }
}).listen(3000, function(err){
  console.log('Server is listening to port 3000');
});
