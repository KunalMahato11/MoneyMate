import './App.css'
import avatar from './assets/chicken.png';
import { PiPiggyBankFill } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { PiDotsSixBold } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";
import { TbMedicineSyrup } from "react-icons/tb";   



function App() {
 
  return (
    <>

      <div className="app-container">
        
        
        <div className="app">

          <div className="top-layer">
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
          </div>

          <div className="app-history">
            <div className="app-history__1">
              <div className="app-history__analytics">
                <span className='analytics-heading'>Analytics</span>
              </div>
            </div>
            <div className="app-history__2">  
              <div className="app-history__transactions">
                <span className='transaction-heading'>Transactions</span>
                <div className="tans-card-container">
                  <div className="trans-card">
                    <div className="trans-card__details">
                      <div className="trans-card__iconandtextcontainer">
                          <TbMedicineSyrup size={45} className='card-icon' />
                          <div className="trans-card__textcontainer">
                            <div className="trans-card__text">Medicine</div>
                            <div className="trans-card__timestamp">8:14, 15 April 2025</div>
                          </div>
                      </div>
                      <div className="trans-card__amount">$20000</div>
                    </div>
                    <div className="trans-card__details">
                      <div className="trans-card__iconandtextcontainer">
                          <TbMedicineSyrup size={45} className='card-icon' />
                          <div className="trans-card__textcontainer">
                            <div className="trans-card__text">Medicine</div>
                            <div className="trans-card__timestamp">8:14, 15 April 2025</div>
                          </div>
                      </div>
                      <div className="trans-card__amount">$20000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-layer">
            <FiHome size={28}/>
            <FiCreditCard size={28} />
            <div className="addButtonContainer">
              <BsPlusCircleFill size={60} className='addButton'/>
            </div>
            <GrTransaction size={28}/>
            <FiSettings size={28}/>
          </div>


        </div>

      </div>
    
    </>
  )
}

export default App
