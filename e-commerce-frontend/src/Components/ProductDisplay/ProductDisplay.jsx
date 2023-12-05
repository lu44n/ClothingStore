import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        Uma camisa pulôver leve, geralmente de malha, justa e com
        decote redondo e mangas curtas, usado como camiseta ou exterior
        vestuário.
        </div>
        <div className="productdisplay-right-size">
          <h1>Escolha o tamanho</h1>
          <div className="productdisplay-right-sizes">
            <div>P</div>
            <div>M</div>
            <div>G</div>
            <div>GG</div>
            <div>XGG</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Adicione ao Carrinho</button>
        <p className="productdisplay-right-category"><span>Categoria :</span> Mulher, T-shirt, Pulôver</p>
        <p className="productdisplay-right-category"><span>Tags :</span> Moderno, Confortável</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
