import React from 'react';
import '../App.css';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';


export function NavBar() {
  
    return (
        <Navbar bg="#e3f2fd" variant="#e3f2fd"  >
        <Navbar.Brand href="#home">Popular 2020 Search Trends</Navbar.Brand>
        <Nav className="mr-auto" >
{          // <Nav.Link href="#home">Home</Nav.Link>
          // <Nav.Link href="#features">Features</Nav.Link>
          // <Nav.Link href="#pricing">Pricing</Nav.Link> 
}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}