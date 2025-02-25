class A {

    constructor(myname){
        this.name = myname
        document.write("This is constructor method from Parent Class <br>")
    }
  
      
    message(myemail){
        this.email = myemail
        document.write(`Hello, from parent class <br> ${this.name} <br> ${this.email} <br>`)
    }
}

class B extends A{

    constructor(mypass){
        super("ali")
        this.pass = mypass
        document.write(`This is constructor method from Child Class <br> ${this.pass} <br>`)
    }

    display(){
        document.write(`Hello, from child class <br>`)
    }
}

let obj = new B(12345);
obj.message("ali@gmail.com");
obj.display()