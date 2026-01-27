
import '../Css/DashBoard.css'
function DashBoard() {
  return (
      <div className="owner-dashboard">

          <div className="dashboard-card">
              <h2>Total AMount Owed</h2>

          <div className="chart"></div>
              <p className="number">R1000</p>
              <div>
                  <button>View</button>
              </div>
          </div>

          <div className="dashboard-card">
              <h2>Total AMount Owed</h2>

              <div className="chart"></div>
              <p className="number">R1000</p>
              <div>
                  <button>View</button>
              </div>
          </div>

          <div className="dashboard-card">

              <h2>Total Customers Owing</h2>
              <div className="chart"></div>
              <p className="number">4</p>
              <div>
              <button>View</button>
              </div>
          </div>

          <div className="dashboard-card">
              <h2>Total Products Owing</h2>
              <div className="chart"></div>
              <p className="number">4</p>
              <div>
                  <button>View</button>
              </div>
          </div>

          <div className="dashboard-card">
              <h2>Total Customer Owing</h2>
              <div className="chart"></div>
              <p className="number">4</p>
              <div>
                  <button>View</button>
              </div>
          </div>
      
      </div>
  );
}

export default DashBoard;