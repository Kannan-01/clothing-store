import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../Assets/style.css'
import { useState } from "react";
import { useEffect } from "react";
function Header() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);
  const [show, setShow] = useState(false);
  useEffect(() =>
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
  );
  return (
    <>
      <Navbar fixed="top" expand="lg"  className={`${show && 'nav-white'}`}>
        <Container>
          <Navbar.Brand>
            <i className="fa-brands fa-cotton-bureau me-1"></i>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Tee Rex
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />

          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Nav.Link className="active">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {" "}
                    HOME
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={"/wishlist"}
                  >
                    WISHLIST
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {wishlist.length > 0 && (
                  <p
                    className="bg-transparent text-danger"
                    style={{ fontSize: "20px" }}
                  >
                    {wishlist.length}
                  </p>
                )}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    to={"/cart"}
                  >
                    CART
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {cart.length > 0 && (
                  <p
                    className="bg-transparent text-danger"
                    style={{ fontSize: "20px" }}
                  >
                    {cart.length}
                  </p>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
