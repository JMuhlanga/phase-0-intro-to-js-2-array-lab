// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);

}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
    
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
    
}

function appendCat(name){
    return [...cats,name];
}

function prependCat(name){
    return [name,...cats];
}

function removeLastCat(){
    const copyCats = cats.slice(-1);
    return copyCats;
}

function removeFirstCat(){
    const copyCats = cats.slice(0);
    return copyCats;
}