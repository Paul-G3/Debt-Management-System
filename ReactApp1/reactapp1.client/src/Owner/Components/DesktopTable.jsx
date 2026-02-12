import "../Css/DesktopMobile.css"

function DesktopTable({ products, onDelete, editProduct }) {
    const basePath = import.meta.env.VITE_API_BASE_URL;

    const DeleteProduct = (productId) => {
        fetch(`${basePath}/Owner/delete-product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productId)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    }


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
              <div key={p.productID}>
                  <input type="hidden" value={p.productID }></input>
                  <div className="table-body">
                      <span className="product-name-image">
                          <span className="product-image-container">
                              <img src={`https://localhost:7242${p.imageUrl}`} alt={p.name} />
                          </span>

                          <span className="product">
                              {p.name}
                          </span>
                      </span>

                      <span>{p.category}</span>
                      <span className="price-product">R{p.price.toFixed(2)}</span>
                      <span className={p.status.toLowerCase().replace(" ", "_")}>{p.status}</span>
                      <span>{p.quantity} Qty</span>
                      <span>
                          <button className="edit-button-desktop" onClick={() => editProduct(p) }>
                              <i className="fa-solid fa-pen"></i>
                          </button>

                          <button className="delete-button-desktop" onClick={() => onDelete(p.productID) }>
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