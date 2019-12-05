const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Collin Pereira'
    })
})

app.get('/about',(req, res)=>{
    res.render('about', {
        title: 'about me',
        name : 'Collin Pereira'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        message: 'This is some helpful text'
    })
})

app.get('/weather',(req, res)=>{
    res.send({
        forecast: 'its 30 degrees outside ',
        locatoin : 'Verna'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})