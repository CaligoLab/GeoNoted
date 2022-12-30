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

        [HttpGet("{categoryId}")]
        public Categorу? GetDetaledCategoryData(string categoryId)
        {
            return CategoryRepository.GetCategory(categoryId);
        }

        [HttpPost]
        public void CreateNewCategory([FromBody] Categorу category)
        {
            CategoryRepository.AddNewCategory(category.Name);
        }

        [HttpDelete("{id}")]
        public void DeleteCategory(string id)
        {
            CategoryRepository.DeleteCategoryById(id);
        }

        [HttpPut("{id}")]
        public Categorу? UpdateCategoryById(string id, [FromBody] string name)
        {
            CategoryRepository.UpdateCategoryNameById(name, id);
            return CategoryRepository.GetCategory(id);
        }
    }
}
