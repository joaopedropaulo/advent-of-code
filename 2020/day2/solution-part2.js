const aux = (list) => {
    var counter = 0;
    list.forEach(element => {
        console.log("---")
        let elementDecompArray = element.split(": ");

        let policies = elementDecompArray[0];
        let queryString = elementDecompArray[1];
        console.log("queryString: " + queryString)

        let restrictionsArray = policies.split(" ");

        let restrictionBoundariesArray = restrictionsArray[0];
        let restrictionCharacter = restrictionsArray[1];
        console.log("restrictionCharacter: " + restrictionCharacter)

        let boundariesArray = restrictionBoundariesArray.split("-")
        let firstRestrictionIndex = parseInt(boundariesArray[0]);
        let secondRestrictionIndex = parseInt(boundariesArray[1]);
        console.log("firstRestrictionIndex: " + firstRestrictionIndex + "; secondRestrictionIndex: " + secondRestrictionIndex)

        if ((queryString.charAt(firstRestrictionIndex - 1) == restrictionCharacter && queryString.charAt(secondRestrictionIndex - 1) != restrictionCharacter) ||
            (queryString.charAt(firstRestrictionIndex - 1) != restrictionCharacter && queryString.charAt(secondRestrictionIndex - 1) == restrictionCharacter)) {
            counter ++;
            console.log("Match!")
        }

    });
    console.log("\n----------------------------------")
    console.log("counter: " + counter)

    return counter;
}

// Solution
var fs = require("fs");
var fileContent = fs.readFileSync("./input").toString('utf-8');
var list = fileContent.split('\n');

console.log(aux(list))