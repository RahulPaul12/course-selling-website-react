
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
   
    return (
        <div>
            {/* Navbar */}

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/favicon.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Learn Programming</Navbar.Brand>
                    <Nav className="justify-content-end" defaultActiveKey="/home">
                        <Nav.Link> <Link className="navColor" to="/body">Home</Link> </Nav.Link>
                        <Nav.Link> <Link className="navColor" to="/courses">Courses</Link> </Nav.Link>
                        <Nav.Link><Link className="navColor" to="/contact">Contact</Link></Nav.Link>
                        <Nav.Link><Link className="navColor" to="/about">About Us</Link></Nav.Link>
                        <Nav.Link><Link to="/signup" className="ps-1 navColor"><Button variant="secondary">Sign Up</Button></Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;