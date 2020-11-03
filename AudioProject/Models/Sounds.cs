using System.Collections.Generic;

namespace AudioProject.Models
{
  public class Sounds
  {
    public int SoundsId { get; set; }
    public string Synth { get; set; }
    public virtual ApplicationUser User { get; set; }
  }
}