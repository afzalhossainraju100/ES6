// Problem 10: Mixed ES6 Features Challenge
// Create a function processEmployees that:

// Takes an array of employee objects: {name, department, salary, yearsOfService}
// Uses default parameter for minimum salary filter (default 50000)
// Returns an object with:
// totalEmployees: count of employees above minimum salary
// departments: unique department names (use Set)
// avgSalary: average salary of filtered employees
// seniorEmployees: employees with 5+ years (name and department only)
const processEmployees = (employees, minSalary = 50000) => {
  const filtered = employees.filter((emp) => emp.salary > minSalary);
  const totalEmployees = filtered.length;
  const departments = [...new Set(filtered.map((emp) => emp.department))];
  const avgSalary =
    filtered.reduce((acc, emp) => acc + emp.salary, 0) / totalEmployees || 0;
  const seniorEmployees = filtered
    .filter((emp) => emp.yearsOfService >= 5)
    .map((emp) => ({ name: emp.name, department: emp.department }));

  return { totalEmployees, departments, avgSalary, seniorEmployees };
};

const employees = [
  { name: 'Alice', department: 'HR', salary: 60000, yearsOfService: 6 },
  { name: 'Bob', department: 'Engineering', salary: 75000, yearsOfService: 4 },
  { name: 'Charlie', department: 'Sales', salary: 50000, yearsOfService: 5 },
  { name: 'David', department: 'Engineering', salary: 45000, yearsOfService: 3 },
  { name: 'Eve', department: 'HR', salary: 80000, yearsOfService: 8 }
];

console.log(processEmployees(employees));
