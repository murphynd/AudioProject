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
using System;


namespace AudioProject.Controllers
{
  [Authorize]
  public class ToneController : Controller
  {
    private readonly AudioProjectContext _db;
    private readonly UserManager<ApplicationUser> _userManager;

    public ToneController(UserManager<ApplicationUser> userManager, AudioProjectContext db)
    {
      _userManager = userManager;
      _db = db;
    }
    [HttpGet]
    public ActionResult Index()
    {
      return View();
    }
    
    [HttpPost]
    public async Task<ActionResult> Index(Sounds sound)
    {
      var userId = this.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      var currentUser = await _userManager.FindByIdAsync(userId);
      sound.User = currentUser;
      _db.Sounds.Add(sound);
      _db.SaveChanges();
      return RedirectToAction("Index");
    }
    public ActionResult Edit(int id)
    {
      var thisSound = _db.Sounds.FirstOrDefault(Sounds => Sounds.SoundsId == id);
      return View(thisSound);
    }
    [HttpPost]
     public ActionResult Edit(Sounds sound)
    {
      //   var userId = this.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
      // var currentUser = await _userManager.FindByIdAsync(userId);
      // sound.User = currentUser;
      // _db.Entry(sound).State = EntityState.Modified;
      // _db.SaveChanges();
      return Redirect("~/Account");
    }
  }
}
