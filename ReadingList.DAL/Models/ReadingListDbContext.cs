using Microsoft.EntityFrameworkCore;

namespace ReadingList.DAL.Models
{
    public class ReadingListDbContext : DbContext
    {
        public ReadingListDbContext(DbContextOptions<ReadingListDbContext> options)
            : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
