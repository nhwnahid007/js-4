/**
 * define a function named as "findAdress"
 * return
 * acess the element of the object
 * format the string
 * replace the missing property with --
 * return the result
*/


function findAdress(obj){
    const street =obj.street ||"__";
    const house=obj.house ||"__";
    const society =obj.society ||"__";
    console.log(house);
    const str =street+","+house+","+society;

    return str;

}

const add={street:10,society:"Earth Perfect"}
   const f1= findAdress(add)
console.log(f1);
