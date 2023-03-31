interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}
const student1: Student = {
  firstName: 'Abel',
  lastName: 'Asfaw',
  age: 26,
  location: 'Addis Ababa',
};
const student2: Student = {
  firstName: 'Yiacob',
  lastName: 'Kibret',
  age: 26,
  location: 'Addis Ababa',
};
const studentsList: Student[] = [];
studentsList[0] = student1;
studentsList[1] = student2;
let table = document.createElement('table');

for (const student of studentsList) {
  const row = document.createElement('tr');
  const firstName = document.createElement('td');
  const location = document.createElement('td');
  firstName.textContent = student.firstName;
  location.textContent = student.location;
  row.appendChild(firstName);
  row.appendChild(location);
  table.append(row);
}
document.querySelector('body').append(table);
