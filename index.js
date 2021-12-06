let express = require('express');
let bodyParser = require('body-parser');

var app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));


let newsdata = null
const axios = require('axios').default;



app.get('/', function(request, response){
    response.render('main', {newsdata : newsdata});
});

app.post('/', function(req,res){
    
    axios.get(`https://newsapi.org/v2/everything${req.body.keyword}/${req.body.date}`)
    .then(function(response){
        newsdata = response.data
        console.log(newsdata);
        
        res.redirect('/');
    })
    .catch(function(error){
        console.log(error);
        res.redirect('/');
    })
    
});