const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
event.preventDefault(); // impede reload

salvarCarro();
});

function salvarCarro() {
  const carro = {
    loja: document.querySelector("#inome-da-loja").value,
    marca: document.querySelector("#imarca").value,
    modelo: document.querySelector("#imodelo").value,
    tipo: document.querySelector("#itipo").value,
    cor: document.querySelector("#icor").value,
    km: Number(document.querySelector("#ikm-rodados").value),
    preco: Number(document.querySelector("#ipreco").value),
    donos: document.querySelector("#iunico-dono").checked
      ? "Único dono"
      : "Mais de um dono",
    opiniao: document.querySelector("#iopiniao-pessoal").value
  };

  adicionarAoLocalStorage(carro);
}

function adicionarAoLocalStorage(carro) {
  // pega lista atual
  const carrosSalvos = localStorage.getItem("carros");

  // se não existir, cria lista vazia
  const carros = carrosSalvos ? JSON.parse(carrosSalvos) : [];

  // adiciona novo carro
  carros.push(carro);

  // salva novamente
  localStorage.setItem("carros", JSON.stringify(carros));

  form.reset();
  alert("Carro salvo com sucesso!");
}
