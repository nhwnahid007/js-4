let laptop = 35000; 
let tablet = 15000; 
let mobile = 20000; 
function calculateElectronicsBudget(l,t,m){
    const totalMoneyRequired=l+t+m;
    return totalMoneyRequired;
}

 const total= calculateElectronicsBudget(laptop,tablet,mobile);

 console.log(total);

