// Verifica se o usuário está logado
function verificarLogin() {
    const usuario = localStorage.getItem("usuarioLogado");

    if (!usuario) {
        // não está logado → manda para o login
        window.location.href = "login.html";
    }
}

// Retorna o objeto do usuário logado
function getUsuario() {
    const usuario = localStorage.getItem("usuarioLogado");
    return usuario ? JSON.parse(usuario) : null;
}

// Faz logout
function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}
