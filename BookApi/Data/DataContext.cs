using BookApi.Entitys;
using Microsoft.EntityFrameworkCore;

namespace BookApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Book> Books {get; set; }
    }
}
