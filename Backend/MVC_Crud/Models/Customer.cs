using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVC_Crud.Models
{
    public class Customer
    {
        [Key]   //to indicate this is primary for specific instance
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]   //autogenerating the value with help of DB
        public int Id { get; set; }

        [Required]  //can't be null
        [StringLength(50)]  //max size of string
        public string Name { get; set; } = string.Empty; //initiating with empty string value because defined as required

        [Required]
        [Range(0, 200, ErrorMessage = "Age must be below 200.")]
        public int Age { get; set; }

        [Required]
        [StringLength(20)]
        public string NIC { get; set; }

        [Required]
        [StringLength(100)]
        public string Address { get; set; }
    }
}
