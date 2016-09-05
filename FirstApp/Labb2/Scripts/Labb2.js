'use strict';


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
    CompanyInfo.Person.newPerson = new Person("Petra", true)
];

CompanyInfo.Car.carsList = ["Audi", "Volvo", "Saab", "Peugeot", "Renault", "Fiat"];

//funktion som skriver ut personer
CompanyInfo.displayList = function (list) {

    var personToDisplay = "";

    for (var i = 0; i < list.length; i++) {

        if (list[i].hasCar === true) {
            personToDisplay += list[i].firstName + "</br>";
        }
    }
    document.getElementById("showAllElements").innerHTML = personToDisplay;
}

CompanyInfo.Car.PrintCars = function (list) {

    var carToDisplay = "";

    for (var i = 0; i < list.length; i++) {
        carToDisplay += list[i] + " " + "</br>";
    }
    document.getElementById("showAllElements").innerHTML = carToDisplay;
}

CompanyInfo.Person.DoPersonHaveCar = function (list) {

    var dfd = $.Deferred();

    var numberOfCars = 0;

    for (var i = 0; i < list.length; i++) {
        if (list[i].hasCar === true) {
            numberOfCars++;
        } else {
            console.log("false");
        }
    } if (numberOfCars > 0) {

        dfd.resolve();

    } else {

        dfd.reject();
    }
    return dfd.promise();

}

CompanyInfo.Person.ViewEmployeeBtn = function () {

    CompanyInfo.Person.DoPersonHaveCar(CompanyInfo.Person.PersonList).then(function () {
        CompanyInfo.displayList(CompanyInfo.Person.PersonList);
        console.log("One or more cars found");
    },
        function () {
            document.getElementById("showAllElements").innerHTML = "No person with car found...";
        }
    ).always(function () { });
}

CompanyInfo.Car.ViewCarsBtn = function () {
    CompanyInfo.Car.PrintCars(CompanyInfo.Car.carsList);
}

