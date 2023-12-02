import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "./redux/slices/cartSlice";
import "../Assets/style.css";
function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const Navigate = useNavigate();
  const getCartTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
    } else {
      setTotal(0);
    }
  };
  const handleCart = () => {
    dispatch(emptyCart());
    Navigate("/checkout");
  };
  useEffect(() => {
    getCartTotal();
  }, [cartArray]);
  return (
    <Container>
      <div style={{ marginTop: "100px" }}>
        {cartArray.length > 0 ? (
          <div
            className="parent d-flex justify-content-between"          >
            <div  style={{width:"100%"}} className="child">
              <table className="table border child">
                <thead>
                  <th>
                    <h5>No</h5>
                  </th>
                  <th>
                    <h5>Product Name</h5>
                  </th>
                  <th>
                    <h5>Product Image</h5>
                  </th>
                  <th>
                    <h5>Product Price</h5>
                  </th>
                </thead>
                <tbody>
                  {cartArray.map((product, index) => (
                    <tr
                      key={index}
                      style={{ fontSize: "22px", alignItems: "center" }}
                    >
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          width={"150px"}
                          height={"100px"}
                          src={product.picture}
                          style={{ objectFit: "contain" }}
                          alt=""
                        />
                      </td>
                      <td>${product.price}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="btn"
                        >
                          <i className="fa-solid fa-trash text-muted"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-75 ms-5">
              <div className="border p-3 rounded shadow">
                <h1 className="text-muted">Cart Summary</h1>
                <h4>
                  Total Amount to be paid :{" "}
                  <span className="text-danger fw-bolder fs-2">$ {total}</span>
                </h4>
                <div className="d-grid">
                  <button
                    onClick={handleCart}
                    className="btn btn-dark mt-5 rounded"
                  >
                    CheckOut
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{ height: "100vh" }}
            className="w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <img
              height={"250px"}
              src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg"
              alt=""
            />
            <h3 className="fw-bolder text-muted">
              Your Cart Is Currently Empty! 😒
            </h3>
            <Link className="btn btn-muted rounded mt-3" to={"/"}>
              Back to Homepage
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}
export default Cart;
