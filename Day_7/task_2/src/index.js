let employee = {
  firstname: "Manoj",
  lastname: "Kumar",
  age: 26,
  role: "data scienyist",
  department: "IT"
};
console.log("Details of employee :");
for (let key in employee) {
  console.log(key, "-", employee[key]);
}
console.log("Age property deleted", delete employee.age);
console.log("Checking if age is still a property", employee.age);
