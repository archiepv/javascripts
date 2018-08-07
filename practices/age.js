var myAge = prompt("How old are you?");
var hoursPerDay = 24;
var minsPerHour = 60;
var secsPerMin = 60;

function calcAgeInSecs (age) {
	var daysPerYear = (365 * age);
	ageInSecs = daysPerYear * 
							hoursPerDay * 
							minsPerHour * 
							secsPerMin;
							
	return ageInSecs;
}

calcAgeInSecs (myAge);
console.log(ageInSecs);