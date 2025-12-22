const btnAbrir = document.querySelector("#btn-abrir-filtros");
const btnFechar = document.querySelector("#btn-fechar-filtros");
const filtros = document.querySelector("#filtros");

btnAbrir.addEventListener("click", () => {
  filtros.classList.add("ativo");
});

btnFechar.addEventListener("click", () => {
  filtros.classList.remove("ativo");
});
