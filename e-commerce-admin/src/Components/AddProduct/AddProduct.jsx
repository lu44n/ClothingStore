import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {

  const[image,setImage] = useState(false);
  const [productDetails,setProductDetails] = useState({
      name:"",
      image:"",
      category:"",
      new_price:"",
      old_price:""
  });

  const AddProduct = async () => {
    
    let dataObj;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {dataObj=data});

    if (dataObj.success) {
      product.image = dataObj.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((data) => {data.success?alert("Product Added"):alert("Failed")});
      
    }
  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
    }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Nome Produto</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Escreva aqui" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Preço Original</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Escreva aqui" />
        </div>
        <div className="addproduct-itemfield">
          <p>Preço desconto</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Escreva aqui" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Categoria do Produto</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="women">Feminino</option>
          <option value="men">Masculino</option>
          <option value="kid">Infantil</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Imagem do produto</p>
        <label for="file-input">
          <img className="addproduct-thumbnail-img" src={!image?upload_area:URL.createObjectURL(image)} alt="" />
        </label>
        <input onChange={(e)=>{imageHandler(e)}} type="file" name="image" id="file-input" hidden />
      </div>
      <button className="addproduct-btn" onClick={()=>{AddProduct()}}>Adicionar</button>
    </div>
  );
};

export default AddProduct;
