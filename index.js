class CalculadoraPanetone {  
    constructor() {  
        this.precosIngredientes = {  
            "Ovo": 2.35,  
            "Farinha de aveia": 0.017,  
            "Farinha de amêndoa": 0.043,  
            "Whey protein": 1.12,  
            "Leite sem lactose": 0.009  
        };  

        this.ingredientesBase = {  
            "Ovo": 3,  
            "Farinha de aveia": 120,  
            "Farinha de amêndoa": 96,  
            "Whey protein": 60,  
            "Leite sem lactose": 124  
        };  

        this.valorPanetone = 150.00 + 0.78;  
    }  

    calcular() {  
        const quantidade = parseInt(document.getElementById("quantidade").value);  
        let valorTotal = this.valorPanetone * quantidade;  

        document.getElementById("valor").textContent = `R$ ${valorTotal.toFixed(2)}`;  
        this.atualizarListaIngredientes(quantidade);  
    }  

    atualizarListaIngredientes(quantidade) {  
        const listaIngredientes = document.getElementById("ingredientes");  
        listaIngredientes.innerHTML = "";  

        for (let ingrediente in this.ingredientesBase) {  
            let quantidadeIngrediente = this.ingredientesBase[ingrediente] * quantidade;  

            let quantidadeFormatada;  
            let unidade;  
            if (ingrediente === "Ovo") {  
                quantidadeFormatada = quantidadeIngrediente;  
                unidade = " unidade(s)";  
            } else if (ingrediente === "Leite sem lactose") {  
                quantidadeFormatada = quantidadeIngrediente.toFixed(2);  
                unidade = " ml";  
            } else {  
                quantidadeFormatada = quantidadeIngrediente.toFixed(2);  
                unidade = " g";  
            }  

            let itemLista = document.createElement("li");  
            itemLista.textContent = `${ingrediente}: ${quantidadeFormatada}${unidade}`;  
            listaIngredientes.appendChild(itemLista);  
        }  
    }  

    reiniciar() {  
        document.getElementById("quantidade").value = "1";  
        document.getElementById("valor").textContent = "R$ 0,00";  
        document.getElementById("ingredientes").innerHTML = "";  
    }  
}  

const calculadora = new CalculadoraPanetone();  

function calcular() {  
    calculadora.calcular();  
}  

function reiniciar() {  
    calculadora.reiniciar();  
}