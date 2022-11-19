/* const express = require('express');
const mysql = require('mysql');
const app = express();


const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'reservascanchas',
});

connection.connect(error =>{
    if(error) throw error;
    console.log('Database server running!');
});




app.use(require('./routes'));

app.listen(4000, (req, res) => {
    console.log('Listening on port http://localhost:4000')
})

 */