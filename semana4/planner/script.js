

function addTarefa() {
    const task = document.getElementById("tarefa")
    let item = task.value
    const selecao = document.getElementById("dia")
    let diaDaSemana = selecao.value

    if (diaDaSemana === 'segunda') {
        const terefasSegunda = document.getElementById("seg")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }else if (diaDaSemana === 'terça'){
        const terefasSegunda = document.getElementById("ter")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }
    else if (diaDaSemana === 'quarta'){
        const terefasSegunda = document.getElementById("qua")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }
    else if (diaDaSemana === 'quinta'){
        const terefasSegunda = document.getElementById("qui")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }
    else if (diaDaSemana === 'sexta'){
        const terefasSegunda = document.getElementById("sex")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }
    else if (diaDaSemana === 'sabado'){
        const terefasSegunda = document.getElementById("sab")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }
    else if (diaDaSemana === 'domingo'){
        const terefasSegunda = document.getElementById("dom")
        terefasSegunda.innerHTML += `<li>${item}</li> `
        task.value = ''
    }




}
