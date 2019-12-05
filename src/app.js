const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars enfine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setuo static directory to serve
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
        message: 'This is some helpful text',
        title: 'Help',
        name: 'Collin Pereira'
    })
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address'
        })
    }
    res.send({
        forecast: 'its 30 degrees outside ',
        locatoin : req.query.address
    })
})

app.get('/products',(req, res)=>{
    if(!req.query.search){
       return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*',(req, res)=>{
    res.render('error404',{
        title: '404',
        error: 'Help article not found',
        name : 'Collin Pereira'
    })
})

app.get('*',(req, res)=>{
    res.render('error404',{
        title : '404',
        error: 'Page not Found',
        name : 'Collin Pereira'
    })
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})