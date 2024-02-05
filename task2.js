// Find the friend with the smallest name.


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(friends){
    let min=friends[0];
    for (let friend of friends){
        if(friend.length<min.length){
            min=friend;
        }
    }

return min;
    
}

const small=smallestName(heights2);

console.log(small);

