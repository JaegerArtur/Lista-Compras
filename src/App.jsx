import './App.css';
import { useState } from 'react';
import ItemLista from './components/ItemLista';

function App() {

  const [txtInput, setTxtInput] = useState('');
  const [itensPendentes, setItensPendentes] = useState([]);
  const [itensComprados, setItensComprados] = useState([]);

  function adicionarItem() {
    const valor = txtInput.trim();
    if (!valor) return;

    setItensPendentes((prev) => [...prev, valor]);
    setTxtInput('');
  }

  function comprarItem(indice) {
    setItensComprados((prev) => [...prev, itensPendentes[indice]])
    removerItemPendentes(indice)
  }

  function removerItemPendentes(indice) {
    setItensPendentes((prev) => prev.filter((i, index) => index !== indice ))
  }

  function removerItemComprados(indice) {
    setItensComprados((prev) => prev.filter((i, index) => index !== indice ))
  }

  return (
    <div className="App">
      <input
        value={txtInput}
        onChange={(e) => setTxtInput(e.target.value)}
        placeholder='Informe o item para ser adicionado na lista' />
      <button type='button' onClick={adicionarItem}>Adicionar</button>
      <br />
      Itens à serem comprados
      <ul>
        {itensPendentes.map((i, index) => <ItemLista key={index} item={i} acaoBotao={() => comprarItem(index)} textoBotao={"Comprar"}/>)}
      </ul>
      Itens Comprados
      <ul>
        {itensComprados.map((i, index) => <ItemLista key={index} item={i} acaoBotao={() => removerItemComprados(index)} textoBotao={"Remover"}/>)}
      </ul>
    </div>
  );
}

export default App;
