//brickCalculator function
// Create a function named "brickCalculator" which will take number of floors in a building and return the number of bricks used in that building. Here, the height of bricks in first ten floors is 15, the height of bricks in the second ten floors is 12 and the rest of the bricks are of height 10. Each feet requires 1000 bricks.
function brickCalculator(floor){
    const brickHeightFirstTenFloor = 15;
    const brickHeightSecondTenFloor = 12;
    const brickHeightRest = 10;
    const bricksPerFeet = 1000;
    var remainingFloor = floor-20;
    var bricks;
    if(floor == 0 || floor <0)
    {
        return -1;
    }
    else if(remainingFloor<0 || remainingFloor == 0)
    {
       var remainingAfterTenFloor = floor - 10;
       if(remainingAfterTenFloor < 0 || remainingAfterTenFloor==0)
       {
           bricks = floor * brickHeightFirstTenFloor * bricksPerFeet;
           return bricks;
       }
       else{
           bricksForFirstTenFloors = 10 * brickHeightFirstTenFloor * bricksPerFeet;
           bricksForRemainingFloors = remainingAfterTenFloor * brickHeightSecondTenFloor * bricksPerFeet;

           bricks = bricksForFirstTenFloors + bricksForRemainingFloors;
           return bricks;
       }
    }
    else{
        bricksForFirstTenFloors = 10 * brickHeightFirstTenFloor * bricksPerFeet;
        bricksForSecondTenFloors = 10 * brickHeightSecondTenFloor * bricksPerFeet;
        bricksForRemainingFloors = remainingFloor * brickHeightRest * bricksPerFeet;
        bricks = bricksForFirstTenFloors + bricksForSecondTenFloors + bricksForRemainingFloors;

        return bricks;
    }
}

var neededBricks = brickCalculator(12);
console.log(neededBricks)