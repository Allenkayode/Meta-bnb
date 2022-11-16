import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




import '../Home.css';
import "../App.css";

import Home_icon from "../images/Home_icon.png"
import Meta from "../images/Meta_header.png"
import metamask from "../images/Frame 37.png"
import Wallet from "../images/Frame 38.png"

function CollapsibleExample() {
   

  return (
    <div>
    <div className='nav-center'>
    <Navbar collapseOnSelect expand="lg"  variant="light">
        
      <Container className='nav-center'>
        <Navbar.Brand href="#home">
        <div className="nav_logo">
            <img src={Home_icon} alt="icon" />
            <img src={Meta} alt="icon" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  bg="dark"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navLinks">
            <Nav.Link className="links" href="/">Home</Nav.Link>
            <Nav.Link className="links" href="/NFT">Places to stay</Nav.Link>
            <Nav.Link className="links" href="/">Nfts</Nav.Link>
            <Nav.Link className="links" href="/">communties</Nav.Link>

           
          </Nav>
         
          
             {/* <!-- Button trigger modal --> */}
<button type="button" class="btn nav-buttons btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Connect to wallet
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Connect wallet</h5>
        <button type="button" class="btn-close btnx" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="d-grid gap-2">
  <button class="btn btn-light" type="button">
    <img className='connect' src={metamask} alt="pic"/>
  </button>
  <button class="btn btn-light" type="button">
  <img className='connect' src={Wallet} alt="pic"/>
  </button>
</div>
      </div> 
    </div>
  </div>
  </div>
           
           
        </Navbar.Collapse>
      </Container>

   

    </Navbar>
   
     </div>
     </div>
   
  );
}

export default CollapsibleExample;