"use strict"
function solveEquation(a, b, c) {
  const arr = [];
	const d = Math.pow(b, 2) - 4 * a * c;
	if (d === 0) {
		arr[0] = -b / (2 * a);
	} else if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 1200;
	const debt = amount - contribution;
	const monthPayment = debt * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
	const total = monthPayment * countMonths;

	return +total.toFixed(2);
}