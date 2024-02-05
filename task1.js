//Find the lowest number in the array below.




const heights2 = [167, 190, 120, 165, 137];

function getLowestNumber(numbers){
    let min=numbers[0];
    for(num of numbers){
        if(num<min){
            min=num;
            return min;
        }
    }


}

const min=getLowestNumber(heights2)

console.log(min);

