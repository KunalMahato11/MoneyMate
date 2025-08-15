import { TbMedicineSyrup } from "react-icons/tb";

import Nav from "../../components/Nav/nav";
import User from "../../components/User/user";
import DateAndTime from "../../components/DateTime/datetime";
import ExpenseDashBoard from "../../components/ExpenseDash/expensedash";

function Home() {
  return (
    <>
      <div className="app-container">
        <div className="app">
          <div className="top-layer">
            <DateAndTime />
            <User />
            <ExpenseDashBoard />
          </div>

          <div className="app-history">
            <div className="app-history__1">
              <div className="app-history__analytics">
                <span className="analytics-heading">Analytics</span>
              </div>
            </div>
            <div className="app-history__2">
              <div className="app-history__transactions">
                <span className="transaction-heading">Transactions</span>
                <div className="tans-card-container">
                  <div className="trans-card">
                    <div className="trans-card__details">
                      <div className="trans-card__iconandtextcontainer">
                        <TbMedicineSyrup size={45} className="card-icon" />
                        <div className="trans-card__textcontainer">
                          <div className="trans-card__text">Medicine</div>
                          <div className="trans-card__timestamp">
                            8:14, 15 April 2025
                          </div>
                        </div>
                      </div>
                      <div className="trans-card__amount">$20000</div>
                    </div>
                    <div className="trans-card__details">
                      <div className="trans-card__iconandtextcontainer">
                        <TbMedicineSyrup size={45} className="card-icon" />
                        <div className="trans-card__textcontainer">
                          <div className="trans-card__text">Medicine</div>
                          <div className="trans-card__timestamp">
                            8:14, 15 April 2025
                          </div>
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
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
