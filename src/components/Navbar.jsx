import { Navbar as NavBarBT ,Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



const Navbar = () =>{
    return(
        <NavBarBT bg="dark" variant="light">
        <Container>
          <Nav className="me-auto">
          <Link to="/" className="text-white ms-3 text-decoration-none">
              Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
              Contacto
          </Link>
          <Container classname="d-flex">
            
          </Container>
          </Nav>   
        <Link to="/" className="text-white ms-3 text-decoration-none">
        <h2>Happy Cake🎂</h2>
        </Link>  
        </Container>
      </NavBarBT>
    )
}

export default Navbar