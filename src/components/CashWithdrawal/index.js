// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawAmount = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card">
          <div className="profile-details-container">
            <h1 className="profile-photo">s</h1>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-head">Your Balance</p>
            <div className="balance">
              <p className="balance-amount">{balance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="heading-one">Withdraw</p>
          <p className="para-one">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorder-list">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                onWithdrawAmount={this.onWithdrawAmount}
                denominationItem={each.value}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
