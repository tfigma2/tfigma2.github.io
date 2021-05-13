var numbers = [2, 54, 12, 213, 2217, 3, 7, 21, 76, 50, 23];
checkParNum(numbers);
function checkParNum(arr) {
    var sumPar = 0;
    arr.forEach(function(elem) {
        if(elem % 2 === 0){
            sumPar++;
        }
    });
    console.log("Количество чётных элементов = " + sumPar);
}

