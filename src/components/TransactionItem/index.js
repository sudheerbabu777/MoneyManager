// Write your code here
import './index.css'

const TransactionItem = props => {
  const {totalBalance, totalIncome, totalExpenses} = props
  return (
    <div className="TransactionItem">
      <div className="money-details balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />

        <div>
          <p className="balance-cash">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {totalBalance}
          </p>
        </div>
      </div>
      <div className="money-details income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />

        <div>
          <p className="balance-cash">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="money-details expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />

        <div>
          <p className="balance-cash">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem
