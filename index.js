// const express = require('express')
// const app = express()
// const port = 8000

// app.get('/', (req, res) => {
//   res.send('welcome to mean stack name = Gurwinder Singh ,U.R.N = 1905420')
// })

// app.get('/about', (req, res) => {
//   res.send('This is about page')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })



const express = require('express');
const fs = require('fs')
const path = require('path')
const app = express();
const port = 8000;
//serving a static file
app.use('/static',express.static('static'));
// app.use(express.urlencoded())

//set the view directory
app.set('views',path.join(__dirname,'views'));

//Endpoints
app.get("/",(req,res)=>{
    
    res.render('views/index.html');
});

// app.post("/",(req,res)=>{
//     res.render('index.pug');
// })


//start the server
app.listen(port,()=>{
    console.log(`the application started successfully at http://localhost:${port}`)
} );

