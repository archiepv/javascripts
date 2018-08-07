/*---------- JAVASCRIPT EXERCISE ----------*/

function generateRandomNumber(quantity) {
	var randomArrayValues = [];
	var rand;

	for (var i = 0; i < quantity; i++) {
		rand = Math.floor(Math.random() * 20);
		randomArrayValues.push(rand);	
	}
		return randomArrayValues;
}

generateRandomNumber(15);

function dailyTemps (temp, days) {
	var findHighTemp = [];
	var findDaysWithHighestTemp = [];
	
	for (var i= 0; i < temp.length; i++) {
		if (temp[i] === findHighTemp) {
			dailyTemps.push(i);
		}
	}
		return dailyTemps;
} 

var weeklyForecast = dailyTemps(77, [4, 5, 6]);