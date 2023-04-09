const cats = ["Milo", "Otis", "Garfield"];

function Array() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  };
  
function destructivelyAppendCat(name) {
    cats.push ("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift ("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop ("Garfield");
}

function destructivelyRemoveFirstCat(name) {
    cats.shift ("Milo");
}

function appendCat(name) {
    const catsUsingSlice = cats.slice()
        catsUsingSlice.push ("Broom");
    
    return catsUsingSlice;
}

function prependCat(name) {
    const catsUsingSlice = cats.slice()
        catsUsingSlice.unshift ("Arnold");
    
    return catsUsingSlice;
}

function removeLastCat(name) {
    const catsUsingSlice = cats.slice()
        catsUsingSlice.pop ("Garfield");
    
    return catsUsingSlice;
}

function removeFirstCat(name) {
    const catsUsingSlice = cats.slice()
        catsUsingSlice.shift ("Milo");
    
    return catsUsingSlice;
}