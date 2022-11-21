using Geonote.Models;

namespace Geonote.Repositories
{
    public class LocationRepository
    {
        private static readonly string locationTableName = "Location";
        
        public static void AddNewLocation(string latitude, string longitude, string? placeId)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Latitude, Longitude";
            var columnValues = $"\"{id}\", \"{latitude}\", \"{longitude}\"";

            if (placeId != null) { columnNames += ", PlaceId"; columnValues += $", \"{placeId}\""; }


            SQLTableManagement.InsertData(locationTableName, columnNames, columnValues);
        }
    }
}
