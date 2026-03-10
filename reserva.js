document.getElementById("form-reserva").addEventListener("submit", function (event) {

    event.preventDefault()

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let data = document.getElementById("data").value
    let horario = document.getElementById("horario").value
    let pessoas = document.getElementById("pessoas").value

    let mensagem = `Reserva de Mesa

    Nome: ${nome}
    Email: ${email}
    Telefone: ${telefone}
    Data: ${data}
    Horário: ${horario}
    Pessoas: ${pessoas}`

    let numero = "5551998281627"

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    window.open(url, "_blank")

})