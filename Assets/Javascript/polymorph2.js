let num1 = +prompt("enter first value");
let num2 = +prompt("enter second value");
let num3 = +prompt("enter third value");
let num4 = +prompt("enter fourth value");

class A {
    display(num1, num2){
        this.num1 = num1;
        this.num2 = num2;

        document.write(this.num1 * this.num2, "<br>")
    }
}

class B extends A{

    display(num3, num4){
        super.display(num1,num2)
        this.num3 = num1;
        this.num4 = num2;

        document.write(this.num1 + this.num2, "<br>")
    }
    
}

let obj = new B();
obj.display();

