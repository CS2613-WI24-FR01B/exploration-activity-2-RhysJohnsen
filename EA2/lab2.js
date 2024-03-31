const isFactorial = function(input){
    if(input < 0)
        return -1;
    var toMult = 0;
    var toCheck = 1;
    while(toCheck < input){
        toMult++;
        toCheck = toCheck * toMult;
    };
    if(toCheck == input)
        return toMult;
    else
        return 0;
};
module.exports = isFactorial
isFactorial(-1)