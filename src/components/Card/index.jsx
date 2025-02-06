import { useState } from "react";
export const Card = ({ props }) => {


    const produtos = {
        "Calcio Litho D": 109.90,
        "Coconut Oleo De Coco": 99.90,
        "Colagen Com Vit A, C, D, E": 99.90,
        "DGT": 109.90,
        "Dolmag": 79.90,
        "Fily": 109.90,
        "FilyF": 109.90,
        "Nutra Ferr - Ferro C": 99.90,
        "Fossin": 109.90,
        "Gold Summer": 109.90,
        "Hair, Skin & Nails": 119.90,
        "Issoy Com Vit A, C, D, E": 109.90,
        "Kohle": 89.90,
        "Linhol - Oleo De Linhaça": 99.90,
        "Magnésio": 79.90,
        "Nutra B": 89.90,
        "Nutra D3": 89.90,
        "Nutra C": 99.90,
        "Nutra 12C": 119.90,
        "Nutra Folic": 99.90,
        "Nutra Off 5mg": 99.90,
        "Nutra Off 10mg": 109.90,
        "Nutra Q10": 99.90,
        "Nutra Kalio": 99.90,
        "Nutra Oxy": 99.90,
        "Nutralina": 109.90,
        "Nutrium": 109.90,
        "Nutrox Refil 250g": 180.00,
        "Omega3": 0.00,
        "Onagra - Oleo De Primula": 99.90,
        "Provit C": 109.90,
        "Provit Pó 80g": 109.90,
        "Ocitem": 109.90,
        "Ocitem Premium": 139.90,
        "Quitonato": 99.90,
        "Shake Pote 500g": 0.00,
        "Shake Refil 500g": 179.90,
        "Solux Caps": 89.90,
        "Solux Fibras": 119.90,
        "Solux Pó 150g": 89.90,
        "THO": 119.90,
        "TMA": 119.90,
        // "TRG 80g": 0.00,
        "Triptofenil": 109.90,
        "Tumer": 109.90,
        "Veribel": 109.90,
        "Vizevit": 109.90,
        "Calcio Litho D Kids": 99.90,
        "Nutra B Kids": 99.90,
        "Nutra 12C Kids": 99.90,
        "Nutra C Kids": 89.90,
        "Nutra D3 Kids": 89.90,
        "Nutra Folic Kids": 99.90,
        "Provit C Kids": 99.90,
        "Quitonato Kids": 99.90
    };

    const [produtoSelecionado, setProdutoSelecionado] = useState("");
    const [quantidade, setQuantidade] = useState(1);
    const [carrinho, setCarrinho] = useState([]);

    // Adicionar produto ao carrinho
    const adicionarProduto = () => {
        if (produtoSelecionado && quantidade > 0) {
            setCarrinho([...carrinho, { nome: produtoSelecionado, quantidade }]);
            setProdutoSelecionado(""); // Resetar seleção
            setQuantidade(1); // Resetar quantidade
        }
    };

    // Remover um produto do carrinho
    const removerProduto = (index) => {
        const novoCarrinho = carrinho.filter((_, i) => i !== index);
        setCarrinho(novoCarrinho);
    };

    // Calcular o total do carrinho
    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + produtos[item.nome] * item.quantidade, 0);
    };

    return (
        <div className="p-4">
            <h2 className="mb-4 font-bold text-lg">Adicionar Produtos</h2>

            <label htmlFor="produtos" className="prod"></label>
            <select
                id="produtos"
                name="produtos"
                value={produtoSelecionado}
                onChange={(e) => setProdutoSelecionado(e.target.value)}
                className="border p-2 ml-2"
            >
                <option value="">Selecione...</option>
                {Object.keys(produtos).map((produto) => (
                    <option key={produto} value={produto}>
                        {produto}
                    </option>
                ))}
            </select>

            <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="border p-2 ml-2"
            />

            <button
                onClick={adicionarProduto}
                className="bg-green-500 text-white p-2 ml-2 botao"
            >
                Adicionar Produto
            </button>

            <h3 className="mt-4 font-bold">Lista do Cálculo</h3>
            <ul className="list-disc ml-6">
                {carrinho.map((item, index) => (
                    <li key={index} className="flex justify-between items-center itemcar">
                        {item.quantidade}x {item.nome} - R$ {(produtos[item.nome] * item.quantidade).toFixed(2)}
                        <button
                            onClick={() => removerProduto(index)}
                            className="bg-red-500 text-white p-1 ml-2 excluirbutton"
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>

            <h3 className="mt-4 font-bold">Total: R$ {calcularTotal().toFixed(2)}</h3>
        </div>
    );
}