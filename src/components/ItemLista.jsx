export default function ItemLista ({item, acaoBotao, textoBotao}) {
    return (
        <li>
            {item}
            <button onClick={acaoBotao}>{textoBotao}</button>
        </li>
    )
}