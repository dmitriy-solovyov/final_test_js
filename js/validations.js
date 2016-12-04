/**
 * Created by Dima on 04/12/16.
 */
$(document).ready(function () {
    $("#form1").validate({
        rules: {
            display_name:{

            },
            user_name:{

            },
            password:{

            },
            confirm_password:{
                equalTo: "#password"
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

$(document).ready(function () {
    $("#form2").validate({
        rules: {
            company_name:{

            },
            email: {
                required: true,
                email: true
            },
            title:{

            },
            first_name: {
                required: true,
                minlength: 2
            },
            middle_name:{

            },
            last_name:{
                required: true
            },
            address_1:{
                required: true
            },
            address_2:{

            }

        },
        messages: {
            email: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            first_name: {
                required: "We need your first name to contact you",
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

    $("#form3").validate({
        rules: {
            zip:{
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