using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace college.models
{
   public class Course
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required] 
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
        [Required]
        public int  Seates { get; set; }

        [DefaultValue(true)]
        public bool Status { get; set; }
       
    }
}
