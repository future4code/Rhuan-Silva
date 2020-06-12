let i = 0
let listaDespesas = []

let cadastrar = () => {
    let valorDespesa = document.getElementById('valor')
    let tipoDespesa = document.getElementById('tipoDespesa')
    let descDespesa = document.getElementById('descDespesa')

    let valor = valorDespesa.value
    let tipo = tipoDespesa.value
    let descricao = descDespesa.value

    if (valor !== '' && tipo !== '' && descricao !== '') {
        const despesa = { valor, tipo, descricao }
        listaDespesas.push(despesa)
    } else {
        alert('Você esqueceu de preencher algum dos campos')
    }

    let listaDesp = document.getElementById('listaDespesa')
    listaDesp.innerHTML += `<li>${listaDespesas[i].valor} / ${listaDespesas[i].descricao} / ${listaDespesas[i].tipo}</li>`

    console.log(listaDespesas[i]);

    console.log(listaDespesas);

    i++
    valorDespesa.value = ''
    tipoDespesa.value = ''
    descDespesa.value = ''
}

// FILTRO DE DESPESAS

let limpaFiltro = () => {
    let valMin = document.getElementById('valorMinimo')
    let valMax = document.getElementById('valorMaximo')
    let typeDesp = document.getElementById('tipoDespesaD')


    valMin.value = ''
    valMax.value = ''
    typeDesp.value = ''

}

let filtrar = () => {
    const filtro = listaDespesas.filter((despesa, i, a) => {
        let valMin = document.getElementById('valorMinimo')
        let valMax = document.getElementById('valorMaximo')
        let typeDesp = document.getElementById('tipoDespesaD')

        if (despesa.valor >= valMin.value && despesa.valor <= valMax.value && despesa.tipo === typeDesp.value) {
            let listaDesp = document.getElementById('listaDespesa')
            listaDesp.innerHTML = `<li>${a[i]} </li>`
        }
    })
}
