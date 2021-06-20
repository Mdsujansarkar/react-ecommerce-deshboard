import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ecoommerce</Navbar.Brand>
        <Nav className="mr-auto nabbar_wrapper">
          <Link to="/login">Login</Link>
          <Link to="/add">Add Product</Link>
          <Link to="/register">Register</Link>
          <Link to="/updated">Update Product</Link>


        </Nav>


      </Navbar>
    </div>
  )
}
export default Header;