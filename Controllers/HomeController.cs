using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BilalPortfolio.Models;

namespace BilalPortfolio.Controllers;

public class HomeController : Controller
{
    public IActionResult Index() => View();

    public IActionResult Error()
    {
        return View(new ErrorViewModel
        {
            RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
        });
    }
}
