import "./Membro.css";

const Membro = (props) => {
  return (
    <div className="Membro">
      <div className="cabecalho">
        <img
          src={props.imagem}
          alt={props.nome}
          onError={(e) => {
            // Caso a imagem falhe ao carregar, usa uma imagem padrão
            e.target.onerror = null; // Previne loop infinito
            e.target.src = "https://via.placeholder.com/120?text=Sem+Imagem";
          }}
        />
      </div>
      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Membro;
