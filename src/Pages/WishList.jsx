import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from './redux/slices/wishlistSlice'
import { addToCart } from './redux/slices/cartSlice'

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row>
      {
        wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
          <Col className="mb-5" sm={12} md={6} lg={4} xl={3}>
        <Card className="shadow rounded" style={{ width: "18rem", height:"30rem" }}>
          <Card.Img height={'200px'} variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title}</Card.Title>
            <Card.Text>
              <p>{product?.description}</p>
              <h5>${product?.price}</h5>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn btn-light">
                <i className="fa-solid fa-trash text-danger fa-2x"></i>
              </Button>
              <Button onClick={()=>handleWishlistCart} className="btn btn-light">
                <i className="fa-solid fa-cart-plus text-success fa-2x"></i>
              </Button>
            </div>
          </Card.Body>
        </Card>
        </Col>
        )): <div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center' >
          <img height={'250px'} src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
          <h3 className='fw-bolder text-primary'>Your Wishlist is Empty! 😒</h3>
          <Link className='btn btn-success rounded mt-3' to={'/'} >Back to Homepage</Link>
        </div>
        }
      </Row>
    </div>
  )
}

export default WishList