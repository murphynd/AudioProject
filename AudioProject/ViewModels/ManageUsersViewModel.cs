using System.Collections.Generic;
using AudioProject.Models;

namespace AudioProject.ViewModels
{
  public class ManageUsersViewModel
  {
    public ApplicationUser[] Administrators { get; set; }

    public ApplicationUser[] Everyone { get; set; }
  }
}