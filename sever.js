const express = require('express')
const app = express()

const PORT = 8000

const rapper = {
    '21 savage':{
        'age':29,
        'birthname':'Sheyaa Bin Abbraham-Joseph',
        'birthlocation':'London, England'
    },
    'chance the rapper':{
        'age':29,
        'birthname':'Chancellor Bennett',
        'birthlocation':'Chicago, Illonois'
    },
    'dylan':{
        'age':29,
        'birthname':'dylan',
        'birthlocation':'dylan'
    },
}
    



app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName',(request,response)=>{
    const rapperName  = (request.params.rapperName).toLowerCase()
    if(rapper[rapperName]){
        response.json(rapper[rapperName])
    }else{
        response.json(rapper['dylan'])
    }
    //response.json(rapper)
})

app.listen(PORT, ()=>{
    console.log(`The sever is running on post ${PORT}, you better go catch it`)
})