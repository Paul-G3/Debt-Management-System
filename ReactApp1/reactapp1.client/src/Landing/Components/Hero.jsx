import '../Css/Hero.css'
import LandingPic from '../../Images/Landing.WEBP'
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
              <h1>Our Services</h1>

              <div className="services-container">

                  <div className="service-block">
                      <div className="service-icon">
                          <i className="fa-solid fa-users" ></i>
                      </div>
                      <h2>Debtor Management</h2>
                      <p>Manage debtor profiles, balances, and payment history
                          from one secure and centralized system.
                      </p>

                      <div className="learn-more-container">
                          <span>Learn more</span>
                          <i className="fas fa-arrow-right"></i>
                      </div>
                  </div>

                  <div className="service-block">
                      <div className="service-icon">
                          <i className="fas fa-sync-alt"></i>
                      </div>
                      <h2>Debt Recovery & Follow-Ups</h2>
                      <p>Automate reminders and follow-ups to improve recovery
                          rates and reduce overdue accounts.
                      </p>

                      <div className="learn-more-container">
                          <span>Learn more</span>
                          <i className="fas fa-arrow-right"></i>
                      </div>
                  </div>

                  <div className="service-block">
                      <div className="service-icon">
                          <i className="fas fa-chart-bar"></i>
                      </div>
                      <h2>Reporting & Compliance</h2>                      
                      <p>Generate accurate financial reports and maintain
                          compliance-ready records for audits and reviews.
                      </p>

                      <div className="learn-more-container">
                          <span>Learn more</span>
                          <i className="fas fa-arrow-right"></i>
                      </div>
                  </div>

                  <div className="service-block">
                      <div className="service-icon">
                          <i className="fas fa-chart-line"></i>
                      </div>
                      <h2>Debt Balance Tracking</h2>
                      <p>Monitor outstanding balances in real time and track
                          reductions as payments are made over time.
                      </p>

                      <div className="learn-more-container">
                          <span>Learn more</span>
                          <i className="fas fa-arrow-right"></i>
                      </div>
                  </div>
                   
              </div>

          </div>


          <form className="login-form">
              <h1>Login</h1>
              <div>
                  <input type="text" placeholder="User name"></input>
                  <i className="fa-solid fa-envelope login-user-icon"></i>

                   <span></span>
              </div>

              <div>
                  <input type="password" placeholder="Password"></input>
                  <i className="fa-solid fa-lock login-lock"></i>
                  <span></span>
              </div>

              <div>
                  <p>Forgot Password?</p>
                  <p onClick={() => setCreateAccountModal(true)}>Dont have an Account ? <span className="click-to-register">Click here  to register </span></p>
              </div>

              <div className="login-button-container">
                  <button type="submit" className="Login-btn">Login</button>
              </div>
          </form>

          <div className="why-us-container">
              <h2>Why Business Prefer Us</h2>
              <div className="inner-container-why-us">
                   <div className="why-right">
                      <p className="right-one">2K+</p>
                      <p className="right-two">Business are already using Khokha</p>
                  </div>
                <div></div>
              </div>
          </div>

          <footer className="landing-footer">

              <div className="follow-us-container">
                  <h2>Follow us</h2>
                  <a href="">
                      <i className="fa-brands fa-instagram" style={{ color: " #ed0ce6" }} ></i>
                      <span>Instagram</span>
                  </a>

                  <a href="">
                      <i className="fa-brands fa-facebook" style={{ color: "#0816dd"}} ></i>
                      <span>Facebook</span>
                  </a>

                  <a href="">
                      <i className="fa-brands fa-tiktok" style={{color: "#030202"}}></i>
                      <span>TikTok</span>
                  </a>

                  <a href="">
                      <i className="fa-brands fa-linkedin" style={{ color: "#0011ff" }} ></i>
                      <span>LinkedIn</span>
                  </a>

              </div>

              <div className="footer-contact">
                  <h2>Contact Us</h2>

                  <a href="">
                      <i className="fa-solid fa-envelope"></i>
                      <span>goodmantshabalala99@gmail.com</span>                      
                  </a>

                  <a href="">
                      <i className="fa-solid fa-phone" style={{ color: "green" }}></i>
                      <span>
                          +27 63 493 5071
                      </span>
                  </a>

                  <a href="">
                      <i className="fa-solid fa-location-dot" style={{ color: "orangered" }}></i>
                      <span>
                          South Africa
                      </span>
                  </a>
              </div>

              <div className="footer-about">
                  <h2>About</h2>
                  <p>Helping small businesses track and manage customer debt effectively.</p>

                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
              </div>

          </footer>

          { 
              CreateAccountModal && (<LandingModal title="Create Account">
                  <button className="close-modal-btn" onClick={() => setCreateAccountModal(false)}>X</button>

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