/* Variaveis Inicialização */
var BUTTON_REMOVER = "<td style='text-align:right;'><button type='button' id='buttonRemover' class='btn-xs btn-danger' onclick='remover(this);'>Remover</button></td>";
var PRODUTO_NAO_CADASTRADO = 'Produto não cadastrado, entre me contato com o time de desenvolvimento.';
var EMAIL_SUCCESS = "Um email será enviado para sua conta."
var EMAIL_CALLBACK_MENSAGE = 'Problemas no mecanismo de retorno do enviar email, entre me contato com o time de desenvolvimento.';
var EMAIL_CALLBACKEXCEPTION_MENSAGE = 'Problemas no mecanismo de enviar email, entre me contato com o time de desenvolvimento.';

var ABS0_VALUE = "0";
var ABS0_HTML = "<tr class='info' data-value='" + ABS0_VALUE + "'>" +
    "<td>0</td>" +
    "<td>--</td>" +
    "<td>--</td>" +
    "<td>--</td>" +    
"</tr>";

var ABSBH_VALUE = "ABSBH";
var ABSBH_HTML = "<tr class='success' data-value='" + ABSBH_VALUE + "'>" +
"<td>#</td>" +
"<td>ABSCard Belo Horizonte</td>" +
"<td data-name='quantidade'>@Quantidade</td>" +
"<td data-name='email'>@Email</td>" +
BUTTON_REMOVER +
"</tr>";

var ABSSP_VALUE = "ABSSP";
var ABSSP_HTML = "<tr class='info' data-value='" + ABSSP_VALUE + "'>" +
"<td>#</td>" +
"<td>ABSCard São Paulo</td>" +
"<td data-name='quantidade'>@Quantidade</td>" +
"<td data-name='email'>@Email</td>" +
BUTTON_REMOVER +
"</tr>";
/* Variaveis Inicialização */

// ONLOAD
$(document).ready(function () {

    // Adicioanr Produto Default
    adicionarProdutoDefault();

    // Finalizar Produto
    $('#buttonFinalizar').on('click', function (e) {        
        finalizarPedido();
    });

    // Voltar
    $('#buttonVoltar').on('click', function (e) {
        voltar();
    });

    // Enviar Email
    $('#buttonEnviarEmail').on('click', function (e) {
        enviarEmail();
    });

    // Enviar Email
    $('#buttonAdicionar').on('click', function (e) {
        adicionar();
    });    
});
// ONLOAD