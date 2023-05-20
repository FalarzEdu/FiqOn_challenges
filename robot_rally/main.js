
document.querySelector("#start").addEventListener('click', ()=> {

    var matrix = [];
    var points = 0;
    var cols = parseInt(document.querySelector("#col").value);
    var rows = parseInt(document.querySelector("#row").value);
    var command_number = parseInt(document.querySelector("#command_number").value);

    //CRIAÇÃO DO TABULEIRO ----------------------------------------------------
    var count = 0;
    var arena = [];
    var commands = [];
    var command_count = 0;

    //Armazena o mapa em formato de array unidimensional
    arena = (document.querySelector("#text").value.split(''));

    // Descobre a direção do robô
    var direction = arena.filter(dir => dir == 'N' || dir == 'L' || dir == 'S' || dir == 'O');

    // Armazena as instruções
    commands = (document.querySelector("#commands").value.split(''));

    // Verifica se alguma das entradas (exceto o tabuleiro) é inválida
    if ((cols < 1 || cols > 100) || (rows < 1 || rows > 100) || (command_number < 1 || command_number > 50000) || arena == '') {
        alert("Um ou mais entradas estão inválidas!");
        return;
    }

    // Caso a posição do robô esteja incorreta, retorna mensagem de erro
    if (direction[0] == undefined) {
        alert("Posição não definida!");
        return;
    }

    for (var i = 0; i < command_number; i ++) {
        if ((commands[i] != 'F') && (commands[i] != 'E') && (commands[i] != 'D')) {
            alert("Um ou mais comandos não são válidos!");
            return;
        }
    }
    
    for (var j = 0; j < rows; j ++) // Cria as linhas, cada uma com o número de colunas(cols)
    {
        matrix[j] = new Array(cols);
        for (var i = 0; i < cols; i ++) // Printa os caracteres no mapa 
        {
            if (arena[count] != '\n') {
                matrix[j][i] = (arena[count]);
                count ++;
            }
            else {
                matrix[j][i] = (arena[count + 1]);
                count += 2;
            }
        }
    }

    //console.table(matrix); // Printa o tabuleiro inicial no console. Ative caso queira vê-lo

    // DETECÇÃO DA POSIÇÃO DO ROBÔ ---------------------------------------------------

    for (var j = 0; j < rows; j ++) {
        if (matrix[j].indexOf(direction[0]) != -1) {
            var robotX = matrix[j].indexOf(direction[0])
            var robotY = j;
            break;
        } 
    }

    // MOVIMENTAÇÃO ---------------------------------------------------------------------

    // Loop para realizar as movimentações
    do {
        switch (direction[0]) {
            case 'N':
                    if (commands[command_count] == 'F' && robotY > 0 && (matrix[robotY - 1][robotX]) != '#') {
                        matrix[robotY][robotX] = ' ';
                        robotY -=1;
                        if (matrix[robotY][robotX] == '*') {points += 1;}
                        matrix[robotY][robotX] = 'N';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'E') {
                        direction[0] = 'O'
                        matrix[robotY][robotX] = 'O';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'D') {
                        direction[0] = 'L'
                        matrix[robotY][robotX] = 'L';
                        command_count += 1;
                    }
                    else {
                        command_count += 1;
                    }
                    break;
            
            case 'L':
                    if (commands[command_count] == 'F' && robotX < (cols - 1) && (matrix[robotY][robotX + 1]) != '#') {
                        matrix[robotY][robotX] = ' ';
                        robotX +=1;
                        if (matrix[robotY][robotX] == '*') {points += 1;}
                        matrix[robotY][robotX] = 'L';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'E') {
                        direction[0] = 'N'
                        matrix[robotY][robotX] = 'N';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'D') {
                        direction[0] = 'S'
                        matrix[robotY][robotX] = 'S';
                        command_count += 1;
                    }
                    else {
                        command_count += 1;
                    }
                    break;

            case 'S':
                    if (commands[command_count] == 'F' && robotY < (rows - 1)  && (matrix[robotY + 1][robotX]) != '#') {
                        matrix[robotY][robotX] = ' ';
                        robotY +=1;
                        if (matrix[robotY][robotX] == '*') {points += 1;}
                        matrix[robotY][robotX] = 'S';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'E') {
                        direction[0] = 'L'
                        matrix[robotY][robotX] = 'L';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'D') {
                        direction[0] = 'O'
                        matrix[robotY][robotX] = 'O';
                        command_count += 1;
                    }
                    else {
                        command_count += 1;
                    }
                    break;
            
            case 'O':
                    if (commands[command_count] == 'F' && robotX > 0 && (matrix[robotY][robotX - 1]) != '#') {
                        matrix[robotY][robotX] = ' ';
                        robotX -=1;
                        if (matrix[robotY][robotX] == '*') {points += 1;}
                        matrix[robotY][robotX] = 'O';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'E') {
                        direction[0] = 'S'
                        matrix[robotY][robotX] = 'S';
                        command_count += 1;
                    }
                    else if (commands[command_count] == 'D') {
                        direction[0] = 'N'
                        matrix[robotY][robotX] = 'N';
                        command_count += 1;
                    }
                    else {
                        command_count += 1;
                    }
                    break;
        }
    } while (command_count < command_number);
    // Imprime os pontos
    document.querySelector("#result").innerHTML = points; 

    //console.table(matrix); //Imprime o tabuleiro final no console. Ative caso queira vê-lo
})



    



