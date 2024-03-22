function getStudentList(recordIds) {
	const result = [];
	recordIds.forEach(studentId => {
		const student = studentRecords.find(function findEl(el) {
			return el.id === studentId;
		});
		result.push(student);
	});
	return result;
}

function printRecords(recordIds) {
	const studentList = getStudentList(recordIds);

	studentList.sort((a, b) => a.name.localeCompare(b.name));
	studentList.forEach(el => {
		console.log(`${el.name} (${el.id}): ${el.isPaid ? 'Paid' : 'Not Paid'}`);
	});
}

function paidStudentsToEnroll() {
	const paid = studentRecords.reduce((acc, curr) => {
		if (curr.paid) {
			acc.push(curr.id);
		}
		return acc;
	}, []);
	return [...new Set([...currentEnrollment, ...paid])];
}

function remindUnpaid(recordIds) {
	const enrolled = getStudentList(recordIds);
	enrolled.forEach(el => {
		if (el.paid === false) {
			console.log(`${el.name} (${el.id}): ${el.isPaid ? 'Paid' : 'Not Paid'}`);
		}
	})
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
