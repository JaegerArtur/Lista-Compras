import "./ItemLista.css";

export default function ItemLista({ item, acaoBotao, textoBotao, acaoRemover }) {
  return (
    <li>
      <p>{item}</p>
      <div className="botoes">
        <button type="button" onClick={acaoBotao}>
          {textoBotao}
        </button>
        <button type="button" onClick={acaoRemover}>
          Remover
        </button>
      </div>
    </li>
  );
}
