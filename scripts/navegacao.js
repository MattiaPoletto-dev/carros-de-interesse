function mostrar(id) {
    document.getElementById("cadastrar-carros").style.display = "none";
    document.getElementById("filtrar-carros").style.display = "none";
    
    document.getElementById(id).style.display = "block";
}