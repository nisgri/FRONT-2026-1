let alunos = [
    {
        nome: "João",
        nota: 8.5,
        bolsista: false
    },
    {
        nome: "Ana",
        nota: 7.5,
        bolsista: false
    },
    {
        nome: "Beto",
        nota: 9.0,
        bolsista: false
    },
    {
        nome: "Carla",
        nota: 6.5,
        bolsista: true
    }
]

const nomes= alunos.map(aluno=> aluno.nome.toUpperCase)
console.log("Nomes: ", nomes)

const aprovados= alunos.filter(aluno=> aluno.nota> 6)
console.log("Aprovados: ", aprovados)

const soma= alunos.reduce((acc, atual)=> acc+ atual.nota, 0)
const media= soma/ alunos.length
console.log("Média: ", media)

const aluno= alunos.find(aluno=> aluno.nome== "Ana")
console.log("Aluno encontrado: ", aluno)

const indiceAluno= alunos.findIndex(aluno=> aluno.nome== "Ana")
console.log("Aluno encontrado na posição ", indiceAluno)

const todosAprovados= alunos.every(aluno=> aluno.nota> 6)
console.log("Todos aprovados? ", todosAprovados)

const temBolsista= alunos.some(aluno=> alunos.bolsista)
console.log("Tem bolsista? ", temBolsista)

const letras= ['b', 'c']
letras.push('d')
letras.unshift('a')
letras.pop()
letras.shift()
console.log(letras)

const numeros= [10, 1, 5, 20]
numeros.sort((a, b)=> a - b)
console.log("Array ordenado: ", numeros)
numeros.reverse()
console.log("Array inverso: ", numeros)

const data= [30, 4, 2026]
const stringData= data.join("/")
console.log("Data: ", stringData)

const soDoisAlunos= alunos.slice(0, 2)
console.log("Dois primeiros alunos: ", soDoisAlunos)
console.log("Dois primeiros alunos: ", alunos.slice(0, 2))