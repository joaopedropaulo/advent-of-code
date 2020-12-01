const aux = (list) => {
    var sum2020 = 0;
    var index1 = -1;
    var index2 = -1;
    var index3 = -1;
    for (i = 0; i < list.length; i++) {
        for (j = 1; j < list.length; j++) {
            for (k = 2; k < list.length; k++){
                let tempSum = list[i] + list[j] + list[k];
                if (tempSum == 2020) {
                    sum2020 = tempSum;
                    index1 = i;
                    index2 = j;
                    index3 = k;
                    break;
                }
            }
        }
    }
    return list[index1] * list[index2] * list[index3]; 
}


// Solution
var fs = require("fs");
var fileContent = fs.readFileSync("./input").toString('utf-8');
var intList = fileContent.split('\n').map(item => +item)

console.log(aux(intList))