// Criando a class calculadora 
class calculadora{
    // INSTANCIAR AS CARACTERISTICAS
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    } // criando metodo soma 
    soma(){
        return parseInt(this.num1)+ parseInt(this.num2)
    }
    subtração(){
        return parseInt(this.num1)- parseInt(this.num2)
    }
    multiplicacao(){
        return parseInt(this.num1)* parseInt(this.num2)
    }
    divisao(){
        return parseInt(this.num1)/ parseInt(this.num2)
    }


    // craindo a requisição GET
    get resultado(){
        alert("o valor da soma é ; "+this.soma() + "\nO valor da subtração é:" + this.subtração() + "\nO valor da Multiplicação é : " + this.multiplicacao() + " O valor da divisão é :" + this.divisao())

    }

}
//colte de dados 
botao=document.querySelector("#btn")
botao.onclick=function(){
    valores= new calculadora(document.form1.n1.value,document.form1.n2.value)
    valores.resultado
}
