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
let startX = startY % 2 
console.log(startY)
console.log(startX)
let depart = [startX,startY]

let finY = 2 // +1
let finX = 2 //+1
let fin = [finX,finY]

function parcours(depart,fin){
    console.log('saes')
    let [x,y] = depart
    let tabvisited = [...tab1]
    
    while(x != finX || y != finY){
        console.log(x)
        console.log(y)
        console.log(tabvisited)
        tabvisited[y][x] = 1
        console.log(tabvisited[y][x])
        let etst = true
        do {
            let newx,newy = direction(x,y)
            if ((newx > finX || newx < 0) &&( newy > finY || newy < 0) )
            if (tabvisited[newx][newy] != 1) {
                etst = false
            }
        } while (etst);
         
    }
}


function direction(x,y) {
    switch (Math.floor(Math.random(0,4)*4)) {
        case 0:
            x += 1
            break;
        case 1:
            x -= 1
            break;
        case 2:
            y += 1
            break;
        case 3:
            y -= 1
            break;
        default:
            break;
    }
    return x,y
}

parcours(depart,fin)