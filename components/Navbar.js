import React from "react";

export default function Navbar() {
  return (
    <h1 className="header">
      <img className="logo" src="./wanderlust.png" alt="Logo" />
      <div className="home">Home </div>
      <div className="about">About us </div>
      <div className="faq">FAQ</div>
      <button className="login">Login</button>
      <button className="signup">Sign up</button>
    </h1>
  );
}
