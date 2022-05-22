import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import QuoteBox from "./components/QuoteBox/QuoteBox";

function App() {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Quotesland</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white font-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-white">
                More Quotes
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                About
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <QuoteBox />
      </>
    </div>
  );
}

export default App;
