// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, onWithdrawAmount} = props
  const onWithdraw = () => {
    onWithdrawAmount(denominationItem)
  }

  return (
    <li>
      <button type="button" onClick={onWithdraw}>
        {denominationItem}
      </button>
    </li>
  )
}

export default DenominationItem
