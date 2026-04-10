export default function ItemLista({ item, acaoBotao, textoBotao, acaoRemover }) {
  return (
    <li>
      {item}
      <button type="button" onClick={acaoBotao}>
        {textoBotao}
      </button>
      <button type="button" onClick={acaoRemover}>
        Remover
      </button>
    </li>
  );
}
