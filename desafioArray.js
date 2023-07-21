const filaDeAtendimento = []
do {
    let pacientes = ""
    for(i=0; i<filaDeAtendimento.length; i++){
        pacientes += (i+1) + " º - " + filaDeAtendimento[i] + "\n"
    }
    opcao = prompt("Pacientes: \n" + pacientes + "Digite a opção que deseja: \n 1 - Adicionar Paciente \n 2 - Consultar Paciente \n 3 - Sair")
    
    switch (opcao){
        case "1":
            pacienteAdicionar = prompt("Digite o nome do paciente que vai entrar na fila de atendimento")
            filaDeAtendimento.push(pacienteAdicionar)
            break
        case "2":
            alert(filaDeAtendimento[0] + " favor ir ao consultório para atendimento")
            filaDeAtendimento.shift()
            break
        case "3":
            alert("Encerrando")
            break  
        default:
            alert("Você escolheu a opção errada, escolha outra")
    }

    
} while (opcao !== "3");


//if(opcao = 1){
//   pacienteAdicionar = prompt("Digite o nome do paciente que vai entrar na fila de atendimento")
//   filaDeAtendimento.push(pacienteAdicionar)
//   console.log(filaDeAtendimento)
//} else if (opcao = 2){
//    pacienteDeletar = prompt(filaDeAtendimento[0] + "favor ir ao consultório para atendimento")
//    filaDeAtendimento.shift()
//} else if (opcao = 3){
//    
//}