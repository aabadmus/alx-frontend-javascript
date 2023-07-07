// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "AHMED",
  lastName: "BADMUS",
  age: 30,
  location: "ENUGU",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "BADMUS",
  age: 25,
  location: "NIBO",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render the table and append rows for each student
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

