$(document).ready(function(){

    
    $("#name").keyup(function(){
        let name = $(this).val();
        let nameregex = /^[A-Za-z\s]{3,20}$/;

        if(!nameregex.test(name)){
            $(this).next("span").show().text("Please enter only alphabet (3-15 characters)").css("color","red");
            $(this).css("border", "2px solid red");
        } else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        }
    });

    $("#email").keyup(function(){
        let email = $(this).val();
        let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,7}$/;

        if(!emailregex.test(email)){
            $(this).next("span").show().text("Please enter a valid email").css("color", "red");
            $(this).css("border", "2px solid red");
        } else {
            $(this).next("span").hide();
            $(this).css("border", "2px solid green");
        } 
    });

});
