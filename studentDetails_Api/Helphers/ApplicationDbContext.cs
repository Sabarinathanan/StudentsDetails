using Microsoft.EntityFrameworkCore;
using studentDetails_Api.Model;

namespace studentDetails_Api.Helphers
{
    public class ApplicationDbContext: DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<studentDetails> studentDetails { get; set; }
    }
}
