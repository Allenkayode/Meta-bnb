
import React from "react"

import  Form from "react-bootstrap/Form"
import  Button from "react-bootstrap/Button"
import jpeg from "../src/images/Group 4028.png"
import meta_mage from "../src/images/metaImage.png"
import meta from "../src/images/frame.png"

import frame1 from "../src/images/Frame 143 (1).png"
import frame2 from "../src/images/Frame 143 (2).png"
import frame3 from "../src/images/Frame 143 (3).png"
import frame4 from "../src/images/Frame 143 (4).png"
import frame5 from "../src/images/Frame 143 (5).png"
import frame6 from "../src/images/Frame 143 (6).png"
import frame7 from "../src/images/Frame 143 (7).png"
import frame8 from "../src/images/Frame 143 (8).png"



import Nav from './componets/nav'
import Foot from "./componets/footer"

import './Home.css';
import "./App.css"





function Home() {
 
  

  return (
    <div >
      <div className="App">
     <nav>
      <Nav />
      </nav>
         
      </div>
       
        
       
     <body>
      <div className="body_element">
      <div  className="body-text">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>.
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your
           imagination to reality at your comfort zone.
           </p>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button  className="search-btn3">Search</Button>
          </Form>
      </div>
      <div className="images">
        <img className="image" src={jpeg} alt="icon" />

      </div>
      </div>
      <div >
      <img className="openSea" src={meta} alt="icon" />

      </div>
      <div className="locations">
        <div>
        <h1 className="word">Inspiration for your next adventure</h1>
        </div>
        
      </div>
      
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col  card">
    <img src={frame1} alt="frame"/>

    </div>
    <div class="col card">
    <img src={frame2} alt="frame"/>

    </div> <div class="col card">
    <img src={frame3} alt="frame"/>

    </div> <div class="col card">
    <img src={frame4} alt="frame"/>

    </div> <div class="col card">
    <img src={frame5} alt="frame"/>

    </div> <div class="col card">
    <img src={frame6} alt="frame"/>

    </div> <div class="col card">
    <img src={frame7} alt="frame"/>

    </div> <div class="col card">
    <img src={frame8} alt="frame"/>

    </div>
    
  </div>
</div>

      <div className="sec_body">
        <div className="metaContent">
        <div className="meta">
         <h3 className="paragr">Metabnb NFTs</h3>
         <p className="parag" >Discover our NFT gift cards collection. Loyal customers gets amazing gift cards 
          which are traded as NFTs.
          These NFTs gives our customer access to loads of our exclusive services.
         </p>
         <a  href="/NFT">
          <button className="btn2">Learn more</button>
         </a>
         </div>

         <div >
         <img className="imageMeta" src={meta_mage} alt="icon" />

         </div>
         </div>

         <div>

         </div>
      </div>
     </body>
    
    <Foot />
  </div>
  );
}

export default Home;
