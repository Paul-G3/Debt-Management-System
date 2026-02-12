import "../Css/DesktopMobile.css"
function MobileCard({ products }) {
    const apiBase = import.meta.env.VITE_API_BASE_URL;
    return (
        <div>
        {

            products.map(p => (

                <div className="product-card" key={p.productID}>
                    <input type="hidden" value={p.productID }></input>

                    <div className="product-details">
                        <div className="product-image-container-mobile">
                            <img src={`https://localhost:7242${p.imageUrl}`} alt={p.name} />
                        </div>

                        <div className="">
                            <p className="product-price-mobile">R{p.price.toFixed(2)}</p>
                            <p className="product-name-mobile">{p.name}</p>
                            <p className="category-mobile">{p.category} </p>
                            <p className="quantity-mobile">{p.quantity } Qty</p>
                            <p className="status-mobile">
                                <span className={p.status.toLowerCase().replace(/\s+/g, "-")}></span>  
                                <span className={p.status.toLowerCase().replace(/\s+/g, "_")}>{p.status}</span>
                            </p>
                        </div>
                    </div>

                    <div className="product-button">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    <hr></hr>
                </div>
            ))
        }
        </div>
  );
}

export default MobileCard;