var number_list = [];
var lock = false;

// Loop principal
document.querySelector("#btn").addEventListener('click', () => {

    // Declaração de variáveis
    var number1, number2;
    var sum = 0;
    // Entrada dos números
    number1 = parseInt(document.querySelector("#n1").value);
    number2 = parseInt(document.querySelector("#n2").value);
    if (number1 > 0 && number2 > 0 && lock == false) {
        // Inserção e organização dos números na lista
        number_list.push(number1, number2);
        number_list.sort(crescent_sort);
        // Loop da soma dos números
        for (var i = 0; i < number_list.length; i++) {
            sum += number_list[i];
        }
        document.querySelector("#result").innerHTML = number_list;
        document.querySelector("#sum").innerHTML = "Sum: " + sum;
        document.querySelector("#n1").value = '';
        document.querySelector("#n2").value = '';
    }
    else {
        alert("Programa finalizado! Clique em 'Reset' para reiniciar.")
        lock = true;
    }
})

document.querySelector("#reset_btn").addEventListener('click', () => {
    lock = false;
    document.querySelector("#n1").value = '';
    document.querySelector("#n2").value = '';
    document.querySelector("#result").innerHTML = '';
    document.querySelector("#sum").innerHTML = '';
    number_list = [];
})

// Função para sortear os números de um Array de forma crescente
function crescent_sort(a, b) {
    return a - b;
}
