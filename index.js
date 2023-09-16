const livros = [];
let livroId = 1;
let idBtnLixeira = 1;
let idBtnEditar = 1;


const inputTitulo = document.querySelector("#inputLivro");
const inputAutor = document.querySelector("#inputAutor");
const btnPost = document.querySelector("#btnPostar");
const btnExcluir = document.querySelector("#btnExcluir");
const btnLixeira = document.querySelectorAll(".lixeira");
const divMain = document.querySelector("#box-data");

function criaLivro(titulo, autor) {
  const livro = {
    id: livroId++,
    titulo: titulo,
    autor: autor,
  };
  livros.push(livro);
}

function listarLivros(array) {
  divMain.innerHTML = "";
  array.forEach(element => {
    const newLine = document.createElement('span');
    newLine.innerHTML = `
    <span class="data">${element.titulo} (Autor: ${element.autor})
    <span class="icons">
      <div class="editar"><i class="fa-regular fa-pen-to-square"></i></div>
      <div class="lixeira"><i class="fa-solid fa-trash-can"></i></div>
    </span>
    </span>
    `;

    // Evento relacionado com a lixeira
    const lixeira = newLine.querySelector(".lixeira");
    lixeira.addEventListener("click", () => {
      console.log(`Clicou na lixeira ${element.id}`)
      removerLivroEspecifico(array, element.id - 1);
      listarLivros(array);
    })

    divMain.appendChild(newLine);
  });
}

function removerUltimoLivro(array) {
  array.pop();
}

function removerLivroEspecifico(array, index) {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1); 
  }
}


btnPost.addEventListener('click', () => {
  criaLivro(inputTitulo.value, inputAutor.value);
  listarLivros(livros);
  inputTitulo.value = "";
  inputAutor.value = "";
});

btnExcluir.addEventListener('click', () => {
  removerUltimoLivro(livros);
  listarLivros(livros);
});
