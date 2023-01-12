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
            return LocationRepository.GetAllLocations();
        }

        [HttpGet("{id}")]
        public Location? GetLocationById(string id)
        {
            return LocationRepository.GetLocation(id);
        }

        [HttpGet("places/{locationId}")]
        public Location? GetDetaledLocationData(string locationId)
        {
            return LocationRepository.GetLocationWithAllPlaces(locationId);
        }

        [HttpPost]
        public void AddLocation([FromBody] Location location)
        {
            LocationRepository.AddNewLocation(location.Latitude, location.Longitude);
        }

        [HttpDelete("{id}")]
        public void DeleteLocation(string id)
        {
            LocationRepository.DeleteLocationById(id);
        }

        [HttpPut("{id}")]
        public Location? UpdateLocation(string id, [FromBody] Location location)
        {
            LocationRepository.UpdateLocationById(id, location);
            return LocationRepository.GetLocation(id);
        }
    }
}
