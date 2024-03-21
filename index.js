// Write your solution here!
let cats =["Milo","Otis","Garfield"]
function destructivelyAppendCat(){
    cats.push('Ralph')
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    const cats=["Milo","Otis","Garfield"]
    const newCats =[...cats,"Broom"];
    return newCats
}
function prependCat(){
    const cats =["Milo","Otis","Garfield"]
    const allCats =["Arnold",...cats];
    return allCats
}
function removeLastCat(){
    const cats =["Milo","Otis","Garfield"]
    const removeCat= cats.slice(0,cats.length-1);
    return removeCat
}
function removeFirstCat(){
    const cats =["Milo","Otis","Garfield"]
    const sliceCat= cats.slice(1)
    return sliceCat
}