const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookie  = require('cookie-parser');

app.use(cookie());
app.get('/', (req, res) => {
let token = jwt.sign({email : "aitisamahmed24@gmail"}  , "sssssssskey" ); 
res.cookie("tokenname", token);
     res.send('Welcome');
     console.log(token);
     
     
});

app.get('/read' , (req , res)=>{


let data =  jwt.verify(req.cookies.tokenname  , "sssssssskey" );
res.send(data);
console.log(data);
  
   

})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});