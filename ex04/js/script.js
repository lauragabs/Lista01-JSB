nota1 = parseInt(prompt("Digite a sua primeira nota: "))
nota2 = parseInt(prompt("Digite a sua segunda nota: "))

notaTotal = nota1 + nota2

if( notaTotal >= 60)    
    alert("Você foi aprovado")
else 
    alert(`Você foi reprovado \nFaltou ${60- notaTotal} pontos para ser aprovado`)

    