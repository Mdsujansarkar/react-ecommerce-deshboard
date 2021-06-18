import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
   
  
          <Nav className="mr-auto">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
          </Nav>
         
 
      </Navbar>
    </div>
  )
}
export default Header;