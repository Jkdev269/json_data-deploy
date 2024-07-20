const { default: axios } = require('axios');
const { json } = require('body-parser');
const http=require('http')
const port=8080;
 const  server=http.createServer (async function(req,res){
    const userdata=await axios.get('https://jkdev269.github.io/json_data/')
    res.setHeader('content-type','application/Json')
// console.log(userdata.data.data)
res.end(JSON.stringify(userdata.data))
// res.end("run in forenten")
})
server.listen(port,()=>console.log("sever run"))