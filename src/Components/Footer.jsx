import React from 'react'
import { Container } from 'react-bootstrap'
function Footer() {
  return (
    <footer className="py-5 bg-black w-100">
    <Container className="px-5">
      <p className="m-0 text-center text-white small">
        Copyright &copy; TeeRex {new Date().getFullYear()}
      </p>
    </Container>
  </footer>
  )
}

export default Footer