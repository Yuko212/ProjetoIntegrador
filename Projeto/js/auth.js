
function verificarLogin() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
       
        alert("Não logado");
    }
}


function getUsuario() {
    const usuario = localStorage.getItem("usuarioLogado");
    return usuario ? JSON.parse(usuario) : null;
}


function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}
