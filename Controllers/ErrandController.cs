using Geonote.Models;
using Geonote.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Geonote.Controllers
{
    [Route("api/[controller]")]
    public class ErrandController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public List<Errand> GetAllErrands()
        {
            return ErrandRepository.GetAllErrands();
        }

        [HttpGet("{id}")]
        public Errand? GetErrandWithAllFilds(string id)
        {
            return ErrandRepository.GetErrandWithAllFields(id);
        }

        [HttpPost]
        public void CreateNewErrand([FromBody] Errand errand)
        {
            ErrandRepository.AddNewErrand(errand);
        }

        [HttpPut("{id}")]
        public Errand? UpdateErrand(string id, [FromBody] Errand errand)
        {
            ErrandRepository.UpdateErrandById(id, errand);
            return ErrandRepository.GetErrand(id);
        }

        [HttpDelete("{id}")]
        public void DeleteErrand(string id)
        {
            ErrandRepository.DeleteErrandById(id);
        }
    }
}
