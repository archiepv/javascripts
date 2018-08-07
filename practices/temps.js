/*---------- JAVASCRIPT EXERCISE ----------*/
var tempsForWeek = [];

tempsForWeek[0] = [56, 59, 63, 66, 67, 69, 70, 69, 65, 62, 59, 56]; // Monday

tempsForWeek[1] = [57, 59, 61, 64, 67, 69, 70, 71, 71, 69, 67, 64]; // Tuesday

tempsForWeek[2] = [58, 60, 62, 64, 66, 68, 69, 70, 70, 69, 62, 57]; // Wednesday

tempsForWeek[3] = [57, 56, 69, 62, 65, 66, 68, 68, 70, 69, 59, 52]; // Thursday

tempsForWeek[4] = [52, 59, 59, 63, 67, 70, 72, 73, 77, 74, 70, 65]; // Friday

tempsForWeek[5] = [60, 58, 62, 64, 69, 70, 74, 75, 77, 77, 74, 72]; // Saturday

tempsForWeek[6] = [63, 63, 64, 68, 71, 74, 75, 76, 77, 75, 74, 73]; // Sunday

function findHighTemp (tempsForWeek) {
	var highTemp = [77];
	for (var i = 0; i < tempsForWeek.length; i++) {
		if (tempsForWeek[i] === highTemp) {
			highTemp = tempsForWeek[i];
		}
	}
		return highTemp;
} 

function findDaysWithHighestTemp (tempsForWeek, highTemp) {
	var daysWithHighTemp = [];
	for (var i = 0; i < tempsForWeek.length; i++) {
		if (tempsForWeek[i] === highTemp);
			daysWithHighTemp.push(i);
	}
		return daysWithHighTemp;
}

var highTemp = findHighTemp(tempsForWeek);
var daysWithHighTemp = findDaysWithHighestTemp(tempsForWeek, highTemp);
console.log("The hightest temperature of the week is: " + highTemp + " On days: " + daysWithHighTemp);