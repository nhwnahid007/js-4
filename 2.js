// we will write a function named as "match finder" which will take two input
//will try to fin match between the two strings

//return true or false base on the match

//return erro message if the paramter are not string

function matchFinder(string1,string2){
    if(typeof string1 !=='string' || typeof string2 !=='string'){
        return "Two input must be string"
    }

    if (string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }

}

// const s1="John Doe"
// const s2="ohn"
const s1="John Doe"
const s2="ohn";

const check=matchFinder(s1,s2)
console.log(27,check);

console.log(29,matchFinder("javascript","code"));
console.log(31,matchFinder("javascript","Java"));
console.log(32,matchFinder("javascript",6));