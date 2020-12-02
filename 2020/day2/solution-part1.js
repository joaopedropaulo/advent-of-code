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
        let firstRestrictionBoundary = parseInt(boundariesArray[0]);
        let secondRestrictionBoundary = parseInt(boundariesArray[1]);
        console.log("firstRestrictionBoundary: " + firstRestrictionBoundary + "; secondRestrictionBoundary: " + secondRestrictionBoundary)

        let regex = new RegExp(restrictionCharacter, "g")
        console.log("regex: " + regex)
        let characterOccurences = (queryString.match(regex) || []).length;
        console.log("characterOccurences: " + characterOccurences)
        if (characterOccurences >= firstRestrictionBoundary && characterOccurences <= secondRestrictionBoundary) {
            counter ++;
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