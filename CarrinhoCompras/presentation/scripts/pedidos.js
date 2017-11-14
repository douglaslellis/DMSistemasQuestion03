// Função Finalizar
function finalizarPedido() {    
    if (!validarFinalizar()) return;
    $('#divPedidos').hide();
    $('#divResumo').show();
    $('#divResumoCarrinhoCompras').html($('#divPedidosCarrinhoCompras').html());
    $("#divResumoCarrinhoCompras #buttonRemover").remove();
}

// Validações ao Finalizar
function validarFinalizar() {
    if (gridProdutosEmpty()) $('#spanFinalizarErros').show();
    else $('#spanFinalizarErros').hide();
    return !gridProdutosEmpty();
}

// Função Voltar
function voltar() {
    $('#divPedidos').show();
    $('#divResumo').hide();
    $('#divResumoCarrinhoCompras').empty();
}

// Função Adicionar
function adicionar() {    
    $('#spanFinalizarErros').hide();
    // Validar
    bootstrapValidatorRevalidate();
    var valido = validarPedido();
    if (!valido) return;
    // Remover Linha empty
    if (gridProdutosEmpty())
        $('#pedidosItens').empty();
    // Atualizar Grid Produtos    
    var produto = obterProduto();
    if (produto.tipo == ABSBH_VALUE) $('#pedidosItens tr[data-value="ABSBH"]').remove();
    if (produto.tipo == ABSSP_VALUE) $('#pedidosItens tr[data-value="ABSSP"]').remove();
    var produtoHtml = obterProdutoHtml();
    if (produtoHtml == null) { alert(PRODUTO_NAO_CADASTRADO); return; };
    $("#pedidosItens").html($("#pedidosItens").html() + produtoHtml);
    $('#inputEmail').prop("disabled", true);
}

// Retorna se os campos do formulario estão validos
function validarPedido() {
    if ($('#inputEmail').validator()[0].validity.valid == false ||
       $('#inputQuantidade').validator()[0].validity.valid == false)
        return false;
    return true;
}

// Revalida todos os campos do formulario
function bootstrapValidatorRevalidate() {
    $("#inputEmail").change();
    $("#inputQuantidade").change();
}

// Obtem o produto que será inserido no grid (em forma de CLASS)
function obterProduto() {    
    var produto = new Object();
    produto.email = $('#inputEmail').val();
    produto.tipo = $('#selectProduto').val();
    produto.quantidade = $('#inputQuantidade').val();
    return produto;
}

// Obtem o produto que será inserido no grid (em forma de HTML)
function obterProdutoHtml() {    
    var html = "";
    var produto = obterProduto();
    if (produto.tipo == ABSBH_VALUE) html = ABSBH_HTML;
    else if (produto.tipo == ABSSP_VALUE) html = ABSSP_HTML;
    else return null;
    html = html.replace('@Quantidade', produto.quantidade);
    html = html.replace('@Email', produto.email);
    return html;
}

// Adicionar o produto defaut no grid de produtos
function adicionarProdutoDefault() {
    $("#pedidosItens").html(ABS0_HTML);
    $('#inputEmail').prop("disabled", false);
}

// Verificar se o grid de produtos esta em branco
function gridProdutosEmpty() {
    return ($('#pedidosItens tr[data-value="0"]').length > 0);
}

// Função Remover
function remover(button) {    
    $(button).parent().parent().remove();
    if ($('#pedidosItens tr').length <= 0)
        adicionarProdutoDefault();
}

// Função Enviar Email
function enviarEmail() {
    var email = $('#inputEmail').val();
    var html = $('#divResumoCarrinhoCompras').html();
    var param = { email: email, html: html };
    postToServer("Pedidos.aspx/EnviarEmail", param, enviarEmailCallback, enviarEmailCallbackException);
    exibirModal(EMAIL_SUCCESS);
}
function enviarEmailCallback(retorno) {    
    var retorno = retorno.d;
    if (retorno == null) {
        exibirModal(EMAIL_CALLBACK_MENSAGE); return;
    };
}
function enviarEmailCallbackException(retorno) {
    exibirModal(EMAIL_CALLBACKEXCEPTION_MENSAGE);
}