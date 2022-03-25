function funcaoSuperCustosa() {
    return new Promise(function (resolve, reject) {
        const resultado = 10 + 5
        resolve(resultado)
    })

}

function esperar (segundos) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, segundos * 1000)
    })
}

async function principal() {
    await esperar(5)
    console.log('Passou-se 5 segundos!')
}

principal()