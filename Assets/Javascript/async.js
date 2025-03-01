async function myapp() {
    
    let num1 = 5;
    let num2 = 3;
    let num3 = num1 +num2;

    if(num3 == 8){
        return "Success";
    }

    else{
        return "Failed";
    }
}

let a = myapp();
// console.log(a)

a.then((msg)=>{
    console.log(msg , "Promise Fulfuilled")
}).catch((error)=>{
    console.log(error , "Promise Rejected")
});
