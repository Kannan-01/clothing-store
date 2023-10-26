import React from 'react'
import { Link } from 'react-router-dom'
import { Nav , Navbar , Container, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
        <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary text-light position-fixed top-0 w-100 mb-5">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className="fa-solid fa-truck-fast me-2" style={{color: '#ffffff'}}></i>E Kart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className=''><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-heart text-danger me-2'></i>Wishlist <Badge bg="light">{wishlist.length}</Badge>
            </Link></Nav.Link>
            <Nav.Link className=''><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart <Badge className='ms-2' bg="light">{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header