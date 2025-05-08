using Microsoft.EntityFrameworkCore;
using MVC_Crud.Models;

namespace MVC_Crud.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Customer> Customers { get; set; }
    }
}
