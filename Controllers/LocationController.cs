using Geonote.Models;
using Geonote.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Geonote.Controllers
{
    [Route("api/location")]
    public class LocationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public List<Location> GetAllLocations()
        {
            return LocationRepository.GetAllLocation();
        }

        [HttpGet("{id}")]
        public Location? GetLocationById(string id)
        {
            return LocationRepository.GetLocation(id);
        }
        /*[HttpGet("places")]
        public List<Location>? GetLocationsWithPlaces()
        {

        }*/

        [HttpPost]
        public void AddLocation([FromBody] Location location)
        {
            LocationRepository.AddNewLocation(location.Latitude, location.Longitude, null);
        }
        [HttpDelete("{id}")]
        public void DeleteLocation(string id)
        {
            LocationRepository.DeleteLocationById(id);
        }
        [HttpPut("{id}")]
        public Location? UpdateLocation(string id, [FromBody] Location location)
        {
            if(location.Latitude == null)
            {
                LocationRepository.UpdateLocationById(id, null, location.Longitude);
            }
            if(location.Longitude == null)
            {
                LocationRepository.UpdateLocationById(id, location.Latitude, null);
            }
            return LocationRepository.GetLocation(id);
        }


    }
}
