// Write your code below this line.


let array = []
function luckyNumbers(number){
    for(let i=0; i<5; i++){

        min = Math.ceil(0);
        max = Math.floor(10);
        let luckyNum = Math.floor(Math.random() * (max - min + 1) + min)

        if (array.includes(luckyNum)){
        i--
        }else{
        array.push(luckyNum)
        }
    };
console.log(array)
};


