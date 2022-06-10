const express = require("express");
var bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.use("/public", express.static(__dirname + '/public'));

app.get('/',(req , res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post("/",(req , res) =>{
    let yourEmail = req.body.email;
    let passWord = req.body.password;
    let final = yourEmail + passWord;
    console.log(yourEmail);
    console.log(passWord);
    res.send("recieved your request!");
})


// app.post('/', function(req, res){
//     let data = req.body;
//     res.write(data.email);
//     res.write(data.password);
//     res.write("recieved your request!");
//     res.send();
//  });

app.listen(port , ()=>{
    console.log("started");
})




// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
