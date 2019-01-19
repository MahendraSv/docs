let employees = [
  { id: 1, fname: 'employee', lname: 'one', exp: 2, salary: 34566, dept: 'accounts' },
  { id: 2, fname: 'employee', lname: 'two', exp: 2, salary: 1234, dept: 'markt' },
  { id: 3, fname: 'employee', lname: 'three', exp: 2, salary: 34566, dept: 'sales' },
  { id: 4, fname: 'employee', lname: 'four', exp: 2, salary: 87675, dept: 'accounts' },
  { id: 5, fname: 'employee', lname: 'five', exp: 2, salary: 4123, dept: 'production' }
];

// to get 'markt' department employees
employees.filter(emp => emp.dept === 'markt').length

// to get fname, and lname of account department employees
employees.filter(emp => emp.dept === 'accounts').map(emp => ({
  fname: emp.fname,
  lname: emp.lname
}))

employees.filter(emp => emp.dept === 'accounts').map(emp => ({
  ...emp, dept: emp.dept.toUpperCase()
}));

// To get departmnet wise employee count
employees.reduce((acc, value) => {
  acc[value.dept] = acc[value.dept] === undefined ? 1 : acc[value.dept] + 1;
  return acc;
}, {});

// To get all employees whose salary is more than 40000
// To get all employees whose salary is more than 40000 and working in accounts dept

// increment salary of production dept employees by 10%

// increment salary of all employees as follows
// 1. accounts dept and exp >= 2 - 10% or 5%
// 2. market dept - 12%
// 3. others - 7%
