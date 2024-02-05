function cubeNumber(Number){
    if(typeof Number!== 'number'){
        return "provide a number";
    }
    const result=Math.pow(Number, 3)
    return result;
}

const number="5";
const cube=cubeNumber(number)
console.log(cube);

