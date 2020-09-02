var car = { 
    type:"fiat",
    model:"500",
    Color:"white",
    isEngineStarted : false,
    fuel:10,
    startEngine: function(){
        this.isEngineStarted = true; // with this we can access other proprieties and methods
        console.log("Engine Started");
    },
    refuel: function (fuelAmmount) {
        this.fuel = this.fuel + fuelAmmount;
        console.log("Refueld with:", fuelAmmount);
    },
};
    console.log(car);
    // insiruire de chei si valori
    // si arrays sunt un tip special de object

    //cum accesam valori din obiecte:

    var carType = car.type;
    console.log(carType);
    // si punctul este un operant, este operatorul pe care il folosim ca sa accesam proprietati din obiecte. 
    console.log(car["type"]); // acelasi lucru dar mai complicat de scris
//obiectele pot contine si proprietati de tip functie si de numesc metode.
//ca sa invovam o functie de pe un obiect:

    car.startEngine();
    console.log(car.isEngineStarted);

    console.log ("Before we had:", car.fuel);
    car.refuel(30);
    console.log ("Now we have:", car.fuel);