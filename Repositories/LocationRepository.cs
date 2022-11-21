using Geonote.Models;

namespace Geonote.Repositories
{
    public class LocationRepository
    {
        private static readonly string locationTableName = "Location";
        
        public static void AddNewErrand(string locationName, string longitude, string latitude, string? placeId)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Name, Longitude, Latitude";
            var columnValues = $"\"{id}\", \"{locationName}\", \"{longitude}\", \"{latitude}\"";

            if (placeId != null)

                { columnNames += ", PlaceId"; columnValues += $", \"{placeId}\""; }


            SQLTableManagement.InsertData(locationErrand, columnNames, columnValues);
        }

    }
}
