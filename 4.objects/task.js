function Student(name, gender, age) {
  this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
	if ("marks" in this) {
		this.marks.push(...marks);
	};
}

Student.prototype.getAverage = function () {
	let marksAvg = 0;
	if (("marks" in this) && (this.marks instanceof Array) && (this.marks.length !== 0)) {
		let marksSum = this.marks.reduce((sum, mark) => sum + mark, 0)
		marksAvg = marksSum / this.marks.length;
	};
	return marksAvg;
}

Student.prototype.exclude = function (reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}