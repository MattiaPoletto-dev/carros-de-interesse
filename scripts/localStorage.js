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


/* ------------------------------------------------------ */
function localStorageParaHTML() {
    const dados = localStorage.getItem("carros");
    const carros = dados ? JSON.parse(dados) : [];

    const lista = document.querySelector("#lista-carros-filtrados");

    lista.innerHTML = "";
    carros.forEach((carro) => {
        const loja = carro.loja;
        const marca = carro.marca;
        const modelo = carro.modelo;
        const tipo = carro.tipo;
        const cor = carro.cor;
        const km = carro.km;
        const preco = carro.preco;
        const donos = carro.donos;
        const opiniao = carro.opiniao;

        // cria o HTML
        const card = document.createElement("div");
        card.classList.add("carro");

        card.innerHTML = `
            <div class="carro-filtrado">
                <p class="primeiro-parametro"><strong>Modelo:</strong> ${modelo}</p>
                <div class="carro-filtrado-parametros-iniciais">
                    <p><strong>Marca:</strong> ${marca}</p>
                    <p><strong>Tipo:</strong> ${tipo}</p>
                    <p><strong>Cor:</strong> ${cor}</p>
                    <p><strong>Preço:</strong> ${preco}</p>
                </div>
                <p><strong>Quilometragem:</strong> ${km}</p>
                <p><strong>Donos:</strong> ${donos}</p>
                <p><strong>Opinião:</strong> ${opiniao}</p>
                <p><strong>Loja:</strong> ${loja}</p>
            </div>
           `;

        lista.appendChild(card);
    })
    
}

