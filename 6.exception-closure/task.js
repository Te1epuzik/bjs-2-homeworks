﻿function parseCount(productQuantity) {
	if (isNaN(parseFloat(productQuantity))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseFloat(productQuantity);
}

function validateCount(productQuantity) {
	try {
		return parseCount(productQuantity);
	} catch (invalidCount) {
		return invalidCount;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.aSide = a;
		this.bSide = b;
		this.cSide = c;
	}

	get perimeter() {
		return this.aSide + this.bSide + this.cSide;
	}

	get area() {
		let p = (this.aSide + this.bSide + this.cSide) / 2;
		return +toFixed(Math.sqrt(p * (p - this.aSide) * (p - this.bSide) * (p - this.cSide)));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(doesntExist) {
		return {
			get area() {
				return "Ошибка! Треугольник не существует";
			},
			
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}