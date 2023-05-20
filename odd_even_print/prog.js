

// Quando o botão é pressionado, a lista é lida
document.querySelector("#start").addEventListener('click', ()=> {

document.querySelector("#code").innerHTML = '';

// Declaração de variáveis
    var even_list = [];
    var odd_list = [];
    var count = 0;

// Loop que designa pares e ímpares para suas listas
    for (var i = 1; i < 16; i++) {
        if (parseInt(document.querySelector("#n" + i).value) % 2 == 0) {
            even_list.push(parseInt(document.querySelector("#n" + i).value));
            // Condição que imprime a lista caso ela atinja 5 elementos
            if(even_list.length == 5) {
                print("even")
            }
        }    
        else {
            odd_list.push(parseInt(document.querySelector("#n" + i).value));
            // Condição que imprime a lista caso ela atinja 5 elementos
            if(odd_list.length == 5) {
                print("odd")
            }
        }
    }
    // Imprime os restos começando pelos ímpares
    print("odd");
    print("even");
    // Função para imprimir os valores e esvaziar as listas
    function print(type) {
        switch (type){
            case "even":
                for (var i = 0; i < even_list.length; i++) {
                    document.querySelector("#code").innerHTML += "<p>" + "par[" + i + "] = " + even_list[i] + "</p>"
                }
                even_list = [];
                break;
            case "odd":
                for (var i = 0; i < odd_list.length; i++) {
                    document.querySelector("#code").innerHTML += "<p>" + "ímpar[" + i + "] = " + odd_list[i] + "</p>"
                }
                odd_list = [];
                break;
        }
        return;    
    }

})

