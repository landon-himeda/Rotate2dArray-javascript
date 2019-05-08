function rotate2DArr(TwoDimArr, degrees) {

    // 3 Edge Cases
    if (TwoDimArr.length < 1) {
        console.log("Empty Array.");
        return TwoDimArr;
    }

    var innerArrLength = TwoDimArr[0].length;
    for (let i = 1; i < TwoDimArr.length; i++) {
        if (innerArrLength !== TwoDimArr[i].length) {
            console.log("Inner arrays not the same length");
            return TwoDimArr;
        }
    }

    if ((degrees % 90 !== 0) || (degrees > 360)) {
        console.log("Invalid degree amount (must be multiple of 90, must be 360 or less)");
        return TwoDimArr;
    }

    var numRotations = (degrees / 90);

    var new2DArr = [];

    if (numRotations === 1) {
        for (let vertIdx = 0; vertIdx < TwoDimArr[0].length; vertIdx++) {
            console.log(`VIdx = ${vertIdx}`);
            let newInnerArr = [];
            for (let horizIdx = TwoDimArr.length -1; horizIdx >= 0; horizIdx--) {
                console.log(`HIdx = ${horizIdx}`);
                newInnerArr.push(TwoDimArr[horizIdx][vertIdx]);
            }
            console.log(`New Inner Arr pushed: ${newInnerArr}`);
            new2DArr.push(newInnerArr);
        }
    } else if (numRotations === 2) {
        for (let horizIdx = TwoDimArr.length -1; horizIdx >= 0; horizIdx--) {
            console.log(`HIdx = ${horizIdx}`);
            let newInnerArr = [];
            for (let vertIdx = TwoDimArr[0].length -1; vertIdx >= 0; vertIdx--) {
                console.log(`VIdx = ${vertIdx}`);
                newInnerArr.push(TwoDimArr[horizIdx][vertIdx]);
            }
            console.log(`New Inner Arr pushed: ${newInnerArr}`);
            new2DArr.push(newInnerArr);
        }
    } else if (numRotations === 3) {
        for (let vertIdx = TwoDimArr[0].length -1; vertIdx >= 0; vertIdx--) {
            console.log(`VIdx = ${vertIdx}`);
            let newInnerArr = [];
            for (let horizIdx = 0; horizIdx < TwoDimArr.length; horizIdx++) {
                console.log(`HIdx = ${horizIdx}`);
                newInnerArr.push(TwoDimArr[horizIdx][vertIdx]);
            }
            console.log(`New Inner Arr pushed: ${newInnerArr}`);
            new2DArr.push(newInnerArr);
        }
    } else if (numRotations === 4) {
        console.log("You silly.");
        return TwoDimArr;
    }

    // Print New 2d Arr
    console.log("Returned 2dArr = [");
    for (let j = 0; j < new2DArr.length; j++) {
        console.log(new2DArr[j]);
    }
    console.log("]");
    return new2DArr;
}

var NormalArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

var EmptyArr = [];

var RectangularArr = [
    [0, 1, 2, 3],
    [4, 5, 6, 7]
]

var InvalidArr = [
    [0, 1, 2, 3],
    [4]
]

var BigArr = [
    [0, 1, 2, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48, 49]
]

console.log("Running NormalArr with 90 degrees *************");
rotate2DArr(NormalArr, 90);
console.log("\n");

console.log("Running NormalArr with 180 degrees *************");
rotate2DArr(NormalArr, 180);
console.log("\n");

console.log("Running NormalArr with 270 degrees *************");
rotate2DArr(NormalArr, 270);
console.log("\n");

console.log("Running NormalArr with 360 degrees *************");
rotate2DArr(NormalArr, 360);
console.log("\n");

console.log("Running NormalArr with 100 degrees *************");
rotate2DArr(NormalArr, 100);
console.log("\n");

console.log("Running RectangularArr with 90 degrees *************");
rotate2DArr(RectangularArr, 90);
console.log("\n");

console.log("Running EmptyArr with 90 degrees *************");
rotate2DArr(EmptyArr, 90);
console.log("\n");

console.log("Running InvalidArr with 90 degrees *************");
rotate2DArr(InvalidArr, 90);
console.log("\n");