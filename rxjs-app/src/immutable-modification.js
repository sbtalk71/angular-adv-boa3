
const car={
    make:"maruti",
    variant:"Alto",
    year: 2004
}

car.variant="Swift";
car.year=2007

console.log(car)

const newCar={...car,year:2009,variant:"Dezire"}

console.log(newCar)