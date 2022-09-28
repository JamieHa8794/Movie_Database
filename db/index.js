const Sequelize = require('sequelize');
const {STRING, TEXT} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/movie_database');

const data = require('./data')

const Movie = db.define('movie', {
    title: {
        type: STRING
    },
    relasedYear: {
        type: STRING
    },
    runTime:{
        type: STRING
    },
    genre:{
        type: STRING
    },
    IMDBRating:{
        type: STRING
    },
    director:{
        type: STRING
    },
    star1:{
        type: STRING
    },
    star2:{
        type: STRING
    },
    star3:{
        type: STRING
    },
    star4:{
        type: STRING
    },
    overview:{
        type: TEXT
    },
    grossRevenue:{
        type: STRING
    }
})



const syncAndSeed = async () =>{
    try{
        await db.sync({force: true});
        await Promise.all(data.map(movie => {
            Movie.create({
            title: movie.Poster_Link,
            relasedYear: movie.Released_Year,
            runTime: movie.Runtime,
            genre: movie.Genre,
            IMDBRating: movie.IMDB_Rating,
            director: movie.Director,
            star1: movie.Star1,
            star2: movie.Star2,
            star3: movie.Star3,
            star4: movie.Star4,
            overview: movie.Overview,
            grossRevenue: movie.Gross
            })
        }))
       console.log('connected to db')     
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    db, 
    syncAndSeed,
    model : {
        Movie
    }
}