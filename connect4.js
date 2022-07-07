// Variables para nombre de jugador, podrian ser temporales para mas eficiencia
var player1
var player2
// arreglo global de casillas, sera un arreglo bidimensional
var playboard=[];
// variable de turnos
var redturn = true;
// variable para habilitar tablero
var play = false;

// Funcion que corre al hacer click en los elementos
$('.btn-primary').click(function(){
    // Verifica si el campo de jugadores esta lleno
    if (!$('#inpt1').val() || !$('#inpt2').val()) {
        alert('Introducir nombres de jugadores!')
    }else{
        // Introduce los nombres de los jugadores en la parte de arriba
        player1 = $('#inpt1').val();
        player2 = $('#inpt2').val();
        // Esconde el cuadro de bienvenida para poder jugar
        $('#welcome').addClass('visually-hidden');
        // Muestra la barra de arriba con los nombres
        $('.ptag').removeClass('visually-hidden');
        // Introduce los nombres a los tag
        $('#ptag1').text(player1);
        $('#ptag2').text(player2);
        // Cambia el valor de jugar a true para habilitar tablero
        play = true;
    }
});


$('td').click(function(){
    // Primero verifica si play es verdadero para habilitar tablero
    if(play){
        // Obtiene la columna del elemento seleccionado para seleccionar el arreglo
        var col = parseInt($(this).attr('class'));
        // Saca el ultimo elemento del arreglo y lo mete en la variable item
        // para poder manipularlo luego
        var item = playboard[col].pop();
        // Validacion de turno para saber si es rojo o azul
        // Se cambia el fondo y cambia la variable del turno
        if(redturn){
            item.css('background-color', 'red')
            redturn = false;
        }else{
            item.css('background-color', 'blue')
            redturn = true;
        }
        // si no esta habilitado el tablero pide que se introduzcan nombres
    }else{
        alert("Porfavor introducir nombres para jugar");
    }
});

// funcion que corre al recargar la pagina
$(document).ready(function(){
        // agarra todas las casillas 
        const children = $('tr td');
        // loop para introducir cada casilla a su respectivo arreglo 
        // se corre de izquierda a derecha desde arriba hacia abajo
        for(let i = 0; i < 7; i++){
            // arreglo temporal para cada columna
            const tmpArray = [];
            // salta 7 para poder agarrar la fila de abajo en cada iteraccion
            for(let j = i; j < children.length; j+=7){
                // agarra cada elemento y lo introduce en el arreglo respectivo
                // son 7 arreglos de 6 elementos
                tmpArray.push(children.eq(j))
                // agrega la columna como clase para poder identificarse luego
                children.eq(j).attr('class', i);
            }
            // Al final de cada iteraccion introduce el arreglo temporal
            // al arreglo  global
            // El arreglo temporal se borra al terminar la funcion
            playboard.push(tmpArray)
        }
});
