using Geonote.Models;

namespace Geonote.Repositories
{
    public class LocationRepository
    {
        private static readonly string locationErrand = "Location";
        
        public static void AddNewErrand(string locationName, Place place, string longitude, string latitude)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(locationErrand, "ID, Name, Places, Longitude, Latitude", 
                                          $"\" {id}\", \"{locationName}\", \"{place}\", \"{longitude}\", \"{latitude}\"");
        }

    }
}
