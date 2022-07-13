function resultado (texto) {

    const numero = Math.floor(Math.random() * texto.length);
    let resul = texto[numero];
    return resul;
}

export default resultado;