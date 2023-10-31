let numberOfFilm = +prompt('What number of films did you watched?', ''),
    lastFilm1 = prompt('One of last watched film?'),
    rate1 = +prompt('What Rate do you give for it?'),
    lastFilm2 = prompt('One of last watched film?'),
    rate2 = +prompt('What Rate do you give for it?'),

    personalMovieDB = {

        'count': numberOfFilm,
        'movies': {},
        'actors': {},
        'genres': [],
        'privat': false
    };
    personalMovieDB.movies[lastFilm1] = rate1;
    personalMovieDB.movies[lastFilm2] = rate2; 
    
console.log(personalMovieDB);