let game = false;
let timer = 0;
let interval;

let displayTime = document.querySelector('#temps');

function startTimer() {
    interval = setInterval(() => {
        if (game) {
            timer++;
            displayTime.innerHTML = timer;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

game = true;
startTimer();
// game = false;
// stopTimer();

// NE PAS TOUCHER
const cristaux = 922;
const recettes = [2, 3, 4, 1, 1, 4, 3, 4, 2, 3, 1, 4, 1, 3, 3, 4, 4, 4, 1, 3, 3, 4, 2, 2, 1];
// NE PAS TOUCHER

function calcRecette(nbrRecette, cristaux) {
    let result
    switch (nbrRecette) {
        case 1 :
            result = cristaux * 2 - 50
            break;
        case 2 :
            result = cristaux + 40
            break;
        case 3 : 
            result = cristaux - 10
            break;
        case 4 : 
            result = cristaux * 3
            break;
    }
    return result
}
let somme = 0
recettes.forEach(e => {
    somme+=calcRecette(e, cristaux)
})
console.log(somme)