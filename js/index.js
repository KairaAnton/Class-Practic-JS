'use strict'



function jadeneCase(str){



   return str.split(' ');
    
}

console.log(jadeneCase('rwetgewr rtyr retye'))

 

//////////////////////////


function clearFalsy(array){
    let newArr = [];
   array.forEach(element => {
       if(element !== false){

        newArr.push(element);
           
       }
   })

   return newArr;
       
   
}


console.log(clearFalsy([1,1,1, false,2,3,4,5, false]));


///////////////////////





///////////////////////


function removeItem(array, item){

    let arr = [];

    array.forEach(element => {
        if(element !== item){
            arr.push(element);
        }
    })
    return arr;
}


console.log(removeItem([1,1,2,3,4,56,43,2,4,56,6,6,6,6,6], 6));


///////////////////////////////