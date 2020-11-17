const express = require('express')
const app = express()

let lines = [];
for (let i = 0; i <= 50; i++) {
  let description = '';
  if (i % 2 === 0){
    description = i + ' Soy Par!';  
  } else {
    description = i + ' Soy Impar!';  
  }
  lines.push(description);
}

const linesHTML = lines.map(line => `<p>${line}</p>`);

const soy = linesHTML.join('');

app.get('/',(req,res)=> res.send(soy))

app.listen(3000,()=> console.log('listening in port 3000'))
