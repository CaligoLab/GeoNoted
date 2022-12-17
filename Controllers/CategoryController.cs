using Microsoft.AspNetCore.Mvc;
using Geonote.Models;
using Geonote.Repositories;

namespace Geonote.Controllers
{
    [Route("api/category")]
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public List<Categorу> GetAllCategories()
        {
            return CategoryRepository.GetAllCategories();
        }


    }
}
