// import React from "react";
import { PiPiggyBankFill } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { PiDotsSixBold } from "react-icons/pi";

function ExpenseDashBoard() {
  return (
    <div className="app-total">
      <div className="income">
        <span className="income-title">Total Income</span>
        <span className="income-value">₹0</span>
        <span className="income-icon">
          <PiPiggyBankFill size={35} /> <FaLongArrowAltUp />{" "}
        </span>
      </div>
      <div className="expense">
        <span className="expense-title">Total Expense</span>
        <span className="expense-value">₹1</span>
        <div className="expense-icon">
          <GiPayMoney size={35} />
        </div>
      </div>

      <div className="app-total-icon">
        <PiDotsSixBold size={35} />
      </div>
    </div>
  );
}

export default ExpenseDashBoard;
