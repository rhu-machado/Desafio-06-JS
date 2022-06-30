let me = {
    nome: "Rhuan",
    idade: 22,
    altura: 1.81
}

me.olhos = "castanhos"

delete me.idade

console.log(me)



let cadastro = [
    {
        nome: 'Evelyn',
        idade: 22,
        telefone: 21987654321,
        amigos: ['Isabele', 'Clarissa']
    },{
        nome: 'Enzo',
        idade: 7,
        telefone: 21977663322,
        amigos: ['Miguel', 'Gabriel']
    },{
        nome: 'Daniel',
        idade: 20,
        telefone: 21997654321,
        amigos: ['Rhaun', 'Bruno']
    },{
        nome: 'Bruno',
        idade: 20,
        telefone: 21967654321,
        amigos: ['Daniel', 'Nirvana']
    },{
        nome: 'Rhuan',
        idade: 22,
        telefone: 2199764794,
        amigos: ['Bruno', 'Evelyn']
    }]

console.log(cadastro[0].amigos[1],cadastro[1].amigos[1],cadastro[2].amigos[1],cadastro[3].amigos[1],cadastro[4].amigos[1])

for(let i = 0;i <= 4;i++){
    console.log(cadastro[i].amigos[0])
}