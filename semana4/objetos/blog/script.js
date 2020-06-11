let meuArray = []
let i = 0
function postar() {
    let inputTitulo = document.getElementById('titulo')
    let inputAutor = document.getElementById('autor')
    let inputConteudo = document.getElementById('conteudo')

    let titulo = inputTitulo.value
    let autor = inputAutor.value
    let conteudo = inputConteudo.value

    const post = {
        titulo,
        autor,
        conteudo
    }
    meuArray.push(post)

    let postagem = document.getElementById('postagem')
    postagem.innerHTML +=
        `<div>
            <h1>${meuArray[i].titulo}</h1>
            <p>${meuArray[i].conteudo}</p>
            <h4>${meuArray[i].autor}</h4>    
        </div>`

        // let tituloPost = document.getElementById('tituloPost')
        // tituloPost.innerHTML += `${meuArray[i].titulo}`
        // let autorPost = document.getElementById('autorPost')
        // autorPost.innerHTML += `${meuArray[i].autor}`
        // let conteudoPost = document.getElementById('conteudoPost')
        // conteudoPost.innerHTML += `${meuArray[i].conteudo}`
       
        i++

    inputTitulo.value = ''
    inputAutor.value = ''
    inputConteudo.value = ''

    console.log(meuArray);

}
