

using Microsoft.EntityFrameworkCore;

namespace Geonote.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
    }
}
