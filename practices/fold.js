/*----- Javascript Exercise -----*/

var foldCount = 0;
var paperMmThick = 0.1;

/*----- Calculating Thickness -----*/

function getPaperThickness (numFolds, paperThicknessInMm) {
	var totalThickness = Math.pow(2, numFolds) * paperThicknessInMm;
	var paperThicknessInKm = totalThickness / 1000;
	
	if (totalThickness <= 100000) {
		return totalThickness;
	} else if (totalThickness > 100000) {
		return paperThicknessInKm;
	}		
}

getPaperThickness (28, paperMmThick);