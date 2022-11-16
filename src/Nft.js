import React from "react";



import locate from "../src/images/Frame 13.png"
import frame1 from "../src/images/Frame 143 (1).png"
import frame2 from "../src/images/Frame 143 (2).png"
import frame3 from "../src/images/Frame 143 (3).png"
import frame4 from "../src/images/Frame 143 (4).png"
import frame5 from "../src/images/Frame 143 (5).png"
import frame6 from "../src/images/Frame 143 (6).png"
import frame7 from "../src/images/Frame 143 (7).png"
import frame8 from "../src/images/Frame 143 (8).png"

import frame9 from "../src/images/Frame 143 (9).png"
import frame10 from "../src/images/Frame 143 (10).png"
import frame11 from "../src/images/Frame 143 (11).png"
import frame12 from "../src/images/Frame 143 (12).png"
import frame13 from "../src/images/Frame 143 (13).png"
import frame14 from "../src/images/Frame 143 (14).png"
import frame15 from "../src/images/Frame 143 (15).png"
import frame16 from "../src/images/Frame 143 (16).png"


import './Home.css';
import Navb from './componets/nav';
import Footer from "./componets/footer";




function Nft(){

   
  
return (
    <div >
      <div className="App">
     <nav>
      <Navb />
      </nav>
         
      </div>
      
      
       <div className="navbar2">
       <select class="form-select" aria-label="Default select example">
  <option selected>Restaurant</option>
  <option value="1">Cottage</option>
  <option value="2">castle</option>
  <option value="3">Fantasy city</option>
  <option value="3">Beach</option>
  <option value="3">Cabins</option>
  <option value="3">off-Grids</option>
  <option value="3">Farm</option>



</select>
       
  
       </div>

       <div className="nav2" >
        <h3>Restaurant</h3>
        <h3>Cottage</h3>
        <h3>castle</h3>
        <h3>Fantasy city</h3>
        <h3>Beach</h3>
        <h3>Cabins</h3>
        <h3>off-Grid</h3>
        <h3>Farm</h3>
        <div class="form-outline">
  <i class="fas fa-exclamation-circle trailing"></i>
  <input type="text" placeholder="Location" id="form1" class="form-control form-icon-trailing"  />

  
</div>
       </div>
        
       
     <body>
      <div className="options">
        </div>
           
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col  cardi">
    <img src={frame5} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame2} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame3} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame4} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame1} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame6} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame7} alt="frame"/>

    </div> <div class="col cardi">
    <img src={frame8} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame9} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame10} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame11} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame12} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame13} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame14} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame15} alt="frame"/>

    </div>
    <div class="col cardi">
    <img src={frame16} alt="frame"/>

    </div>
    
    
  </div>
</div>
     </body>

     <Footer/>
  </div>
  );
}

export default Nft;




