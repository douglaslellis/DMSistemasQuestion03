using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using CarrinhoCompras.util;

namespace CarrinhoCompras
{
    public partial class Pedidos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Page.IsPostBack) return;
        }

        [WebMethod]
        public static string EnviarEmail(string email, string html)
        {
            SendEmail.sendEmail(email, html);
            return string.Empty;
        }
    }
}