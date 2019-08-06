let myAccount = {
  name: 'Ivan Loyola',
  expenses: 0,
  income: 0
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let total = account.income - account.expenses;
  return `Account for ${account.name} has $${total}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000);
addExpense(myAccount, 100);
addExpense(myAccount, 45);
console.log(getAccountSummary(myAccount)); // Account for Ivan Loyola has $855. $1000 in income. $145 in expenses.
resetAccount(myAccount);
console.log(getAccountSummary(myAccount)); // Account for Ivan Loyola has $0. $0 in income. $0 in expenses.