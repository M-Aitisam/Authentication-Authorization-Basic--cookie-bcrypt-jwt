const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// salt is a random string

// // Like  Encrypt A Pssword hash a password 
// app.get('/', (req, res) => {
// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash("password", salt, (err, hash) => {
//         console.log(hash);  //  that asnwer string is password
//         // console.log(salt);
//     })
// })
// });

// To  Decrypt Password means you  can compare the Password
// app.get("/", (req, res)=>{
//     bcrypt.compare( "password","$2b$10$SVmCl7bwyAEscosnoSFeE.bgzn0GEaiVRsh3A1Nv2kJRGr2GjSFWO" , (err, result)=>{
       
//         res.send("Chal  rha ha");
// console.log(result);

//     })
// })
// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });