using System.ComponentModel.DataAnnotations;

namespace studentDetails_Api.Model.Dto
{
    public class userDetails
    {
    }

    public class saveUserDetails
    {
        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public string dateOfBirth { get; set; }

        [Required]
        public string gender { get; set; }

        [Required]
        public string email { get; set; }

        [Required]
        public string mobileNumber { get; set; }

        public int studentId { get; set; } = 0;
    }
}
