import "../Css/DesktopMobile.css"

function DesktopTable({ products }) {
  return (
      <div className="products-table">
          <div className="grid-header">
              <span>Name</span>
              <span>Category</span>
              <span>Price</span>
              <span>Status</span>
              <span>Quantity</span>
              <span>Actions</span>
          </div>

          {products.map(p => (
              <div  key={p.id}>
                  <div className="table-body">
                      <span className="product-name-image">
                          <span className="product-image-container">
                              {/*<img src={p.image } alt="product"></img>*/}
                          </span>

                          <span className="product">
                              {p.name}
                          </span>
                      </span>

                      <span>{p.category}</span>
                      <span>${p.price}</span>
                      <span className={p.stock.toLowerCase().replace(" ", "_")}>{p.stock}</span>
                      <span>100</span>
                      <span>
                          <button>
                              <i className="fa-solid fa-pen"></i>
                          </button>

                          <button>
                              <i className="fa-solid fa-trash"></i>
                          </button>
                      </span>
                  </div>
              </div>
          ))}

      </div>
  );
}

export default DesktopTable;