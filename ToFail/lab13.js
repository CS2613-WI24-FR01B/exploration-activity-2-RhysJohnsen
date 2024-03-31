capitals = function(input){
    toReturn = true;
    if(input.length < 1){
        toReturn = false
    }
    if(toReturn){
        arr = input.split(" ");
        arr.forEach(element => {
            if(element[0] == element[0].toLowerCase()){
                toReturn = true;
            }
        });
    }
    return toReturn
};

single = function(input){
    arr = input.split(" ")
    if(arr.length >= 3 || arr.length <= 1){
        return false
    }
    else{
        return true
    }
}

endStart = function(input){
    arr = input.split(" ")
    toReturn = true
    if(input.length < 1){
        return false
    }
    for(j = 0; j < arr.length - 1; j++){
        if(arr[j][arr[j].length - 1].toLowerCase() != arr[j + 1][0].toLowerCase()){
            toReturn = false
        }
    }
    return toReturn
}

filterFunc = function(strs){
    toSplice = strs.slice()
    for(i = 0; i < strs.length; i++){
        if(!capitals(strs[i])){
            toSplice.splice(i, 1)
        }
    }
    strs = toSplice.slice()
    for(i = 0; i < strs.length; i++){
        if(!single(strs[i])){
            toSplice.splice(i, 1)
        }
    }
    strs = toSplice.slice()
    for(i = 0; i < strs.length; i++){
        if(!endStart(strs[i])){
            toSplice.splice(i, 1)
        }
    }
    return toSplice
}

begin = function(){
    const tests = ["Test Test", "This is a test", "This Is A Test", "Catherine Elaine", "Catherine Elaine Guil", "", "Does this pass?", "Question Node.js"]
    return filterFunc(tests)
}

module.exports = begin
