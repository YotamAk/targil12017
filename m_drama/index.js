'use strict';

const data   = require('./data/dramas.json'),
      movies = data.drama.movies,
      series = data.drama.series;

class DramaVod    {

           getAllMovies() {
            return movies;
           }


           getAllUserFavorite(like){
            var favorites = [];
            for (let i in movies){
                if(movies[i].like == like)
                {
                    favorites.push(movies[i]);
                }   
            }
             for (let i in series){
                if(series[i].like == like)
                {
                    favorites.push(series[i]);
                }   
            }
            return favorites;
           }


           getFavoriteByYear(like,year){
            var favorites = [];
                for (let i in movies){
                    console.log(`like is: ${like} , year is ${year}`);
                    if(movies[i].like == like && movies[i].released >= Number(year)){
                            favorites.push(movies[i]);
                    }
                }
                for (let i in series){
                    console.log(`like is: ${like} , year is ${year}`);
                    if(series[i].like == like && series[i].released >= Number(year)){
                            favorites.push(series[i]);
                    }
                }
            return favorites;
           }
}


module.exports = () => {
    var dramaVod = new DramaVod();
    return dramaVod;
}