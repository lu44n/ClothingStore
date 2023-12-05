import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descrição</div>
        <div className="descriptionbox-nav-box fade">Avaliações (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Um site de comércio eletrônico é uma plataforma online que facilita o
          compra e venda de produtos ou serviços pela internet. Isto
          serve como um mercado virtual onde empresas e indivíduos podem
          apresentar seus produtos, interagir com os clientes e realizar
          transações sem a necessidade de presença física. Comércio eletrônico
          sites ganharam imensa popularidade devido à sua conveniência,
          acessibilidade e o alcance global que oferecem.
        </p>
        <p>
          Os sites de comércio eletrônico normalmente exibem produtos ou serviços junto com
          descrições detalhadas, imagens, preços e quaisquer variações disponíveis
          (por exemplo, tamanhos, cores). Cada produto geralmente tem sua própria página dedicada
          com informações relevantes.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
