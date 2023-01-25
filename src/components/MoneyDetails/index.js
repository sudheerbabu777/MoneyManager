// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {MoneyDetailsList, onDeletedHistoryItem} = props
  const {id, title, amount, type} = MoneyDetailsList

  const onClickDelete = () => {
    onDeletedHistoryItem(id)
  }

  return (
    <li className="details">
      <p className="item2">{title}</p>
      <p className="item2">{amount}</p>
      <p className="item2">{type}</p>
      <div>
        <button type="button" className="delete-button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default MoneyDetails
