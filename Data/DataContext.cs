

using Geonote.Models;
using Microsoft.EntityFrameworkCore;

namespace Geonote.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<User> User => Set<User>();
        public DbSet<Place> Place => Set<Place>();

    }
}
