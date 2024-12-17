const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello Aarya! how are you!!!!! ')
})
app.listen(4000,'0.0.0.0',()=>{
    console.log('aarya  connected server')
})
