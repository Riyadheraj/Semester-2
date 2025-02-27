let obj = new Promise(function(resolve,  reject){
    
    let num1 = 5; 
    let num2 = 3;

    let result = num1 + num2;

    document.write("Pending......")

    setTimeout(()=>{
        if(result == 8){
            resolve("");
        }
        else{
            reject("")
        }

    }, 10000)

})

console.log(obj)

obj.then((msg)=>{
    document.write(msg, "Promise Success")
}).catch((msg)=>{
    document.write(msg, "Promise Failed")
})
