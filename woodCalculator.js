function woodCalculator(chair, table, bed){
    const woodforChair = 1 *chair;
    const woodforTable = 1 *table;
    const woodforBed = 1 *bed;
    var sum = (woodforChair + woodforTable + woodforBed);
    return sum;
}
var woodNeeded = woodCalculator(1, 3, 5);
console.log("For making chairs, tables and beds wood is needed:", woodNeeded);