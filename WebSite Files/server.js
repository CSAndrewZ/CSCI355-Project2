const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req,res){
  
    res.writeHead(200, { 'Context-Type': 'text/html'} )
  
    fs.readFile('home.html', function(error, data){
        if(error){
          res.writeHead(404);
          res.write('Error: WebPage Not Found');
        }
        else{
          res.write(data);
        }
    
        res.end();
    })     
    
    

})

server.listen(port, function(error){
  if(error){
    console.log('Something Went Wrong', error);
  }
  else{
    console.log('Server is listening on port ' + port);
  }
})
