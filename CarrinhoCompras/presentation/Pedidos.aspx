<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Pedidos.aspx.cs" Inherits="CarrinhoCompras.Pedidos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Pedidos</title>
    <!-- CSS -->
    <link href="scripts/libraries/bootstrap/css/bootstrap.css" rel="stylesheet" />    
    <link href="scripts/libraries/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="scripts/libraries/assets/css/bootstrap.css" rel="stylesheet" />    
    <link href="scripts/libraries/assets/css/font-awesome.css" rel="stylesheet" />
    <link href="scripts/libraries/assets/css/custom.css" rel="stylesheet" />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <link href="scripts/pedidos.css" rel="stylesheet" />    
    <!-- CSS -->
    <!-- JS -->
    <script src="scripts/libraries/jquery/jquery-3.2.1.js"></script>
    <script src="scripts/libraries/jquery/jquery-3.2.1.min.js"></script>    
    <script src="scripts/libraries/bootstrap/js/bootstrap.js"></script>
    <script src="scripts/libraries/bootstrap/js/bootstrap.min.js"></script>
    <script src="scripts/libraries/bootstrapvalidator/validator.js"></script>
    <script src="scripts/libraries/bootstrapvalidator/validator.min.js"></script>
    <script src="scripts/util.js"></script>
    <script src="scripts/pedidosInit.js"></script>
    <script src="scripts/pedidos.js"></script>
    <!-- JS -->       
    
</head>
<body>
    <form id="frmPedidos"  data-toggle="validator" role="form">        

        <!-- Cabeçalho -->
        <div class="navbar navbar-inverse"><h1 style="color:white;">CARRINHO DE COMPRAS</h1></div>            
        <!-- Cabeçalho -->

        <!-- Titulos -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>REALIZAR PEDIDOS</h3>
                </div>
            </div>
            <hr />
        </div>
        <!-- Titulos -->

        <!-- Div de Pedidos -->
        <div id="divPedidos" class="container">

            <!-- Email -->
            <div class="form-group">
                <label for="inputEmail" class="control-label">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="informe o seu email"
                        data-error="Por favor, preencha esse campo com um email válido. Ex: douglas@dmsistemas.com.br" required>
                <div class="help-block with-errors"></div>
            </div>
            <!-- Email -->
            <!-- Produto -->
            <div class="form-group">
                <label class="control-label" for="selectProduto">Produto</label><br />
                <select class="btn dropdown-toggle selectpicker btn-default" id="selectProduto" placeholder="Escolha um produto">
                    <option value="ABSBH">ABSCard Belo Horizonte</option>
                    <option value="ABSSP">ABSCard São Paulo</option>
                </select>
                <div class="help-block with-errors"></div>
            </div>
            <!-- Produto -->
            <!-- Quantidade -->
            <div class="form-group">
                <label class="control-label" for="inputQuantidade">Quantidade</label>
                <input class="form-control" id="inputQuantidade" placeholder="Informe a quantidade do produto desejado."
                    data-error="Por favor, preencha esse campo com um valor inteiro, de 1 a 1000." type="number" min="1" max="1000" required />
                <div class="help-block with-errors"></div>
            </div>
            <!-- Quantidade -->

            <!-- Action -->
            <button type="button" id="buttonAdicionar" class="btn btn-success">Adicionar pedido</button>
            <span>* Para modificar um produto do carrinho, basta inseri-lo novamente ou removê-lo.</span>
            <!-- Action -->

            <br />
            <br />

            <!-- Grid com Pedidos -->
            <div class="row">
                <div id="divPedidosCarrinhoCompras" class="col-md-12 col-md-12">
                    <h5>Carrinho de compras</h5>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody id="pedidosItens">
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Action -->
                <div class="col-md-12 col-md-12">
                    <button type="button" id="buttonFinalizar" href="#" class="btn btn-primary">Finalizar pedido</button>
                    <div id="spanFinalizarErros" class="help-block with-errors" style="color:#a94442; display:none;">Para finalizar a compra, deve ser incluido pelo menos um produto.</div>
                </div>
                <!-- Action -->
            </div>
            <!-- Grid com Pedidos -->

        </div>
        <!-- Div de Pedidos -->

        <!-- Div de Resumo dos Pedidos -->
        <div id="divResumo" class="container" style="display: none;">

            <!-- Grid com Pedidos -->
            <div class="row">
                <div id="divResumoCarrinhoCompras" class="col-md-12 col-md-12">
                </div>
                <div class="col-md-12 col-md-12">
                    <button type="button" id="buttonVoltar" href="#" class="btn btn-warning">Voltar</button>
                    <button type="button" id="buttonEnviarEmail" href="#" class="btn btn-primary">Enviar Email<//button>
                </div>
            </div>
            <!-- Grid com Pedidos -->


        </div>
        <!-- Div de Resumo dos Pedidos -->

        <!-- MODAL AVISOS -->
        <div class="modal fade" id="modalConfirmacaoBig" data-id="modalConfirmacaoBig" tabindex="-1"
        role="dialog" aria-labelledby="basicModal" aria-hidden="true">
        <div class="modal-dialog" data-id="BaseModalConfirmacaoBig">
            <div class="BaseModalConfirmacaoBig">
                <div class="modal-content" data-id="BaseModalConfirmacaoConfirmacaoBig" id="BaseModalConfirmacaoConfirmacaoBig">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        </button>
                        <div class="modal-title tituloModalConfirmacao" id="modalBigTitulo" data-id="modalBigTitulo">Atenção!</div>
                    </div>
                    <div class="modal-body">
                        <div id="modalBigCorpo" class="corpoModalConfirmacao" data-id="modalBigCorpo">                    
                            <div class="row" style="padding-left:2%;">
                                <h3><span id="textModal"></span></h3>
                            </div><br />                 
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="row" style="padding-right:10px;">
                            <div class="col-md-8" style="text-align: left; display: none;" data-id="divAvisoParametroSugerido">* Os parâmetros sugeridos serão desconsiderados.</div>                                        
                            <button type="button" class="btn btn-success btn-md botao botao botao-borda-arrendodada" data-dismiss="modal" id="btnCancelarBig" data-id="btnCancelarBig">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- MODAL AVISOS -->

    </form>
</body>
</html>

