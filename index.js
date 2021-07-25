function cadastrarCliente() {
    let cliente = {};
    let clientesCadastrados = JSON.parse(localStorage.getItem("clientes"));
    
    if(!clientesCadastrados) {
        clientesCadastrados = [];
    }

    let nome = document.getElementById("nomecx");
    let email = document.getElementById("emailcx");
    let cidade = document.getElementById("cidadecx");
    let fone = document.getElementById("fonecx");

    if(!nome.value || !email.value || !cidade.value || !fone.value) {
        alert("Você precisa fornecer todas as informações para cadastrar um cliente!")
        return
    }

    cliente.nome =  nome.value;
    cliente.email = email.value;
    cliente.cidade = cidade.value;
    cliente.fone =  fone.value;
    
    clientesCadastrados.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(clientesCadastrados));
    alert("Cliente cadastrado!");
}


function cadastrarProduto() {
    let produtosCadastrados = JSON.parse(localStorage.getItem("produtos"));
    let produto = {};

    if(!produtosCadastrados) {
        produtosCadastrados = [];
    }

    let nome = document.getElementById("nomepcx");
    let categoria = document.getElementById("catcx");
    let quantidade = document.getElementById("quantcx");
    let ID = document.getElementById("identcx");

    if(!nome.value || !categoria.value || !quantidade.value || !ID.value) {
        alert("Você precisa fornecer todas as informações para cadastrar um produto!")
        return
    }

    produto.nome =  nome.value;
    produto.categoria = categoria.value;
    produto.quantidade = quantidade.value;
    produto.ID =  ID.value; 

    produtosCadastrados.push(produto);

    localStorage.setItem('produto', JSON.stringify(produtosCadastrados));
    alert("Produto cadastrado!");
}