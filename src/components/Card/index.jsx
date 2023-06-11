import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./index.scss";

Modal.setAppElement("#root");

export default function Card({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Card">
      <img src={data.imgPath} alt={data.title} onClick={openModal} />
      <div className="Card__text">
        <span>{data.title}</span>
        <Link to={`product/${data.id}`}>
          <button>Adicionar</button>
        </Link>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Produto"
      >
        <h2 className="titleModal">{data.title}</h2>
        <img src={data.imgPath} alt={data.title} className="imgModal" />
        <p className="priceModal">{data.price}</p>
        <p className="infoModal">{data.info}</p>
        <button onClick={closeModal} className="buttonModal">Fechar</button>
      </Modal>
    </div>
  );
}
