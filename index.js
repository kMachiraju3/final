let express = require('express');
let bodyParser = require('body-parser');
let newsdata = null
const axios = require('axios').default;
var app= express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use( express.static( "public" ) );


app.get('/', function(request, response){
    response.render('main', {newsdata : newsdata});
});

app.post('/', function(req,res){
    
   axios.get(`https://newsapi.org/v2/everything?q=${req.body.keyword}&from=${req.body.date}&apikey=1d495c7b5c89457c8760dc87f4da8a1f
   `)
   .then(function(response){

       
       newsdata = response.data;      
        console.log(newsdata);
               
        res.redirect('/');
   })
   .catch(function(error){
       console.log(error);
       res.redirect('/');
   })
});





app.listen(3000, function(){
    console.log('App is running on port 3000!')
})