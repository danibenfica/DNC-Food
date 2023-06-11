import Header from "../../components/Header";
import "./index.scss";
import { PRODUCTS_MOCK } from "../../api/products.mock.js";
import { useState } from "react";
import Card from "../../components/Card";

export default function Home() {
  //PARTE DA LOGICA AQUI
  const [products] = useState(PRODUCTS_MOCK);

  //RETORNO DO HTML
  return (
    <div className="Home">
      <Header />
      <div className="Home__products">
        {products.map((product) => (
          <Card data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
