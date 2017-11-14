// Função envia requisição ao servidor
function postToServer(requestUrl, requestData, callbackReturn, callbackException) {
    $.ajax({
        type: "POST",
        url: requestUrl,
        data: JSON.stringify(requestData),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callbackReturn,
        error: callbackException        
    });
}
// Função envia requisição ao servidor

// INICIO MODAL
function exibirModal(text) {
    var options = {
        "backdrop": 'static',
        "keyboard": false,
        "show": true
    }
    $("[data-id=modalBigCorpo]").css("font-size", "11px");

    $('[data-id=btnCancelarBig]').unbind(); // Limpa todos os eventos
    $('[data-id=btnCancelarBig]').click(function (e) {
        esconderModal();
    });

    $('[data-id=modalConfirmacaoBig]').modal(options);
    $('#textModal').html(text);

}

function esconderModal() {
    $('[data-id=modalConfirmacaoBig]').modal('hide');
}
// INICIO MODAL