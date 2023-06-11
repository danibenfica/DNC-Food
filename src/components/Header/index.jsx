import "./index.scss";
import d from "../../assets/imgs/d.png"
import n from "../../assets/imgs/n.png"
import c from "../../assets/imgs/c.png"
import carrinho from "../../assets/imgs/carrinho.png"

export default function Header() {
  return (
    <div className="Header">
      <img src={d} alt="letra d" id="d" />
      <img src={n} alt="letra n" id="n" />
      <img src={c} alt="letra c" id="c"/>
      <a className="food" href="https://dnc-food.vercel.app/">Food</a>
      <a href="" id="variedades">Variedades</a>
      <a href="" id="lanches">Lanches</a>
      <a href="" id="pizzas">Pizzas</a>
      <a href="" id="doces">Doces</a>
      <a href="" id="promocoes">Promoções</a>
      <p className="minhasCompras">Minhas Compras</p>
      <img src={carrinho} alt="carrinho" className="carrinho" />
    </div>
  );
}
