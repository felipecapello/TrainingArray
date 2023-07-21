//Feito sem ajuda
filaDeAtendimento = []
opcao = ""

do {
    pacientes = ""
   for(i=0; i<filaDeAtendimento.length; i++){
    pacientes += (i+1) + "º - " + filaDeAtendimento[i] + "\n"
   } 
   opcao =  prompt("Pacientes: " + pacientes + "\n" + "Digite a opção que deseja: \n 1 - Adicionar Pacientes na Fila \n 2 - Chamar pacientes para atendimento \n 3 - Encerrar programa")
   
   switch(opcao){

    case "1":
        novoPaciente = prompt("Digite o nome do paciente que deve entrar na fila de atendimento médico")
        filaDeAtendimento.push(novoPaciente)
        break
    case "2":
        alert("Chamando o paciente " + filaDeAtendimento[0])    
        filaDeAtendimento.shift()
        break
    case "3":
        alert("Encerrando")
        break
    default:
        alert("Você digitou opção não válida, insira uma válida")    

   }
} while (opcao !== "3");