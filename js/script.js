let dirt = `<div>
                <img src="/images/forrest_ground_01_diff_1k.jpg">
            </div>`

let block = `<div>
                <img src="/images/metal3.jpg">
            </div>`


let tab1 = [[0,0,0],
            [0,0,0],
            [0,0,0]]
let startY = Math.max(tab1.length-1)
let startX = startY % 2 + 1
// console.log(startY)
// console.log(startX)
let depart = [startX,startY]

let finY = 2 // +1
let finX = 2 //+1
let fin = [finX,finY]

// function parcours(depart,fin){
//     console.log('saes')
//     let [x,y] = depart
//     let tabvisited = [...tab1]
//     while(x != finX || y != finY){
//         // console.log(x)
//         // console.log(y)
//         // console.log(tabvisited)
//         // console.log(tabvisited[y][x])
        
//         let etst = true
//         do {
//             tabvisited[y][x] = 1
//             //CA MARCHE PAS ICI A CAUSE DU NEWX ET DU NEWY EN GROS NEWX PRENDS LA VALEUR "0 2" ET DCP NEWY ET UNDEFINED 
//             console.log("sssss")
//             console.log(direction(x,y))
//             console.log("sssalut")
//             let [newx,newy] = direction(x,y)
//             console.log(newx)
//             console.log(newy)
//             if ((newx > finX || newx < 0) &&( newy > finY || newy < 0) ){
                
//             }
//             if (tabvisited[newx][newy] != 1) {
//                 etst = false
                
//             }
//             [x,y]=newx,newy
//         } while (etst);
//         console.log(x,y)
//     }
// }


// function direction(x,y) {
//     switch (Math.floor(Math.random(0,4)*4)) {
//         case 0:
//             x += 1
//             break;
//         case 1:
//             x -= 1
//             break;
//         case 2:
//             y += 1
//             break;
//         case 3:
//             y -= 1
//             break;
//         default:
//             break;
//     }
//     return [x,y]
// }

// parcours(depart,fin)

// // let [valeur1,valeur2] = direction(1,1)
// // console.log(valeur1)
// // console.log(valeur2)

function parcours(depart, fin) {
    let [x, y] = depart;
    let [finX, finY] = fin;
    let tabvisited = tab1.map(row => [...row]); // Copie de tab1 pour chaque passage

    while (x !== finX || y !== finY) {
        tabvisited[y][x] = 1; // Marquer comme visité

        let moved = false;
        for (let i = 0; i < 4; i++) { // Tenter jusqu'à 4 directions style +1 -1 +1 -1 gg
            let [newx, newy] = direction(x, y);
            if (newx >= 0 && newx < tab1[0].length && newy >= 0 && newy < tab1.length && tabvisited[newy][newx] !== 1) {
                [x, y] = [newx, newy];
                moved = true;
                break;
            }
        }

        if (!moved) {
            console.log("Bloqué, aucune direction valide !");
            return;
        }

        console.log(`Nouvelles coordonnées : (${x}, ${y})`);
    }

    console.log("Arrivé au point final !");
}

function direction(x, y) {
    switch (Math.floor(Math.random() * 4)) {
        case 0: return [x + 1, y]; // Droite
        case 1: return [x - 1, y]; // Gauche
        case 2: return [x, y + 1]; // Bas
        case 3: return [x, y - 1]; // Haut
    }
}

// Test
parcours([1, 2], [2, 2]);
console.log(tab1)

//Test de la fonction direction inutile 
// let [valeur1,valeur2] = direction(1,1)
// console.log(valeur1)
// console.log(valeur2)

