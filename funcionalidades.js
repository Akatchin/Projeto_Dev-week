function SelecionarAba (aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba (aba) {
    const informacaoSelecionada = document.querySelector('.informacao.selecionado')
    informacaoSelecionada.classList.remove("selecionado")

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba) 
    informacaoASerMostrada.classList.add("selecionado")
}