/* Javascript Exercise */
function computerPriceWithTax(p, t) {
	p = (p * t) + p; 
	console.log("Price with tax: ", p);
	return p;
}
var price = 80;
var taxRate = .08;
computerPriceWithTax(price, taxRate);
console.log("price is: ", price);