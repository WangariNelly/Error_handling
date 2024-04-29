//inbuilt errors 
try{
  nelly;
}catch(error){
     console.log(error.name); //ReferenceError
     console.log(error.message); //nelly is not defined
     console.log(error.stack); // ReferenceError: nelly is not defined
    };
console.log(error);  //referenceError due to object scope