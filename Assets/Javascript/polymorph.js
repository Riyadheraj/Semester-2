class A{
    // constructor(){
    //     document.write("This is constructor method from parent <br>")
    // }

    display(num1, num2){
        this.num1 = num1;
        this.num2 = num2;

        document.write(this.num1 * this.num2, "<br>")
    }
}

class B extends A{
    // constructor(){
    //     super();
    //     document.write(`This is constructor method from child <br> ${this.num1} * ${this.num2}`)
    // }

    display(num1, num2){
        super.display(12,5);
        this.num1 = num1;
        this.num2 = num2;        
        document.write(this.num1 + this.num2)
    }
}

let obj = new B();
obj.display(22,18);


