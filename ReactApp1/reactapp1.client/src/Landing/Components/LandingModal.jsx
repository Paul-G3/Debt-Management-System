import '../Css/LandingModal.css'

function LandingModal({ children,title, close}) {
  return (
      <>
          <div className="modal-landing">           
              <div className="modal-content">
                  <button className="close-modal-btn" onClick={close }>X</button>
                  <h1>{title}</h1>
                  {children}
 
              </div> 
          </div>  
      </>
  );
}

export default LandingModal;