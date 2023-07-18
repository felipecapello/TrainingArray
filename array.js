const arr = ["Felipe", "Alves", "Mazer", "Bruno", "Allan"]
console.log(arr)

// Adicionar no final do array
arr.push("Thales")
console.log(arr)
// Adicionar no começo do array
arr.unshift("Fiona")
console.log(arr)
// Retirar do final do array
arr.pop()
console.log(arr)
// Retirar do começo do array
arr.shift()
console.log(arr)
// Pesquisar por um Elemento
const inclui = arr.includes("teste")
console.log(inclui)
// indexOf
const indice = arr.indexOf("Mazer")
console.log(indice)
// Cortar e contatenar 
const pedaco = arr.slice(0, 4)
console.log(pedaco)
// Pegar os ultimos do array
const outros = arr.slice(-4)
console.log(outros)
// contatenar 
const juntando = pedaco.concat(outros)
console.log(juntando)
// substituição dos Elementos
const a = juntando.splice(indice, 1, "Pão")
console.log(outros)
console.log(juntando)
//iterar sobre os elementos
for (let indice = 0; indice < outros.length; indice++){
    const elemento = juntando[indice]
    console.log(elemento + " se encontra na posição " + indice)
}