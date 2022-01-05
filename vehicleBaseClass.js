class Vehicle{
    constructor(make, model, color, year, mileage) {
        this.make = make
        this.model = model
        this.color = color
        this.year = year
        this.mileage = mileage
    }

    vehicleInfo() {
        console.log("Make: " + this.make)
        console.log("Model: " + this.model)
        console.log("Color: " + this.color)
        console.log("Year Manufactured: " + this.year)
        console.log("Mileage: " + this.mileage + " miles")
    }

    vehicleColorChange(color) {
        this.color = color
        console.log("New car color: " + this.color)
    }

    addMileage(miles) {
        this.miles = miles
        this.mileage += this.miles
        console.log("New Mileage: " + this.mileage + " miles")
    }

    
}

let subaru = new Vehicle("Subaru", "Legacy", "Black", 2010, 100000)
subaru.vehicleInfo()
subaru.vehicleColorChange("Blue")
subaru.addMileage(40000)