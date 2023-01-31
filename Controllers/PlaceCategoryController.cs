using Microsoft.AspNetCore.Mvc;
using Geonote.Models;
using Geonote.Repositories;

namespace Geonote.Controllers
{
    [Route("api/placeCategory")]
    public class PlaceCategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public List<PlaceCategorу> GetAllCategories()
        {
            return PlaceCategoryRepository.GetAllPlaceCategories();
        }
        [HttpGet("{placeCategoryId}")]
        public PlaceCategorу? GetDetaledCategoryData(string categoryId)
        {
            return PlaceCategoryRepository.GetPlaceCategory(categoryId);
        }
        [HttpPost]
        public void CreateNewCategory([FromBody] PlaceCategorу category)
        {
            PlaceCategoryRepository.AddNewPlaceCategory(category.Name);
        }
        [HttpDelete("{id}")]
        public void DeleteCategory(string id)
        {
            PlaceCategoryRepository.DeletePlaceCategoryById(id);
        }
        [HttpPut("{id}")]
        public PlaceCategorу? UpdateCategoryById(string id, [FromBody] PlaceCategorу placeCategory)
        {
            PlaceCategoryRepository.UpdatePlaceCategoryNameById(id, placeCategory);
            return PlaceCategoryRepository.GetPlaceCategory(id);
        }


    }
}
