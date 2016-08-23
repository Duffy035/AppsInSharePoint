'use strict';

$(document).ready(function() {

    var CompanyInfo = CompanyInfo || {};
    CompanyInfo.Person = CompanyInfo.Person || {}
    CompanyInfo.Car = CompanyInfo.Car || {}

    function Person(first, hasCar) {
        this.firstName = first;
        this.hasCar = hasCar;
    }

    CompanyInfo.Person.PersonList = [
        CompanyInfo.Person.newPerson = new Person("Calle", false),
        CompanyInfo.Person.newPerson = new Person("Bengt", true),
        CompanyInfo.Person.newPerson = new Person("Sara", false),
        CompanyInfo.Person.newPerson = new Person("Petra", false)
    ];

    CompanyInfo.Car.carsList = ["Audi", "Volvo", "Saab", "Peugeot", "Renault", "Fiat"];

    //funktion som skriver ut personer
    function checkPersonList(list) {
        var personToDisplay = "";

        for (var i = 0; i < list.length; i++) {
            if (list[i].hasCar === true) {
                personToDisplay += list[i].firstName + "</br>";
            }
        }
        document.getElementById("showAllElements").innerHTML = personToDisplay;
    }

    function checkEmployeeCarAccess(list) {
        var defferd = $.Deferred();
        var numberOfCars = 0;

        for (var i = 0; i < list.length; i++) {
            if (list[i].hasCar === true) {
                numberOfCars++;
            } 
        }
        if (numberOfCars > 0) {
            return defferd.resolve();
        } else {
            return defferd.reject();
        }
        return defferd.promise();
    }

    function Caller() {
        checkEmployeeCarAccess(CompanyInfo.Person.PersonList).then(function() {
            return checkPersonList();
        }, function () {
            
            console.log("hittades inga...");
        });
    

    var employeeButton = document.getElementById('Employee');
        var carsButton = document.getElementById('Cars');

        employeeButton.addEventListener('click', function() {
            checkPersonList(CompanyInfo.Person.PersonList);
            
        });
    }
});

        //carsButton.addEventListener('click', function () {
        //    var cars = document.getElementById('Cars');

        //    alert(cars);
        //});

    //});