function isPalindrome(str){
    let len = str.length;
    let mid = Math.floor(len/2);

    for (let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

function uniqueUnion(...agrs){
    return Array.from(new Set([].concat(...agrs)))
}

function seekAndDestroy(input, agr){
    for(let i = 0; i < input.length; i++){
        if (input[i]===agr){
            input.slice(i, 1)
        }
    }
    return input
}

function toSpinalCase(input){
    return input.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase()
}

function drop(){

}



