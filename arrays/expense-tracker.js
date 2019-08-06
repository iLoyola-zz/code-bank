const account = {
  name: "Ivan Loyola",
  expenses: [],
  income: [],
  addIncome: function(description, amount) {
    const incomeObject = { description, amount }
    this.income.push(incomeObject)
  },
  addExpense: function(expense, total) {
    const expenseObject = { expense, total }
    this.expenses.push(expenseObject)
  },
  getSummary: function() {
    let totalIncome = 0
    let totalExpenses = 0
    let totalBalance = 0
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.total
    })
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })
    totalBalance = totalIncome - totalExpenses
    return `${
      this.name
    } has a balance of $${totalBalance}. $${totalIncome} in income and $${totalExpenses} in expenses.`
  }
};

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Drugs', 55)
account.addExpense('Booze', 125)
account.addIncome('Job', 2000)
console.log(account.getSummary())