const enviar = document.getElementById('botão-enviar')
const nome = document.getElementById('input-nome')
const email = document.getElementById('input-email')
const resposta = document.getElementById('input-textarea')

enviar.addEventListener('click', (event) => {
    event.preventDefault()
    if (nome.value.length < 10 || nome.value.length > 40) {
        alert('O nome precisa ser MAIOR que 10 e MENOR que 40')
    }

    if (email.value.length < 10 || email.value.length > 50) {
        alert('O email precisa ser MAIOR que 10 e MENOR que 50')
    }

    if (resposta.value.length > 500) {
        alert('A resposta precisa ser menor que 500 caracteres')
    }
})