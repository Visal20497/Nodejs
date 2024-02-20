let prompt = require('prompt-sync')();

function add(a,b){
    return a + b;
}


function mul(a,b){
    return a*b
}

function subs(a,b) {
    return a - b;
}

function div(a,b){
    return a/b
}


module.exports = {add,mul,subs,div};
