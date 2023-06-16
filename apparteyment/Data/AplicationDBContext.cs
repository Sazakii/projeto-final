using apparteyment.Models;
using Microsoft.EntityFrameworkCore;

namespace apparteyment.Data
{
    public class AplicationDBContext : DbContext
    {
        public DbSet<ContactModel> ContactDB { get; set; }

        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options)
        {
        }
    }
}
