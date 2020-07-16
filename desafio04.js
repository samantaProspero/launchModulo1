/**Desafio 01-4. Aplicação: Operações bancárias
I)Crie um programa para realizar operações bancárias na conta de um usuário.
Comece criando um objeto com o nome do usuário, suas transações e saldo.
As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance)
em 0 (zero).*/

/*
II)Adicionar transações
Crie uma função createTransaction para adicionar uma nova transação no array de
transações de um usuário, essa função deve receber como parâmetro um objeto de
transação que tem o seguinte formato:

O type pode ser credit para créditos e debit para débitos da conta do usuário.
Quanto uma transação for do tipo credit ela deve também somar o valor do crédito
no saldo (balance) do usuário.
Se for uma transação do tipo debit ela deve subtrair o valor do débito no saldo
(balance) do usuário.
Dica.: Você pode usar o método user.transactions.push(transaction) para adicionar
um novo item no array de transações.*/

/*III) Relatórios
Crie uma função chamada getHigherTransactionByType que recebe como parâmetro o tipo de transação credit/debit , percorre as transações do usuário e
retorna o objeto da transação de maior valor com aquele tipo:
getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
Crie uma função chamada getAverageTransactionValue que retorna o valor médio das transações de um usuário independente do seu tipo:
getAverageTransactionValue() // 83.3
Crie uma função chamada getTransactionsCount que retorna o número de transações de cada tipo credit/debit , o retorno da função deve ser um objeto e
seguir exatamente como o modelo apresentado abaixo:
getTransactionsCount() // { credit: 5, debit: 3 }
Exemplo de resultado final do projeto:

console.log(user.balance) // 60
getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }
getAverageTransactionValue() // 70
getTransactionsCount() // { credit: 2, debit: 2 } */
const user = {
name: 'Mariana',
transactions: [],
balance: 0
}

function createTransaction(object){
    user.transactions.push(object)
    if (object.type ==='credit'){ 
        user.balance+= object.value
    }
    if (object.type ==='debit'){ 
        user.balance-= object.value
    }
}
createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

function getHigherTransactionByType(type){
    let value=0
    let count =0
    for (let i=0; i <user.transactions.length; i++) {
        if(user.transactions[i].type===type){
            if(user.transactions[i].value> value){
               value = user.transactions[i].value
               count = i 
            }
        }
    }
    return user.transactions[count]
}
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))

function getAverageTransactionValue(transactions){
    sum=0
    for(let i=0; i <user.transactions.length; i++){
        sum += user.transactions[i].value
    }
    return sum/(user.transactions.length)
}
console.log(getAverageTransactionValue(user))

function getTransactionsCount(user){
    let counter = {credit:0, debit:0}
    for (transaction of user.transactions){
        if(transaction.type==='credit'){ counter.credit+=1}
        if(transaction.type==='debit'){ counter.debit+=1}
    }
    return counter
}

console.log(getTransactionsCount(user))
console.log(user.balance)