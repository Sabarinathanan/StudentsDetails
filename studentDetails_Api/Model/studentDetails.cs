using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace studentDetails_Api.Model
{
    public class studentDetails
    {
        [Key]
        public int studentID { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public DateOnly? dateOfBirth { get; set; }
        public string? gender { get; set; }
        public string? email { get; set; }
        public string? mobileNumber { get; set; }
        public DateTime createdDate { get; set; }
        public DateTime? updatedDate { get; set; }
        public DateTime? deletedDate { get; set; }
    }
}

      