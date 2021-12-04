const express= require('express'); 

const app= new express(); //app initializing



//middleware function init
//body parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//route <url the client will use and how will the 
//server respond to the url is requested> 
//http methods: get() post() put() delete()

app.get('/',(req,res)=> {
    //res.send(`<h1>Hello From my Express Framework...<h1>`);
    res.render(`index`); 

});

app.get('/random',(req,res)=> {
    res.render(`random`);
});



//start server.
const PORT= process.env.PORT||2000;
app.listen(PORT,()=> 
{console.log(`Server started on PORT NO. ${PORT}`)}); 