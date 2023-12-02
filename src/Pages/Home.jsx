import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../Assets/style.css";
import { addToCart } from "./redux/slices/cartSlice";
import { addToWishlist } from "./redux/slices/wishlistSlice";
function Home() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json"
      )
      .then((response) => {
        console.log("Data:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredData = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
      <div className="landing"></div>
      {/* searchbar */}
      <div className="d-flex justify-content-center align-items-center w-100  mt-5">
        <div className="d-flex border w-50 rounded ">
          <input
            type="text"
            className="form-control border-0 searchBar"
            placeholder="search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i
            style={{ marginRight: "30px" }}
            className="fa-solid fa-magnifying-glass fa-rotate-90 text-dark"
          ></i>
        </div>
      </div>

      <Container className="mt-5">
        <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {filteredData.length > 0 ? (
            filteredData.map((product, index) => (
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
                            class="fa-regular fa-heart fs-5"
                            onClick={() => dispatch(addToWishlist(product))}
                          ></i>
                          <i
                            class="fa-brands fa-opencart fs-5"
                            onClick={() => dispatch(addToCart(product))}
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
          ) : (
            <p className="text-muted text-center fw-bolder fs-4 mb-5">
              Not Found !
            </p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
