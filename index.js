// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat(){
    return cats.push("Ralph");
}

function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat (){
    return cats.pop();
}

function destructivelyRemoveFirstCat (){
    return cats.shift();
}

function appendCat(){
    const cats2 = [...cats, "Broom"];
    return cats2;
}

function prependCat(){
    const cats3 = ["Arnold", ...cats];
    return cats3;
}

function removeLastCat (){
    return cats.slice(0, -1);
}

function removeFirstCat (){
    return cats.slice(1);
}
