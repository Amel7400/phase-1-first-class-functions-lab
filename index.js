// Code your solution in this file!
const returnFirstTwoDrivers = (drivers = ["first", "second", "third", "fourth"]) =>{
return [drivers[0], drivers[1]]
};
returnFirstTwoDrivers();

const returnLastTwoDrivers = (drivers = ["first", "second", "third", "fourth"]) =>{
return [drivers[2], drivers[3]]
};
returnLastTwoDrivers();

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers)

const createFareMultiplier = (integer) =>{
return function fareQuintupler(Fare){
 return integer*Fare;
};
}
const fareQuintupler = createFareMultiplier(10);
console.log(fareQuintupler(10));

const fareDoubler = (fare) =>{
return fare*2;
};
console.log(fareDoubler(10));

const fareTripler = (fare) =>{
return fare*3;
};
console.log(fareTripler(10));

const selectDifferentDrivers = (driver = ['Antonia', 'Nuru', 'Amari', 'Mo'], secondArgument) => {
if (secondArgument=== returnFirstTwoDrivers){
  return [driver[0], driver[1]]
}
else return [driver[2], driver[3]]
}
console.log(selectDifferentDrivers(undefined,returnFirstTwoDrivers))




