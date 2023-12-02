import React from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/slices/cartSlice";
import { removeFromWishlist } from "./redux/slices/wishlistSlice";

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const handleWishlistCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishlist(product._id));
  };
  return (
    <div style={{ marginTop: "100px"}}>
      <Container className="mt-5">
        <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {wishlistArray.length > 0 ? (
            wishlistArray.map((product, index) => (
              <div className="hover" style={{ position: "relative" }}>
                <Col className="mb-5">
                  <Card className="h-100">
                    <Card.Img
                      className="card-img-top"
                      src={product.picture}
                      height={180}
                      style={{ objectFit: "contain" }}
                      alt="..."
                    />
                    <div
                      className="hidden"
                      style={{
                        position: "absolute",
                        bottom: "0",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "transparent",
                          height: "50px",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <i
                            class="fa-solid fa-trash fs-5"
                            onClick={() =>
                              dispatch(removeFromWishlist(product._id))
                            }
                          ></i>
                          <i
                            class="fa-brands fa-opencart fs-5"
                            onClick={() => handleWishlistCart(product)}
                          ></i>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="p-4 mb-4">
                      <div className="text-center">
                        <Card.Title as="h6" className="fw-bolder">
                          <h4> {product?.name}</h4>
                        </Card.Title>
                        <h4> $ {product?.price}</h4>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))
          ) :  (
            <div
          style={{ height: "75vh" }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <img
            height={"250px"}
            src="https://htmlstream.com/front/assets/svg/illustrations/oc-empty-cart.svg"
            alt=""
          />
          <h3 className="fw-bolder text-muted">
            Your Wishlist Is Currently Empty! 😒
          </h3>
          <Link className="btn btn-muted rounded mt-3" to={"/"}>
            Back to Homepage
          </Link>
        </div>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default WishList;
