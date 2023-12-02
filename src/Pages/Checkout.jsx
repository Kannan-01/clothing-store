import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Assets/style.css'
function Checkout() {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
      className="img-gif"
    >
      <div>
        <img
          src="https://i.pinimg.com/originals/02/20/da/0220dad7b5d390c3178815008a628ace.gif"
          alt=""
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="justify-content-center align-items-center d-flex flex-column">
        <h3>Your Order is Placed Successfully !</h3>
        <h5>Happy Shopping !</h5>
        <Button className="border-0 bg-white">
          <Link to={'/'} style={{color:"black",fontSize:"20px"}}>Go back to home</Link>
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
