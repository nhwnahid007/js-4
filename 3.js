/**
 * make a function named as shortmaker which will take an array as input 
 * access the elements of the input array 
 * compare 
 * if an element is negative return invalid input
 * if elements are equal then return equal
 * if elements are not same return in descending
 *
 */

function shortMaker(arr){
    const [a,b]=arr;
    if(a<0 || b<0){
        return "Input invalid";
    }
    else if(a==b){
        return "Equal";
    }
    else{
        let max;
        if(a>b){
            max=[a,b];
        }
        else{
            max=[b,a];
        }
        return max;
    }
}

const arr=shortMaker([1,3])
console.log(arr);


