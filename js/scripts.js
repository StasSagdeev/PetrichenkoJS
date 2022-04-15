"use strict";
alert(`Ответ должен быть в виде числа
 и 
 не должен быть пустым значением `)
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remembarMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            alert(`Ответ не должен быть пустой строкой
               или привышать больше 50-ти знаков`)
            i--;
        }
    };
}

remembarMyFilms();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function personalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    };
}

personalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {

        const b = prompt(`Ваш любимый жанр под номером ${i+1}`),
            a = i;
        if (b != null && b != '' && b.length < 50) {
            personalMovieDB.genres[a] = b;
        } else {
            alert(`Ответ не должен быть пустой строкой
               или привышать больше 50-ти знаков`)
            i--;
        }
    };
}

writeYourGenres();