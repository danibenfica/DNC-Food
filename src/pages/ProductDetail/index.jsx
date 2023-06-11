import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./index.scss";
import { PRODUCTS_MOCK } from "../../api/products.mock.js";

export default function ProductDetail() {
  let { id } = useParams();
  const [products] = useState(PRODUCTS_MOCK);

  const product = products.find((element) => element.id == id);

  useEffect(() => {
    document.body.classList.add("product-detail-page"); // Adicione uma classe ao body quando a página ProductDetail for montada
    return () => {
      document.body.classList.remove("product-detail-page"); // Remova a classe do body ao desmontar a página ProductDetail
    };
  }, []);

  return (
    <div className="ProductDetail">
      <Header />
      <div className="ProductDetail__detail">
        <div className="Card2">
          <img src={product.imgPath} alt="" />
          <h1>{product.title}</h1>
        </div>
        <h4 id="info1">{product.info}</h4>
      </div>
      <div className="ProductDetail__cart">
        <h2>Minha Sacola</h2>
        <div>
          <h3>{product.title}</h3>
          <div id="line"> </div>
          <h4>{product.price}</h4>
        </div>
        <div className="ProductDetail__cart-buttons">
          <button>Continuar comprando</button>
          <button>Finalizar compra</button>
        </div>
      </div>
    </div>
  );
}
