const express = require("express")
const app = express();
const path = require("path");


console.log(path.join(__dirname))

app.get('/',(req, res) =>{
res.send("hi welcome to the home page");
})

app.listen(8000, () => {
    console.log(`Server started on port`);
});
// app.use(express.static(path.join(__dirname)))

