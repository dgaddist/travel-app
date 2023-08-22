import React from "react";

export default function Navbar() {
  return (
    <h1 className="header">
      <img src="./wanderlust.png" alt="Logo" width="170px" />
      <div className="home">Home</div>
      <div className="about">About us</div>
      <div className="faq">FAQ</div>
      <button className="login">Login</button>
      <button className="signup">Sign up</button>
    </h1>
  );
}
