// OOP Concept
class Student {
    constructor(studentname, studentemail, studentpassword) {
        this.name = studentname;
        this.email = studentemail;
        this.password = studentpassword;

        document.write("This is a constructor method<br>");
    }
    studentname() {
        document.write("This is a name method<br>");
        document.write("Name: " + this.name + "<br>");
        document.write("Email: " + this.email + "<br>");
        document.write("Password: " + this.password + "<br>");
    }
    studentemail() {
        document.write("This is an email method<br>");
        document.write("Email: " + this.email + "<br>");
    }
    studentpassword() {
        document.write("This is a password method<br>");
        document.write("Password: " + this.password + "<br>");
    }
}
let DISM_Student = new Student("Zain", "zain123@gmail.com", "zain123#");
DISM_Student.studentname();


