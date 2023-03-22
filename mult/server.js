 const express = require('express');

//   const express = require('express')

  const multer = require('multer')

//   const upload = multer.upload({ dest : './uploads'})
 const app = express()
//  require('dotenv').config()
 const port = process.env.PORT || 5000

//  var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//         console.log(file.fieldname);
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
  var upload = multer({ dest: './uploads' })
 const cpupl = upload.fields([{name:'file1',maxCount:1},{name:'file2',maxCount:8}])


 
 

 app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
  });
  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    console.log('hey bro u there');
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
   
  })

  app.post("/uploadmultiple", upload.array('myFiles', 100),(req, res,next) => {
    const files = req.files
    if(!files){
        const error = new Error('PLease uplaod the file')
        error.httpStatusCode = 400 
        return next(error)

    }
    res.send(files);
    
  })
//  app.post('/',upload.single(),(req,res)=>{

//  })

 app.post("uploadany", cpupl, (req, res,next) => {
console.log("hey dudu");
const file1 = req.files['file1'][0]
const file2 = req.files['file2']
// const files = req.files
if( !file1 && !file2 ){
    const error = new Error("some error has occured")
    return next(error);

}
// res.send(files)
res.send(file1) && res.send(file2);
// console.log(req.files);
    // res.send(value);
    // req.files['myFile'][0]
    // console.log(files['myFile'][0]);
    // res.send(files['myFile'][0]);
    // res.send(files)

   
 });
 
 
app.post('/upload', upload.fields([
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 3 }
  ]), function (req, res) {
    const file1 = req.files['file1'][0];
    const file2 = req.files['file2'];
  
    console.log(file1);
    console.log(file2);
  
    res.send('Files uploaded successfully!');
  });
 app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))