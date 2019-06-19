const account = {
    name: 'Andrew Mead',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let total = 0
        this.expenses.forEach(function (expense) {
            total += expense.amount
        })
        return `${account.name} has $${total} in expenses`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
