import '../Css/Products.css'
import Button from "../../SharedComponents/Components/Button";
import SearchInput from '../../SharedComponents/Components/SearchInput';
import DesktopTable from '../Components/DesktopTable';
import MobileCard from '../Components/MobileCard';
import LandingModal from '../../Landing/Components/LandingModal';
import React, { useState,useEffect } from "react";

function Products() {
    const basePath = import.meta.env.VITE_API_BASE_URL;    
    const [ProductsData, setProductsData] = useState([]);

    //Modal state variables
    const [ProductName, setProductName] = useState(null);
    const [Category, setCategory] = useState(null);
    const [Price, setPrice] = useState(null);
    const [Quantity, setQuantity] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const [EditModalData, setEditModalData] = useState();
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setopenEditModal] = useState(false);
    const openingModal = () => { setOpenModal(true) }
    const CloseEditModal = () => { setopenEditModal(false) }

    //functions

    const SaveChanges = () => {

        setEditModalData(prev => {
            const { image, imageUrl, ...rest } = prev;
            return rest;
        });


        fetch(`${basePath}/Owner/edit-product-details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(EditModalData)
        })
            .then(() => {
                GetAllProduct();
                setopenEditModal(false);
            });
    }

    const editProductDetais = (product) => {
        setEditModalData(product);
        console.log(product);
        setopenEditModal(true);
    }
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

    const DeleteProduct = (productId) => {
        fetch(`${basePath}/Owner/delete-product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productId)
        })
            .then(() => {
                GetAllProduct(); //refresh after delete
            });
    };

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
          <DesktopTable products={ProductsData} onDelete={DeleteProduct} editProduct={editProductDetais} />

          {
              openEditModal && (
                  <LandingModal title="Edit Product" close={CloseEditModal }>

                      <div className="add-products-container">

                          {/* Product Name */}
                          <div className="add-input-container">
                              <input
                                  type="text"
                                  placeholder="Product Name"
                                  value={EditModalData?.name || ""}
                                  onChange={(e) =>
                                      setEditModalData(prev => ({
                                          ...prev,
                                          name: e.target.value
                                      }))
                                  }
                              />
                              <span className="required-asterick">*</span>
                          </div>

                          {/* Category */}
                          <div className="add-input-container">
                              <select
                                  value={EditModalData?.category || ""}
                                  onChange={(e) =>
                                      setEditModalData(prev => ({
                                          ...prev,
                                          category: e.target.value
                                      }))
                                  }
                              >
                                  <option value="">Category</option>
                                  <option value="Liquid">Liquid</option>
                                  <option value="Bread">Bread</option>
                                  <option value="Protein">Protein</option>
                              </select>
                              <span className="required-asterick">*</span>
                          </div>

                          {/* Price */}
                          <div className="add-input-container">
                              <input
                                  type="text"
                                  placeholder="Price"
                                  value={EditModalData?.price || ""}
                                  onChange={(e) =>
                                      setEditModalData(prev => ({
                                          ...prev,
                                          price: e.target.value
                                      }))
                                  }
                              />
                              <span className="required-asterick">*</span>
                          </div>

                          {/* Quantity */}
                          <div className="add-input-container">
                              <input
                                  type="number"
                                  placeholder="Quantity"
                                  value={EditModalData?.quantity || ""}
                                  onChange={(e) =>
                                      setEditModalData(prev => ({
                                          ...prev,
                                          quantity: e.target.value
                                      }))
                                  }
                              />
                              <span className="required-asterick">*</span>
                          </div>

                      </div>

                      <div>
                          <Button
                              text="Save Changes"
                              handleClick={SaveChanges}
                          />
                      </div>

                  </LandingModal>
              )
          }


          {
              openModal && (<LandingModal title="Add Product" close={() => setOpenModal(false) }>                

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
              </LandingModal>)
          }

      </div>
  );
}

export default Products;