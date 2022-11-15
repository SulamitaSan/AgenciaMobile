using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AgenciaBackEnd.Models
{
    [Table("Destino")]
    public class Destino
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Informa a Ida")]
        public DataType Ida { get; set; }
        [Required(ErrorMessage = "Informa a Volta")]
        public DataType Volta { get; set; }
        public int Valor { get; set; }

    }
}
