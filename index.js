import Panetone from "/model/Panetone.js"

let calcular = document.getElementById("calcular")

calcular.addEventListener("click", () => {
    let raio = document.getElementById("raio").value
    let altura = document.getElementById("altura").value
    let quantidade = document.getElementById('quantidade').value
    let tamanho = document.getElementById('tamanho').value

    const panetoneScript = new Panetone(raio, altura, quantidade, tamanho)

    const volume = panetoneScript.calcularVolume()

    let medida = panetoneScript.calcularMedidaQuantidade()
    let res = document.getElementById("resposta")
    res.innerHTML = ""
    
    const tableContainer = document.createElement('div')
    tableContainer.style.overflowY = "auto"
    tableContainer.style.marginBottom = "20px"
    
    const table = document.createElement('table')
    table.classList.add('styled-table')
    table.style.width = "100%"

    const thead = document.createElement('thead')
    const header = document.createElement('tr')
    header.innerHTML = '<th>Ingrediente</th><th>Quantidade</th><th>Preço (R$)</th>'
    thead.appendChild(header)
    table.appendChild(thead)
    
    const tbody = document.createElement('tbody')

    panetoneScript.calcularPreco()
    
    const ingredientes = [
        { nome: 'Farinha', quantidade: parseFloat(medida.farinhaTotal).toFixed(2) + ' g', preco: (medida.precoFarinha * medida.quantidade).toFixed(2) },
        { nome: 'Fermento', quantidade: parseFloat(medida.fermentoTotal).toFixed(2) + ' g', preco: (medida.precoFermento * medida.quantidade).toFixed(2) },
        { nome: 'Leite', quantidade: parseFloat(medida.leiteTotal).toFixed(2) + ' ml', preco: (medida.precoLeite * medida.quantidade).toFixed(2) },
        { nome: 'Ovos', quantidade: parseFloat(medida.ovosTotal) + ' Unitário', preco: (medida.precoOvos * medida.quantidade).toFixed(2) },
        { nome: 'Manteiga', quantidade: parseFloat(medida.manteigaTotal).toFixed(2) + ' g', preco: (medida.manteigaPreco * medida.quantidade).toFixed(2) },
        { nome: 'Açúcar', quantidade: parseFloat(medida.acucarTotal).toFixed(2) + ' g', preco: (medida.acucarPreco * medida.quantidade).toFixed(2) },
        { nome: 'Mel', quantidade: parseFloat(medida.melTotal).toFixed(2) + ' g', preco: (medida.melPreco * medida.quantidade).toFixed(2) },
        { nome: 'Baunilha', quantidade: parseFloat(medida.baunilhaTotal).toFixed(2) + ' ml', preco: (medida.baunilhaPreco * medida.quantidade).toFixed(2) },
        { nome: 'Damasco', quantidade: parseFloat(medida.damascoTotal).toFixed(2) + ' g', preco: (medida.damascoPreco * medida.quantidade).toFixed(2) },
        { nome: 'Raspas de Laranja', quantidade: parseFloat(medida.raspasTotal).toFixed(2) + ' g', preco: (medida.raspasPreco * medida.quantidade).toFixed(2) },
        { nome: 'Sal', quantidade: parseFloat(medida.salTotal).toFixed(2) + ' g', preco: (medida.salPreco * medida.quantidade).toFixed(2) }
    ]

    let precoTotal = 0

    ingredientes.forEach(item => {
        const row = document.createElement('tr')
        row.innerHTML = `<td>${item.nome}</td><td>${item.quantidade}</td><td>R$ ${item.preco}</td>`
        tbody.appendChild(row)
        precoTotal += parseFloat(item.preco)
    })
    
    // Adicionar linha do volume unitário
    const volumeRow = document.createElement('tr')
    volumeRow.innerHTML = `<td class="especial"><strong>Volume Unitário:z</strong></td><td colspan="2" class="especial">${volume.toFixed(2)} cm³</td>`
    tbody.appendChild(volumeRow)
    
    // Adicionar linha do volume total
    const volumeTotal = panetoneScript.calcularVolumeTotal()
    const volumeTotalRow = document.createElement('tr')
    volumeTotalRow.innerHTML = `<td><strong>Volume Total:</strong></td><td colspan="2">${volumeTotal.toFixed(2)} cm³</td>`
    tbody.appendChild(volumeTotalRow)
    
    table.appendChild(tbody)
    
    const tfoot = document.createElement('tfoot')
    const totalRow = document.createElement('tr')
    totalRow.classList.add('total-row')
    totalRow.innerHTML = `<td><strong>Preço Total:</strong></td><td colspan="2"><strong>R$ ${precoTotal.toFixed(2)}</strong></td>`
    tfoot.appendChild(totalRow)
    table.appendChild(tfoot)
    
    tableContainer.appendChild(table)
    res.appendChild(tableContainer)
    
    res.appendChild(printButton)
})