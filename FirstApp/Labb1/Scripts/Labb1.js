//'use strict'

$(document).ready(function () {

    var okButton = document.getElementById('OKButton');
    var cancelButton = document.getElementById('cancelButton');
    
    okButton.addEventListener('click', function() {
        
        var firstname = document.getElementById('firstName').value;
        var lastname = document.getElementById('lastName').value;
        var email = document.getElementById('email').value;
        var adress = document.getElementById('email').value;
        var postnumber = document.getElementById('postNumber').value;
        var state = document.getElementById('state').value;
        var phonenumber = document.getElementById('phoneNumber').value;
        var startdate = document.getElementById('startDate').value;

        //var fn = $("#Firstname").val(); //Jquery style

        var newLine = "\n";
        var newTab = "\t";

            alert("Firstname: "+ firstname + newTab + newLine + "Lastname: " + lastname + newTab + newLine + "E-mail: " + email + newTab + newLine + "Adress: " + adress + newTab + newLine + "PostNumber: " + postnumber + newTab + newLine + "State: " + state + newTab + newLine + "Phonenumber: " + phonenumber + newTab + newLine + "Start " + newTab + startdate);

    });

    cancelButton.addEventListener('click', function() {
        if (cancelButton.click === true) {
            document.getElementById("myForm").reset();
        }

    });

});
