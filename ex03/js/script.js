nome = prompt("Digite seu nome completo: ")
idade = parseInt(prompt("Digite sua idade:"))

if ( idade >= 18)
    alert(`${nome}, você já POSSUI idade para tirar certeira`)
else 
    alert(`${nome}, você já NÃO POSSUI idade para tirar certeira`)
