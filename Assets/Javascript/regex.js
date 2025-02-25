$(document).ready(function(){

// nameregex

    $("#name").keyup(function(){
        let name = $(this).val();
        let nameregex = /^[A-Za-z\s]{3,20}$/;

        if(!nameregex.test(name)){
            $(this).next("span").show().text("Please enter only alphabet (3-15 characters)").css("color","red");
            $(this).css("border", "2px solid red");
        }
         else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        }
    });

// emailregex

    $("#email").keyup(function(){
        let email = $(this).val();
        let emailregex = /^[a-z\d\_\-]{8,}[@][a-z]{5}[.][a-z]{3}$/;

        if(!emailregex.test(email)){
            $(this).next("span").show().text("Please enter a valid email").css("color", "red");
            $(this).css("border", "2px solid red");
        } else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        } 
    });

// passregex

    $("#pass").keyup(function(){
        let pass = $(this).val();
        let passregex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*])[Aa-zZ\d\@#$%^&*!]{8}$/;

        if(!passregex.test(pass)){
            $(this).next("span").show().text("Please enter a correct password").css("color", "red");
            $(this).css("border", "2px solid red");
        } else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        } 
    });

// cnicregex

    $("#cnic").keyup(function(){
        let cnic = $(this).val();
        let cnicregex = /^[0-9]{5}[-][0-9]{8}[-][0-9]{1}$/

        if(!cnicregex.test(cnic)){
            $(this).next("span").show().text("Please enter a valid CNIC number").css("color", "red");
            $(this).css("border", "2px solid red");
        } else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        } 
    });

    

});

