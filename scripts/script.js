const nomeProduto = document.getElementById("nome");
const valorProduto = document.getElementById("valor");
const quantidadeProduto = document.getElementById("quantidade");
const imagemProduto = document.getElementById("imagem");

let arrayProdutos = [];

const inputValidate = (input) => {
  if (input.value.length !== 0) {
    document.getElementById(input.id).classList.remove("is-invalid");
    document.getElementById(input.id).classList.add("is-valid");
  } else {
    document.getElementById(input.id).classList.remove("is-valid");
    document.getElementById(input.id).classList.add("is-invalid");
  }
};

const createCard = (arr) => {
  contentTable.innerHTML = "";
  arr.map((element) => {
    contentTable.innerHTML += `
    <tr>
      <td>${element.id}</td>
      <td>${element.nome}</td>
      <td>${element.preco}</td>
      <td>${element.quantidade}</td>
      <td><img style="width: 50px; height: 50px" src=${element.imagem} alt=""></td>
      <td>
          <button class="btn btn-warning">Editar</button>
          <button class="btn btn-danger" onclick="(deleteCard(
            ${element.id}
          ))">Excluir</button>
      </td>
    </tr>
    `;
  });
};

const deleteCard = (id) => {
  arrayProdutos = arrayProdutos.filter((element) => element.id !== id);

  createCard(arrayProdutos);
};

const submitForm = () => {
  event.preventDefault();
  arrayProdutos.push({
    id:
      arrayProdutos.length > 0
        ? arrayProdutos[arrayProdutos.length - 1].id + 1
        : 1,
    nome: nomeProduto.value,
    preco: valorProduto.value,
    quantidade: quantidadeProduto.value,
    imagem: imagemProduto.value,
  });

  createCard(arrayProdutos);
};
