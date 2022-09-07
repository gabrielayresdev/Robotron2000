const pecas = document.querySelectorAll("[data-controle]")
const estatisticasTemplate = document.querySelectorAll("[data-estatistica]")
const estatisticas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

pecas.forEach((peca) => {
    peca.addEventListener("click", () => {
        manipulaDados(peca.dataset.controle, peca.parentNode)
        atualizaEstatistica(peca.dataset.peca)
    })
})

function manipulaDados(peca, pecaPai) {
    var count = pecaPai.querySelector("[data-contador]")

    if (peca === "-") {
        count.value = parseInt(count.value) - 1
    } else if (peca === "+") {
        count.value = parseInt(count.value) + 1
    }
}

function atualizaEstatistica(peca) {
    let pecaStat = estatisticas[peca]
    console.log(pecaStat)

    estatisticasTemplate.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecaStat[elemento.dataset.estatistica]
    })
}