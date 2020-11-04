using Microsoft.AspNetCore.Mvc;
using AudioProject.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.Security.Claims;

namespace AudioProject.Controllers
{
  public class ToneController : Controller
  {
    private readonly AudioProjectContext _db;

    public ToneController(AudioProjectContext db)
    {
      _db = db;
    }
    [HttpGet("/")]
    public ActionResult Index()
    {
      return View();
    }
    public ActionResult add(Sounds sounds)
    {
      _db.Sounds.Add(sounds);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }
  }
}