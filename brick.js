let floor = 1;
function brickCalculator(floor){
    const brickHeightFirstTenFloor = 15;
    const brickHeightSecondTenFloor = 12;
    const brickHeightRest = 10;
    const bricksPerFeet = 1000;
    var bricks;
    if(floor <= 10){
        bricks = brickHeightFirstTenFloor * floor * bricksPerFeet;
        return bricks;
    }
    else if(floor <= 20){
        bricks = brickHeightSecondTenFloor * floor * bricksPerFeet;
        return bricks;
    }
    else{
        bricks = brickHeightRest * floor * bricksPerFeet;
        return bricks;
    }
}
var neededBricks = brickCalculator(5);
console.log(neededBricks)