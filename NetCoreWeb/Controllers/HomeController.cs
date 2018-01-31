using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NetCoreWeb.Models;

namespace NetCoreWeb.Controllers
{
    public class HomeController : Controller
    {
        public int t = 0;
        public ActionResult Index()
        {
            Int32 d=fun(5);//3
            int a = t;//5
            return View();
        }

        public int fun(int n)
        {
            t++;
            if (n == 1 || n == 2)
            {
                return 1;
            }
            else
            {
                int a = fun(n - 1) + fun(n - 2);
                return fun(n - 1) + fun(n - 2);
            }

        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
