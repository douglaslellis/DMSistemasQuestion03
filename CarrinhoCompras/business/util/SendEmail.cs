using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Mail;

namespace CarrinhoCompras.util
{
    public static class SendEmail
    {
        public static void sendEmail(string to, string boby)
        {
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("dota.douglas.lellis@gmail.com");
            msg.To.Add(to);
            msg.Subject = "Parabéns pela sua compra efetuada no carrinho de compras ABSCard - " + DateTime.Now.ToString();
            msg.IsBodyHtml = true;
            msg.Body = boby;
            SmtpClient client = new SmtpClient();
            client.UseDefaultCredentials = true;
            client.Host = "smtp.gmail.com";
            client.Port = 587;
            client.EnableSsl = true;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.Credentials = new NetworkCredential("dota.douglas.lellis@gmail.com", "qwert@1234");            
            try
            {
                client.Send(msg);                
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                msg.Dispose();
            }

        }

    }
}
