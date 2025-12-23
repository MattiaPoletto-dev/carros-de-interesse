function abrirFecharFiltro() {
  document.getElementById("filtros").classList.toggle("aberto");
}

function pegarFiltros() {
  return {
    marca: document.getElementById("ifiltro-marca").value.trim().toLowerCase(),
    modelo: document.getElementById("ifiltro-modelo").value.trim().toLowerCase(),
    tipo: document.getElementById("ifiltro-tipo").value.trim().toLowerCase(),
    cor: document.getElementById("ifiltro-cor").value.trim().toLowerCase(),
    kmMax: document.getElementById("ifiltro-km-max").value,
    precoMax: document.getElementById("ifiltro-preco-max").value,
    loja: document.getElementById("ifiltro-loja").value.trim().toLowerCase(),
    donos: document.querySelector('input[name="filtro-donos"]:checked').id
  };
}

function renderizarCarros(lista) {
  const container = document.getElementById("lista-carros-filtrados");

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum carro encontrado.</p>";
    return;
  }

  lista.forEach(carro => {
    const div = document.createElement("div");
    div.classList.add("carro");

    div.innerHTML = `
            <div class="carro-filtrado">
                <p class="primeiro-parametro"><strong>Modelo:</strong> ${carro.modelo}</p>
                <div class="carro-filtrado-parametros-iniciais">
                    <p><strong>Marca:</strong> ${carro.marca}</p>
                    <p><strong>Tipo:</strong> ${carro.tipo}</p>
                    <p><strong>Cor:</strong> ${carro.cor}</p>
                    <p><strong>Preço:</strong> ${carro.preco}</p>
                </div>
                <p><strong>Quilometragem:</strong> ${carro.km}</p>
                <p><strong>Donos:</strong> ${carro.donos}</p>
                <p><strong>Opinião:</strong> ${carro.opiniao}</p>
                <p><strong>Loja:</strong> ${carro.loja}</p>
            </div>
           `;

    container.appendChild(div);
  });
}


function limparListaCarros() {
  document.getElementById("lista-carros-filtrados").innerHTML = "";
}


function filtrarCarros() {
  const filtros = pegarFiltros();

  const carros = JSON.parse(localStorage.getItem("carros")) || [];

  const carrosFiltrados = carros.filter(carro => {

    if (filtros.marca && !carro.marca.toLowerCase().includes(filtros.marca)) {
      return false;
    }

    if (filtros.modelo && !carro.modelo.toLowerCase().includes(filtros.modelo)) {
      return false;
    }

    if (filtros.tipo && carro.tipo.toLowerCase() !== filtros.tipo) {
      return false;
    }

    if (filtros.cor && carro.cor.toLowerCase() !== filtros.cor) {
      return false;
    }

    if (filtros.loja && !carro.loja.toLowerCase().includes(filtros.loja)) {
      return false;
    }

    if (filtros.kmMax && carro.kmRodados > Number(filtros.kmMax)) {
      return false;
    }

    if (filtros.precoMax && carro.preco > Number(filtros.precoMax)) {
      return false;
    }

    if (filtros.donos === "ifiltro-unico-dono" && carro.donos !== 1) {
      return false;
    }

    if (filtros.donos === "ifiltro-mais-de-um-dono" && carro.donos === 1) {
      return false;
    }

    return true;
  });

  limparListaCarros();
  renderizarCarros(carrosFiltrados);
}
