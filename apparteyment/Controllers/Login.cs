using Microsoft.AspNetCore.Mvc;

namespace apparteyment.Controllers
{
    public class Login : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Cadastro()
        {
            return View();
        }
    }

}