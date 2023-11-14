function accauntingFilmsRate() {
    let numerals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
        'eight', 'ninth', 'tenth'
    ];
    a: for (let i = 1; i > 0; i++) {
        let numberOfFilm = prompt('What count of films did you watched? But not more then 10 films!', '').trim();
        if (numberOfFilm == null || numberOfFilm == 0) {
            alert("Don't be Lazzy! Writte count of Films !!!");
            continue a;
        } else if (numberOfFilm.length > 50) {
            alert('Please, dont writte more than 50 symbols');
            continue a;
        }
        numberOfFilm = +numberOfFilm;
        if (numberOfFilm !== 0 && numberOfFilm / 0 !== Infinity) {
            alert('The COUNT is a NUMERIC !!! STUPID user!!!');
            continue a;
        } else if (numberOfFilm > 10) {
            alert('You were told that Writte NOT More Than 10 Films!!!');
            continue a;
        } else {
            let qw = '',
                rt = '',
                personalMovieDB = {
                    'count': numberOfFilm,
                    'movies': {},
                    'actors': {},
                    'genres': [],
                    'privat': false
                };
            for (let g = 1; g <= numberOfFilm; g++) {
                b: for (let j = g; j > 0; j++) {
                    qw = prompt(`Last of the watched ${numerals[g-1]} film ?`).trim();
                    if (qw == null || qw == '') {
                        alert(`Dont be lazzy, let writte Last of the watched ${numerals[j-1]} film!`);
                        j--;
                        continue b;
                    } else if (qw.length > 50) {
                        alert('Please, dont writte more than 50 symbols');
                        j--;
                        continue b;
                    }
                    break;
                }
                c: for (let k = g; k > 0; k++) {
                    rt = +prompt(`What Rate do you give for the ${numerals[g-1]} film ?`).trim();
                    if (rt == null || rt == '') {
                        alert(`Dont be lazzy, let Give Rate of the Last watched ${numerals[k-1]} film!`);
                        k--;
                        continue c;
                    }
                    if (rt !== 0 && rt / 0 !== Infinity) {
                        alert('The RATE is a NUMERIC !!! STUPID user!!!');
                        k--;
                        continue c;
                    } else if (rt.length > 50) {
                        alert('Please, dont writte more than 50 symbols');
                        k--;
                        continue c;
                    }
                    break;
                }
                personalMovieDB.movies[qw] = rt;
            }
            console.log(personalMovieDB);
            break a;
        }
    }
}