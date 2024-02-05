 /** make a function named as ,this will take two input
  * make sum of the alll elements of array
  * if the sum is greater thansecond input return tru
 */


 function canPay (arr,num1){
    sum=0;
    if (arr.length==0){
        return "empty index"
    }
    for(let i of arr){
        sum=sum+i;
    }
    if(sum>=num1){
        return true;
    }
    else{
        return false
    }
 }

 const arr=[]
 const price=10;

 const products=canPay(arr,price)

 console.log(products);