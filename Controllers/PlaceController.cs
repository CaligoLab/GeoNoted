using Geonote.Models;
using Geonote.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Geonote.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlaceController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult<ServiceResponce<List<Place>>> GetAllPlaces()
        {
            return PlaceRepository.GetAllPlaces();

        }

        [HttpGet("{placeId}")] 
        public ServiceResponce<Place?> GetPlaceByID(string placeId)
        {
            return PlaceRepository.GetPlaceById(placeId);
        }

        [HttpPost ]

        public ServiceResponce<Place?> CreateNewPlace([FromBody] Place place)
        {
            return PlaceRepository.AddNewPlace(place);
        }
        
    }
}
