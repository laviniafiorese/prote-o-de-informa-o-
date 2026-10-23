function criptografar() {
    const senha = document.getElementById("senha").value;
    const chave = Number(document.getElementById("chave").value);
    const resultado = document.getElementById("resultado");

    if (!/^\d+$/.test(senha)) {
        resultado.textContent = "Digite uma senha contendo apenas números.";
        return;
    }

    if (!Number.isInteger(chave) || chave < 1 || chave > 9) {
        resultado.textContent = "Escolha um valor entre 1 e 9.";
        return;
    }

    let senhaCriptografada = "";

    for (let numero of senha) {
        let novoNumero = (Number(numero) + chave) % 10;
        senhaCriptografada += novoNumero;
    }

    resultado.textContent = senhaCriptografada;
}

function descriptografar() {
    const senha = document.getElementById("senha").value;
    const chave = Number(document.getElementById("chave").value);
    const resultado = document.getElementById("resultado");

    if (!/^\d+$/.test(senha)) {
        resultado.textContent = "Digite uma senha contendo apenas números.";
        return;
    }

    if (!Number.isInteger(chave) || chave < 1 || chave > 9) {
        resultado.textContent = "Escolha um valor entre 1 e 9.";
        return;
    }

    let senhaOriginal = "";

    for (let numero of senha) {
        let novoNumero = (Number(numero) - chave + 10) % 10;
        senhaOriginal += novoNumero;
    }

    resultado.textContent = senhaOriginal;
}