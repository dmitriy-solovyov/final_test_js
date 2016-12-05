/**
 * Created by Dima on 04/12/16.
 */
$(document).ready(function () {
    $("#form1").validate({
        rules: {
            display_name:{
                minlength: 4
            },
            user_name:{
                minlength: 4
            },
            password:{
                minlength: 8
            },
            confirm_password:{
                equalTo: "#password"
            }

        },
        messages: {
            display_name: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            user_name: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            password: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
});

$(document).ready(function () {
    $("#form2").validate({
        rules: {
            company_name:{
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            title:{
                minlength: 4
            },
            first_name: {
                required: true,
                minlength: 3
            },
            middle_name:{
                minlength: 3
            },
            last_name:{
                minlength: 3,
                required: true
            },
            address_1:{
                minlength: 3,
                required: true
            },
            address_2:{
                minlength: 3
            }

        },
        messages: {
            company_name: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            email: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            title: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            first_name: {
                required: "We need your first name to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            middle_name: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            last_name: {
                required: "We need your last name to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            address_1: {
                required: "We need your address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            address_2: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
});

$(document).ready(function () {
    jQuery.validator.addMethod("phoneUS", function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        return this.optional(element) || phone_number.length > 9 &&
            // phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
            phone_number.match(filter);
    }, "Please specify a valid phone number");

    jQuery.validator.addMethod("zipUS", function(zip, element) {
        zip = zip.replace(/\s+/g, "");
        var filter =  /^\d{5}(-\d{4})?(?!-)$/;
        alert(zip.match(filter));
        return this.optional(element) && zip.match(filter);
    }, "Please specify a valid zip code");


    $("#form3").validate({
        rules: {
            zip:{
                zipUS: true,
                required: true
            },
            confirm_password2:{

            },
            phone:{
                phoneUS: true,
                required: true
            },
            mobile_phone:{
                phoneUS: true
            },
            fax:{
                phoneUS: true
            }

        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
});