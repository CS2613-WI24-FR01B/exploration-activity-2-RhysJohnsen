
const inputFile = `calculations.json`
//Reads the file. gets the program ready for another when read successfully, prevents more from being read when there are no more
readAFile = function(fileIn){
    const fs = require('node:fs');
    try {
        const data = fs.readFileSync(fileIn, 'utf8');
        return data
    }catch (err) {
        console.log("Requested file does not exist")
    }
}

//For each input, this will find the difference, and add it to the person's counter
solve = function(datain){
    inObject = JSON.parse(datain)
    numA = inObject.data.numbers.a
    numB = inObject.data.numbers.b
    return numA + numB
}

//Program starts here
//This will read every file, and store all the info
beginning = function(){
    forinput = readAFile(inputFile)
    return solve(forinput)
}

getFile = function(){
    return inputFile
}

module.exports = beginning

beginning()
