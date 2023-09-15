const livros = [];

const inputTitulo = document.querySelector("#inputLivro")
const btnPost = document.querySelector("#btnPostar");
const btnExcluir = document.querySelector("#btnExcluir");
const divMain = document.querySelector("#main");

function criaLivro(titulo) {
  livros.push(titulo);
}

function listarLivros(array) {
  divMain.innerHTML = "";
  array.forEach(element => {
    divMain.innerHTML += element + "<br>";
  }); 
}

function removerLivro(array) {
  array.pop();
}

btnPost.addEventListener('click', () =>{
  criaLivro(inputTitulo.value);
  listarLivros(livros);
});

btnExcluir.addEventListener('click', () =>{
  removerLivro(livros);
  listarLivros(livros);
})

