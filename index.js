const   express      = require('express'),
        mdrama = require('./m_drama'),
        bodyParser   = require('body-parser'),
        app          = express(),
        port         = process.env.PORT || 3000,
        data        = mdrama();


        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:true}));



        app.get('/getAllMovies/', (req,res) => {
            res.status(200).json(data.getAllMovies());
        });

        app.post('/getAllUserFavorite/', (req,res) => {
             res.status(200).json(data.getAllUserFavorite(req.body.like));
        });

        app.put('/getFavoriteByYear/:like/:year/', (req,res) => {
            res.status(200).json(data.getFavoriteByYear(req.params.like, req.params.year));
        });

        app.all('*', (req,res)=>{
            res.status(404).json({error:404});
        })
        



app.listen(port);
console.log(`listening on port ${port}`);