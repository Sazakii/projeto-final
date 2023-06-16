using System.ComponentModel.DataAnnotations;

namespace apparteyment.Models
{
    public class ContactModel
    {
        public int ID { get; set; }

        public string Nome { get; set; }

        [RegularExpression(@"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$", ErrorMessage = "Por favor, insira um endereço de email válido.")]
        public string Email { get; set; }

        [RegularExpression(@"^[0-9()-]+$", ErrorMessage = "Por favor, insira um número de telefone válido.")]
        public string Numero { get; set; }
    }
}
