baralho = ["Valete","Dama","Rei"]

do {
    cartas = ""
    for(i=0; i<baralho.length; i++){
        cartas += (i+1) + "º - " + baralho[i] + "\n"
    }
    
    opcao = prompt("Cartas que estão no baralho: \n" + cartas + " \n ----------------------Menu de opções------------------- \n 1 - Digite a carta que deseja colocar no topo do baralho \n 2 - Comprar uma carta \n 3 - Encerrar programa")

    switch(opcao){
        case "1":
            carta = prompt("Digite o nome da carta que deseja adicionar no topo do baralho")
            baralho.unshift(carta)
            break
        case "2":
            if(baralho[0] = undefined){
                alert("Sem Cartas para comprar.")
            }
            alert("Carta comprada. \n" + baralho[0])
            baralho.shift()
            break
        case "3":
            alert("Encerrando o programa!")
            break        
        default:
            alert("Opção inválida, favor digitar novamente!")    
    }
} while (opcao !== "3");