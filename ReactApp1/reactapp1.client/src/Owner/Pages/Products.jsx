import '../Css/Products.css'
import Button from "../../SharedComponents/Components/Button";
import SearchInput from '../../SharedComponents/Components/SearchInput';
import DesktopTable from '../Components/DesktopTable';
import MobileCard from '../Components/MobileCard';
import LandingModal from '../../Landing/Components/LandingModal';
import React, { useState,useEffect } from "react";

function Products() {
    const basePath = import.meta.env.VITE_API_BASE_URL;
    const [openModal, setOpenModal] = useState(false);
    const openingModal = () => { setOpenModal(true) }
    const [ProductsData, setProductsData] = useState([]);
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

    //Modal state variables
    const [ProductName, setProductName] = useState(null);
    const [Category, setCategory] = useState(null);
    const [Price, setPrice] = useState(null);
    const [Quantity, setQuantity] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };
    function AddProduct() {

        const formData = new FormData();
        formData.append("Name", ProductName);
        formData.append("Category", Category);
        formData.append("Price", Price);
        formData.append("Quantity", Quantity);
        formData.append("Image", imageFile);

        fetch(`${basePath}/Owner/add-product`, {
            method: "POST",
            body: formData
        })

        GetAllProduct();
    }

    function GetAllProduct() {
        fetch(`${basePath}/Owner/get-products`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setProductsData(data);
                console.log(data);
            });

    }

    useEffect(() => {
        GetAllProduct();

    }, []);

  return (
      <div>      
          <div className="products-header">

              <div>
                  <Button text="New Products" handleClick={openingModal} />

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

          <MobileCard products={ProductsData} />
          <DesktopTable products={ProductsData} />

          {
              openModal && (<LandingModal title="Add Product">                

                  <div className="add-products-container">

                      <div className="add-input-container">
                          <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value) }></input>
                          <span className="required-asterick">*</span>
                      </div>

                      <div className="add-input-container">
                          <select onChange={(e) => setCategory(e.target.value)}>
                              <option>Category</option>
                              <option value="Liquid">Liquid</option>
                              <option value="Bread">Bread</option>
                              fd<option value="Protein">Protein</option>
                          </select>
                          <span className="required-asterick">*</span>
                      </div>

                      <div className="add-input-container">
                          <input type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)}></input>
                          <span className="required-asterick">*</span>
                      </div>

                      <div className="add-input-container">
                          <input type="number" placeholder="Qunatity" onChange={(e) => setQuantity(e.target.value)}></input>
                          <span className="required-asterick">*</span>
                      </div>
                  </div>

                  <div className="image-upload">
                      <input
                          type="file"
                          id="product-image"
                          accept="image/*"
                          onChange={handleImageChange}
                      />
                      <label htmlFor="product-image">
                          <i className="fa-solid fa-camera"></i>
                          <span>Upload Image</span>
                      </label>
                  </div>

                  <div className="selected-image">
                  </div>
                  <div>
                      <Button text="Add" handleClick={AddProduct}></Button>
                  </div>
              </LandingModal>


              )
          }

      </div>
  );
}

export default Products;