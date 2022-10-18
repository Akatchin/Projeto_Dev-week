const abas = document.querySelectorAll(".aba")

abas.forEach( aba =>{
    aba.addEventListener('click', function(){

        if(aba.classList.contains("selecionado")){
            return
        }

        SelecionarAba(aba)
        
        mostrarInformacoesDaAba(aba)
    
    })
})


const selecionado = document.querySelector(".selecionado")
console.log(selecionado)
