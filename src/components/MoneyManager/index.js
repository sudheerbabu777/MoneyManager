import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  onDeletedHistoryItem = id => {
    const {historyList} = this.state
    const filterHistory = historyList.filter(each => each.id !== id)
    this.setState({historyList: filterHistory})
  }

  onClickAddHistoryList = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    console.log(displayText)
    const newHistory = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onEnterTitleName = event => {
    this.setState({titleInput: event.target.value})
  }

  onEnterTitleAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onEnterType = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {historyList} = this.state
    let totalIncome = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      }
    })
    return totalIncome
  }

  getExpenses = () => {
    const {historyList} = this.state
    let totalExpenses = 0

    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        totalExpenses += each.amount
      }
    })
    return totalExpenses
  }

  getBalance = () => {
    const {historyList} = this.state
    let totalIncome = 0
    let totalBalance = 0
    let totalExpenses = 0
    historyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
      } else {
        totalExpenses += each.amount
      }
    })
    totalBalance = totalIncome - totalExpenses
    return totalBalance
  }

  render() {
    const {titleInput, amountInput, optionId, historyList} = this.state

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="manager-container">
            <div className="money-manager">
              <h1 className="name-heading">Hi,Richard </h1>
              <p className="welcome">
                Welcome back to your
                <span className="money">Money Manager</span>
              </p>
            </div>
          </div>

          <div>
            <TransactionItem
              totalBalance={this.getBalance()}
              totalExpenses={this.getExpenses()}
              totalIncome={this.getIncome()}
            />
          </div>
          <div className="bottom-container">
            <form className="form" onSubmit={this.onClickAddHistoryList}>
              <h1 className="add-Transaction">Add Transaction</h1>

              <div className="input-container">
                <label className="label" htmlFor="input">
                  TITLE
                </label>
                <input
                  type="text"
                  id="input"
                  placeholder="TITLE"
                  className="text-bar"
                  onChange={this.onEnterTitleName}
                  value={titleInput}
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="input">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="input"
                  placeholder="AMOUNT"
                  className="text-bar"
                  onChange={this.onEnterTitleAmount}
                  value={amountInput}
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="select">
                  TYPE
                </label>
                <select
                  className="text-bar"
                  id="select"
                  onChange={this.onEnterType}
                  value={optionId}
                >
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button className="button" type="submit">
                Add
              </button>
            </form>

            <div className="history-container">
              <h1 className="history">History</h1>

              <div className="details-container-list">
                <ul>
                  <li className="details-container">
                    <p className="item">Title</p>
                    <p className="item">Amount</p>
                    <p className="item">Type</p>
                  </li>
                  {historyList.map(each => (
                    <MoneyDetails
                      MoneyDetailsList={each}
                      key={each.id}
                      onDeletedHistoryItem={this.onDeletedHistoryItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
