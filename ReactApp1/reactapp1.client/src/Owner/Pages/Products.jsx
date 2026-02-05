import '../Css/Products.css'
import Button from "../../SharedComponents/Components/Button";
import SearchInput from '../../SharedComponents/Components/SearchInput';
import DesktopTable from '../Components/DesktopTable';
import MobileCard from '../Components/MobileCard';
import LandingModal from '../../Landing/Components/LandingModal';

function Products() {
    const dummyProducts = [
        {
            id: 1,
            name: "Paracetamol 500mg",
            category: "Pain Relief",
            price: 35.00,
            stock: "In Stock",
            image: "https://via.placeholder.com/40"
        },
        {
            id: 2,
            name: "Ibuprofen 200mg",
            category: "Pain Relief",
            price: 48.50,
            stock: "Low Stock",
            status:"lowstock",
            image: "https://via.placeholder.com/40"
        },
        {
            id: 3,
            name: "Amoxicillin 250mg",
            category: "Antibiotics",
            price: 120.00,
            stock: "In Stock",
            image: "https://via.placeholder.com/40"
        },
        {
            id: 4,
            name: "Vitamin C Tablets",
            category: "Supplements",
            price: 75.00,
            stock: "Out of Stock",
            image: "https://via.placeholder.com/40"
        },
        {
            id: 5,
            name: "Cough Syrup 100ml",
            category: "Cold & Flu",
            price: 60.00,
            stock: "In Stock",
            image: "https://via.placeholder.com/40"
        }
    ];

  return (
      <div>      
          <div className="products-header">

              <div>
                  <Button text="New Products"/>

              </div>

              <SearchInput placeHolder="search......" />

              <div className="filter-container">
                  <i className="fa-solid fa-filter"></i>
                  <select>
                      <option>Filterby by </option>
                      <option>In-Stock</option>
                      <option>Out of Stock</option>
                  </select>
              </div>
              
          </div>

          <MobileCard products={dummyProducts} />
          <DesktopTable products={dummyProducts} />


          <LandingModal title="Add Product">             

              <div>
                  <input type="image"></input>
              </div>

              <div className="add-products-container">

                  <div>
                      <input type="text" placeholder="Product Name"></input>
                      <span></span>
                  </div>

                  <div>
                      <select>
                        <option>Category</option>
                        <option>Liquid</option>
                        <option>Bread</option>
                        fd<option>Protein</option>
                      </select>
                      <span></span>
                  </div>

                  <div>
                      <input type="text" placeholder="Price"></input>
                      <span></span>
                  </div>

                  <div>
                      <input type="number" placeholder="Qunatity"></input>
                      <span></span>
                  </div>
              </div>

              <div>
                <button>Add</button>
              </div>
          </LandingModal>
      </div>
  );
}

export default Products;