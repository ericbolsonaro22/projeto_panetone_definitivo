export default class Panetone {
    constructor(raio, altura, quantidade, tamanho) {
        this.raio = raio;
        this.altura = altura;
        this.quantidade = quantidade;
        this.tamanho = tamanho;
    }

    calcularMedida() {
        this.farinha = ((250 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.fermento = ((10 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.leite = ((60 / 440) * this.tamanho).toFixed(2) // MILILITROS
        this.ovos = Math.round((2 / 440) * this.tamanho) // UNITÁRIOS
        this.manteiga = ((55 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.acucar = ((60 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.mel = ((10 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.baunilha = ((5 / 440) * this.tamanho).toFixed(2) // MILILITROS
        this.damasco = ((100 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.raspas = ((5 / 440) * this.tamanho).toFixed(2) // GRAMAS
        this.sal = ((2 / 440) * this.tamanho).toFixed(2) // GRAMAS

        return this
    }

    calcularMedidaQuantidade() {
        this.calcularMedida()

        this.farinhaTotal = this.farinha * this.quantidade
        this.fermentoTotal = this.fermento * this.quantidade
        this.leiteTotal = this.leite * this.quantidade
        this.ovosTotal = this.ovos * this.quantidade
        this.manteigaTotal = this.manteiga * this.quantidade
        this.acucarTotal = this.acucar * this.quantidade
        this.melTotal = this.mel * this.quantidade
        this.baunilhaTotal = this.baunilha * this.quantidade
        this.damascoTotal = this.damasco * this.quantidade
        this.raspasTotal = this.raspas * this.quantidade
        this.salTotal = this.sal * this.quantidade

        return this
    }

    calcularPreco() {
        this.calcularMedida()

        this.precoFarinha = this.farinha * (2.79 / 1000)
        this.precoFermento = this.fermento * (3.99 / 30)
        this.precoLeite = this.leite * (4.39 / 1000)
        this.precoOvos = this.ovos * (22.99 / 20)
        this.manteigaPreco = this.manteiga * (11.99 / 200)
        this.acucarPreco = this.acucar * (10.49 / 500)
        this.melPreco = this.mel * (18.49 / 200)
        this.baunilhaPreco = this.baunilha * (10.49 / 30)
        this.damascoPreco = this.damasco * (18.89 / 150)
        this.raspasPreco = this.raspas * (12.90 / 100)
        this.salPreco = this.sal * (4.99 / 1000)

        return (this.precoFarinha + this.precoFermento + this.precoLeite + this.precoOvos + this.manteigaPreco + this.acucarPreco + this.melPreco + this.baunilhaPreco + this.damascoPreco + this.raspasPreco + this.salPreco)
    }

    calcularPrecoTotal() {
        return (this.calcularPreco()) * this.quantidade
    }

    calcularVolume() {
        this.volume = Math.PI * Math.pow(this.raio, 2) * this.altura
        return this.volume
    }

    calcularVolumeTotal() {
        return this.calcularVolume() * this.quantidade
    }
}