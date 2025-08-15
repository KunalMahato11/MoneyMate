// import React from "react";
import avatar from '../../assets/chicken.png';
function User() {
  return (
    <div className="app-user">
      <img src={avatar} alt="" className="app-user__avatar" />
      <div className="app-user__info">
        <span>Welcome!</span>
        <span className="app-user__info-name">M Kunal</span>
      </div>
    </div>
  );
}

export default User;
