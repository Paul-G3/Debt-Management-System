import "../Css/DesktopMobile.css"
function MobileCard({products }) {
    return (
        <div>
        {

            products.map(p => (

                <div className="product-card" key={p.id}>

                    <div className="product-details">
                        <div className="product-image-container-mobile">
                            <img></img>
                        </div>

                        <div className="">
                            <p className="product-price-mobile">R{p.price }</p>
                            <p className="product-name-mobile">{p.name}</p>
                            <p className="category-mobile">{p.category} </p>
                            <p className="quantity-mobile">100 Qty</p>
                            <p className="status-mobile">
                                <span className={p.stock.toLowerCase().replace(" ","-")}></span>  
                                <span className={p.stock.toLowerCase().replace(" ", "_")}>{p.stock}</span>
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