import '../Css/Hero.css'
import LandingPic from '../../Images/Landing.JPG'
import LandingModal from './LandingModal';
import React, { useState } from "react";
function Hero() {

    const [CreateAccountModal, setCreateAccountModal] = useState(false);
  return (
      <>        

          <div className="Hero-container">

              <div className="hero-right-side">
                  <h1 className="hero-heading">Customer debt</h1>
                  <p className="sub-heading">Stay in control of customer debt</p>
                  <p className="bottom-heading">Track & Manage Debts</p>
                  <div className="features">Features</div>
                  <ul className="hero-features">
                      <li> View customer balances</li>
                      <li> Manage multiple loans per customer</li>
                      <li> Track repayment dates</li>                      
                      <li> Receive timely notifications</li>
                  </ul>                
              </div>

              <div className="landing-image">
                  <img src={LandingPic} alt="Landing pic"></img>
              </div>
          </div>

          <div className="second-block">
              <h2>Our Services</h2>

              <div className="services-container">

                   <div className="service-block"></div>
                   <div className="service-block"></div>
                   <div className="service-block"></div>
                   <div className="service-block"></div>
                   
              </div>

          </div>


          <form className="login-form">
              <h1>Login</h1>
              <div>
                  <input type="text"></input>
                   <span></span>
              </div>

              <div>
                  <input type="password"></input>
                  <span></span>
              </div>

              <div>
                  <p>Forgot Password?Cilck to change</p>
                  <p>Click to register</p>
              </div>

              <div className="login-button-container">
                  <button type="submit" className="Login-btn">Login</button>
              </div>
          </form>

          <footer>

          </footer>

          { 
              setCreateAccountModal && (<LandingModal title="Create Account">
                  <button className="close-modal-btn">X</button>

                  <div className="create-account">
                      <div>
                          <input type="text" placeholder="Name"></input>
                      </div>

                      <div>
                          <input type="text" placeholder="Surname"></input>
                      </div>

                      <div>
                          <select>
                              <option>Choose Gender</option>
                              <option>Male</option>
                              <option>Female</option>

                          </select>
                      </div>

                      <div>
                          <input type="text" placeholder="ID number"></input>
                      </div>

                      <div>
                          <input type="text" placeholder="Email"></input>
                      </div>

                      <div>
                          <input type="text" placeholder="Cellphone Number"></input>
                      </div>

                      <div>
                          <input type="text" placeholder="Store Name"></input>
                      </div>

                      <div>
                          <input type="text" placeholder="Store telphone number"></input>
                      </div>

                  </div>

                  <div>
                      <button>Create</button>
                  </div>
              </LandingModal>)
          }

         
      </>
  );
}

export default Hero;