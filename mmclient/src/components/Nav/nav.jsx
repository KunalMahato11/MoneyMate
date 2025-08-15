import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { BsPlusCircleFill } from "react-icons/bs";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <FiHome size={28} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/card">
            <FiCreditCard size={28} />
          </NavLink>
        </li>
        <li>
          <div className="addButtonContainer">
            <BsPlusCircleFill size={60} className="addButton" />
          </div>
        </li>
        <li>
          <NavLink to="/transactions">
            <GrTransaction size={28} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <FiSettings size={28} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
