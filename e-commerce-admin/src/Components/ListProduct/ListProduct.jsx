import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeProduct = async (id) => {
      await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id}),
    })

    fetch('http://localhost:4000/allproducts') 
    .then((res) => res.json()) 
    .then((data) => setAllProducts(data))

    }

  return (
    <div className="listproduct">
      <h1>Lista de todos os Produtos</h1>
      <div className="listproduct-format-main">
          <p>Produtos</p>
          <p>Nome</p>
          <p>Preço Original</p>
          <p>Preço Desconto</p>
          <p>Categoria</p>
          <p>Remover</p>
        </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="listproduct-format">
                <img className="listproduct-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.old_price}</p>
                <p>${e.new_price}</p>
                <p>{e.category}</p>
                <img className="listproduct-remove-icon" onClick={()=>{removeProduct(e.id)}} src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
