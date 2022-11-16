import React from "react"


import footer_1 from "../images/Footer_icon.png"
import footer_2 from "../images/footer_2.png"
import facebook from "../images/facebook.png"
import insta from "../images/instagram.png"
import tweep from "../images/twitter.png"




import '../Home.css';
import "../App.css";


function Footer(){
    return(
      <div>
        
     
     <footer>
      <div className="footer_wrapper">
        <div className="footer_footer">
       <div className="footerImg">
          <div className="footer_logo">
          <img src={footer_1} alt="icon"/>
          <img src={footer_2} alt="icon"/>
          </div>
          <div className="footer_footer fooT">
            <img src={facebook} alt="icon"/>
            <img src={insta} alt="icon"/>
            <img src={tweep} alt="icon"/>


          </div>
          </div>

          <div className="footer_list">
            <div>
              <ul>
                <h3>community</h3>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </div>

            <div>
              <ul>
                <h3>places</h3>
                <li>castles</li>
                <li>Beach</li>
                <li>Farms</li>
                <li>Learn more</li>
              </ul>
            </div>

            
            <div>
              <ul>
                <h3>About us</h3>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          </div>

          <div className="copyR">
        <p>&copy; 2022 Metabnb</p>
      </div>
      </div>
      
     </footer>
      </div>
    );
}

export default Footer;