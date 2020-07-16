const empresa = {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'programação',
    endereco:{
        rua: 'Rua Guilherme Gembala',
        numero:260 
    } 
}
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

const objeto={
    nome:'Carlos',
    idade: 32,
    tecnologia:[
        {nome: 'C++', especialidade:'Desktop'},
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}
console.log(`O usuário ${objeto.nome} tem ${objeto.idade} e usa a tecnologia ${objeto.tecnologia[0].nome} em ${objeto.tecnologia[0].especialidade}`)