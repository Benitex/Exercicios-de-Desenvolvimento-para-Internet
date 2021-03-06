//Funções servem para repetir um determinado trecho de código várias vezes, de forma organizada
function função(parametro) {
    let variavelLocal; //let cria uma variável que só existe dentro de um bloco de código, como detro de um for, por exemplo
    return "resultado"; //em javascript, funções podem retornar qualquer coisa e não é necessário dizer o tipo do retorno
}

function imprimindoTexto() {
    document.write("document.write para escrever um texto na tela, da mesma forma que funciona a tag p");
    document.write("<h5>Também é possível utilizar tags dentro do document.write.</h5>");
    window.alert("window.alert serve para mostrar um pop up na tela com uma determinada mensagem.");
    //A função alert funciona da mesma forma que window.alert
    //prompt serve para pedir um valor através de um pop up
    var resposta = window.prompt("Entretanto, precisamos definir a variável que vai receber esse valor antes.");
    //Não é necessário definir o tipo de variável antes de declará-la em javascript, diferentemente de outras linguagens.
    var variavel = parseInt(resposta); //Podemon usar a função parseInt para mudar o tipo de uma variável.
}

function estruturasCondicionais() {
    if (/*aqui entra uma condição, por exemplo:*/ variavel > 0 ) {
        //Os comandos nesse bloco de código só vão ser executados se a condição for verdadeira.
        document.write("Número positivo!");
    } else { //else executa códigos caso a condição acima não seja aplicada, o else não é necessário.
        document.write("Não é positivo. :/");
    }
    switch (/*aqui entra uma condição, por exemplo:*/ variavel ) {
        case 0: //cada case indica um dos possíveis números digitados.
            document.write("<br/>Valor nulo!");
            break; //break serve para parar o código e não executar os outros casos.
        case 1:
            document.write("<br/>Foi o número 1!");
            break;

        default: //default representa o que será executado se nenhuma das anteriores for.
            document.write("<br/>Não foi nem 0 nem 1.");
            break;
    }
}

function estruturasDeRepetição() { //Servem para repetir um determinado trecho de código múltiplas vezes.
    //cria a variável tempo e enquanto ela for menor que variável + 1, repete o trecho de código. A cada vez que é repetido, aumenta tempo em 1.
    for (tempo = 1; tempo < variavel + 1; tempo++) {
        document.write("<br/>" + variavel - tempo);
    }
    while (/*aqui entra uma condição, por exemplo:*/ variavel > 0 ) { //while executa um trecho de código enquanto a condição for verdadeira.
        document.write("<br/>" + variavel);
        variavel--;
    }
    do { //dowhile executa o código dentro do while pelo menos uma vez, depois repete enquanto a condição for verdadeira.
        if (variavel = 0) {
            continue; //continue faz com que o programa pule as instruções posteriores.
        }
        variavel++;
        document.write("<br/>" + variavel + " é maior que 0.")
        if (variavel = 5) {
            break; //break faz com que o programa saia da estrutura de repetição.
        }
    } while (variavel < 10); //a condição fica no final do bloco.
}

function arrays() { //arrays são como variáveis que armazenam múltiplos resultados
    var array = [1,2,3]; //Essa é uma das formas de criar um array
    for (tempo = 0; tempo < array.length; tempo++) {
        array[tempo] = new Array(tempo); //essa é outra forma de criar um array, passando o número de elementos
    } //assim, criamos uma matriz, ao juntar dois arrays diferentes
    array[0][0] = 5;
    document.write("<br/>" + array[0][0]);
}