using System.Collections.Generic;
using System;

namespace AudioProject.Models
{
  public class Sounds
  {
    public int SoundsId { get; set; }
    public string Name { get; set; }
    public string Chords { get; set; }
    public string SynthType { get; set; }
    public string OscillatorType { get; set; }
    public string OscillatorPartials { get; set; }
    public string FilterOutput { get; set; }
    public string DelayOutput { get; set; }
    public string ReverbOutput { get; set; }
    public string BPMOutput { get; set; }
    public string attack { get; set; }
    public string decay { get; set; }
    public string sustain { get; set; }
    public string release { get; set; }

    public virtual ApplicationUser User { get; set; }
  }
}