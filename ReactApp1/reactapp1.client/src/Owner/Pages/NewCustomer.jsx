import "../Css/NewUser.css"
import Button from "../../SharedComponents/Components/Button";
import React, { useState, useEffect } from "react";

function NewCustomer() {

    //variables
    const basePath = import.meta.env.VITE_API_BASE_URL;    
    const [UserName, setUserName] = useState(null);
    const [Surname, setSurname] = useState(null);
    const [IdNumber, setIdNumber] = useState(null);
    const [Title, setTitle] = useState(null);
    const [Email, setEmail] = useState(null);
    const [CellPhone, setCellPhone] = useState(null);
    const [ConfirmEmail, setConfirmEmail] = useState(null);
    const [ConfirmCellPhone, setConfirmCellPhone] = useState(null);

    const CreateCustomer = () => {

        const User = {
            UserName: UserName,
            Surname: Surname,
            Title: Title,
            Email: Email,
            PhoneNumber: CellPhone,
            IDNumber : IdNumber
        }


        fetch(`${basePath}/Owner/create-new-customer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(User)
        })

      
    }
  return (
      <div className="new-customer">

          <h1>Create New User</h1>

          <div className="">
              <fieldset>
                  <legend>Personal Information</legend>

                  <div className="user-new-container">
                      <div className="new-user-input-container">

                          <i className="fa-solid fa-user"></i>
                          <input type="text" placeholder="Enter Name"
                              onChange={(e)=> setUserName(e.target.value)}
                          />
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">
                          <i className="fa-solid fa-user"></i>
                          <input type="text" placeholder="Enter Surname"
                              onChange={(e) => setSurname(e.target.value)}
                          />
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">
                          <i className="fa-solid fa-id-card-clip"></i>
                          <input type="text" placeholder="Enter ID Number"
                              onChange={(e) => setIdNumber(e.target.value)}
                          />
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">

                          <i className="fa-solid fa-person-half-dress"></i>
                          <select onChange={(e) => setTitle(e.target.value)}>
                              <option value="">Choose Title</option>
                              <option value="Mr">Mr</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Ms">Ms</option>
                              <option value="Dr">Dr</option>
                          </select>
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>
                  </div>
                
              </fieldset>


              <fieldset>
                  <legend>Contact Information</legend>

                  <div className="user-new-container">
                      <div className="new-user-input-container">

                          <i className="fa-solid fa-envelope"></i>
                          <input type="text" placeholder="Email Address"
                              onChange={(e) => setEmail(e.target.value)}
                          ></input>
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">

                          <i className="fa-solid fa-envelope"></i>
                          <input type="text" placeholder="Confirm Email Address"
                              onChange={(e) => setConfirmEmail(e.target.value)}
                          ></input>
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">
                          <i className="fa-solid fa-phone"></i>
                          <input type="text" placeholder="CellPhone"
                              onChange={(e) => setCellPhone(e.target.value)}
                          ></input>
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>

                      <div className="new-user-input-container">

                          <i className="fa-solid fa-phone"></i>
                          <input type="text" placeholder="Confirm CellPhone"
                              onChange={(e) => setConfirmCellPhone(e.target.value)}
                          ></input>
                          <span className="required-asterick">*</span>
                          <p></p>
                      </div>
                  </div>

                  <div className="new-user-button">
                      <Button text="Create" handleClick={CreateCustomer}></Button>
                  </div>
                 
              </fieldset>          
          </div>
      </div>
  );
}

export default NewCustomer;