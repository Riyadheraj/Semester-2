// class Car{

//     driving(){
//         document.write("This is driving method <br>");
//     }

//     break(){
//         document.write("This is break method <br>");
//     }

//     start(){
//         document.write("This is start method <br>");
//     }

//     stop(){
//         document.write("This is stop method");
//     }


// }

// let toyota = new Car
// let maruti = new Car
// toyota.driving();
// maruti.break();
// toyota.start();
// maruti.stop();


// class Car{
//     constructor(){
//         let engine;
//         let price;
//         document.write("This is constructor method <br>")

//     }   

//     driving(){
//         document.write("This is driving method <br>" +this.engine + this.price);
//     }

//     break(){
//         document.write("This is break method");
//     }



// }
// let toyota = new Car;
// toyota.engine = "1200CC"
// toyota.price = "$3000"
// toyota.driving();

class Car{
    constructor(carengine , carprice){
        this.engine = carengine;
        this.price = carprice;
        document.write("This is constructor method <br>")

    }   

    driving(){
        document.write("This is driving method <br>" +this.engine + this.price);
    }

    break(){
        document.write("This is break method");
    }



}
let toyota = new Car("12000 CC" ,  "$3000");

toyota.driving();







