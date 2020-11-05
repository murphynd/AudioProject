using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace AudioProject.Models
{
  public class AudioProjectContext : IdentityDbContext<ApplicationUser>
  {
    public DbSet<Sounds> Sounds { get; set; }
    public AudioProjectContext(DbContextOptions options) : base(options) { }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseLazyLoadingProxies();
    }
  }
}