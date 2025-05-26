import './App.css'
import avatar from './assets/chicken.png';
import { PiPiggyBankFill } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { PiDotsSixBold } from "react-icons/pi";


function App() {
 
  return (
    <>

      <div className="app-container">
        
        
        <div className="app">

            <div className="app-time">
              <span className="time">09:10</span>
              <span className="date">26 May</span>
            </div>



            <div className="app-user">
              <img src={avatar} alt="" className='app-user__avatar' />
              <div className="app-user__info">
                <span>Welcome!</span>
                <span className="app-user__info-name">M Kunal</span>
              </div>
            </div>


            <div className="app-total">

                <div className="income">
                  <span className='income-title'>Total Income</span>
                  <span className='income-value'>₹0</span>
                  <span className="income-icon"><PiPiggyBankFill size={35}  /> <FaLongArrowAltUp /> </span>
                </div>
                <div className="expense">
                  <span className='expense-title'>Total Expense</span>
                  <span className='expense-value'>₹1</span>
                  <div className="expense-icon"><GiPayMoney size={35} /></div>
                </div>

                <div className="app-total-icon"><PiDotsSixBold size={35} /></div>
            </div>

            <div className="app-history">
              <div className="app-history__analytics">
                <span>Analytics</span>
              </div>
              <div className="app-history__transactions">
                <span>Transactions</span>
              </div>
            </div>

        </div>
      
      
      </div>
    
    </>
  )
}

export default App
