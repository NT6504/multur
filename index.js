const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'upload/'});

const app = express();

app.use(express.json());
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('this is a home route');
});

app.post("/user", upload.single("avatar"),(req,res)=>{
    console.log(req.file);
})

app.listen(3001,()=>{
    console.log('server is running at port 3001')
})