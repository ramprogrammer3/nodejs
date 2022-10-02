function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mul(a,b){
    return a * b;
}

module.exports = add;

exports = module.exports;
exports.sub = sub;
exports.mul = mul;