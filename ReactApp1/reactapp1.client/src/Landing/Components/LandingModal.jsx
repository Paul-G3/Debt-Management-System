import '../Css/LandingModal.css'

function LandingModal({ children,title}) {
  return (
      <>
          <div className="modal-landing">           
              <div className="modal-content">
                  <h1>{title}</h1>
                  {children}
 
              </div> 
          </div>  
      </>
  );
}

export default LandingModal;