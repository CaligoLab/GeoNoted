using Geonote.Models;

namespace Geonote.Repositories
{
    public class LocationRepository
    {
        private static readonly string locationErrand = "Location";
        
        public static void AddNewErrand(string locationName, string longitude, string latitude)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(locationErrand, "ID, Name, Longitude, Latitude", 
                                          $"\" {id}\", \"{locationName}\", \"{longitude}\", \"{latitude}\"");
        }

    }
}
