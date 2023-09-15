const livros = [];

const inputTitulo = document.querySelector("#inputLivro")
const btnPost = document.querySelector("#btnPostar");
const btnExcluir = document.querySelector("#btnExcluir");
const divMain = document.querySelector("#box-data");

function criaLivro(titulo) {
  livros.push(titulo);
}

function listarLivros(array) {
  divMain.innerHTML = "";
  array.forEach(element => {
    const newLine = document.createElement('span');
    newLine.innerHTML = `
    <span class="data">${element}
    <span class="icons">
      <div class="editar"><i class="fa-regular fa-pen-to-square"></i></div>
      <div class="lixeira"><i class="fa-solid fa-trash-can"></i></div>
    </span>
    </span>
    <br>
    `;
    divMain.appendChild(newLine);
  });
}

function removerLivro(array) {
  array.pop();
}

btnPost.addEventListener('click', () => {
  criaLivro(inputTitulo.value);
  listarLivros(livros);
});

btnExcluir.addEventListener('click', () => {
  removerLivro(livros);
  listarLivros(livros);
});
