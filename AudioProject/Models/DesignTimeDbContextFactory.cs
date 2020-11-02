using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace AudioProject.Models
{
  public class AudioProjectContextFactory : IDesignTimeDbContextFactory<AudioProjectContext>
  {
    AudioProjectContext IDesignTimeDbContextFactory<AudioProjectContext>.CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

      var builder = new DbContextOptionsBuilder<AudioProjectContext>();
      var connectionString = configuration.GetConnectionString("DefaultConnection");

      builder.UseMySql(connectionString);

      return new AudioProjectContext(builder.Options);
    }
  }
}