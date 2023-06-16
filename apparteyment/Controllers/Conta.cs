using Microsoft.AspNetCore.Mvc;

namespace apparteyment.Controllers
{
    public class Conta : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult EditarConta()
        {
            return View();
        }
    }

}