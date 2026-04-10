import "./App.css";
import { useState } from "react";
import ItemLista from "./components/ItemLista";

function App() {
  const [txtInput, setTxtInput] = useState("");
  const [itensPendentes, setItensPendentes] = useState([]);
  const [itensComprados, setItensComprados] = useState([]);

  function adicionarItem() {
    const valor = txtInput.trim();
    if (!valor) return;

    setItensPendentes((prev) => [...prev, valor]);
    setTxtInput("");
  }

  function comprarItem(indice) {
    setItensComprados((prev) => [...prev, itensPendentes[indice]]);
    removerItemPendentes(indice);
  }

  function desfazerCompra(indice) {
    setItensPendentes((prev) => [...prev, itensComprados[indice]]);
    removerItemComprados(indice);
  }

  function removerItemPendentes(indice) {
    setItensPendentes((prev) => prev.filter((i, index) => index !== indice));
  }

  function removerItemComprados(indice) {
    setItensComprados((prev) => prev.filter((i, index) => index !== indice));
  }

  return (
    <div className="App">
      <h1>Lista de Compras</h1>
      <div id="entrada">
        <input value={txtInput} onChange={(e) => setTxtInput(e.target.value)} placeholder="Ex: Arroz, Feijão" />
        <button type="button" onClick={adicionarItem}>
          Adicionar
        </button>
      </div>
      <div id="listas">
        <div className="lista">
          <h2>Itens a serem comprados</h2>
          <ul>
            {itensPendentes.map((i, index) => (
              <ItemLista
                key={index}
                item={i}
                acaoBotao={() => comprarItem(index)}
                textoBotao={"Comprar"}
                acaoRemover={() => removerItemPendentes(index)}
              />
            ))}
          </ul>
        </div>
        <div className="lista">
          <h2>Itens comprados</h2>
          <ul>
            {itensComprados.map((i, index) => (
              <ItemLista
                key={index}
                item={i}
                acaoBotao={() => desfazerCompra(index)}
                textoBotao={"Desfazer"}
                acaoRemover={() => removerItemComprados(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
