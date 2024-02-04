"use strict"
function solveEquation(a, b, c) {
  let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b - Math.sqrt(d)) / (2 * a);
		arr[1] = (-b + Math.sqrt(d)) / (2 * a);
	}

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 1200;
	let debt = amount - contribution;
	let monthPayment = debt * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
	let total = monthPayment * countMonths;

	console.log(+total.toFixed(2));
	return +total.toFixed(2);
}

calculateTotalMortgage(10, 0, 20000, 24);