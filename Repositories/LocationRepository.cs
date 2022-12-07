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

        public static Location? GetLocation(string locationId)
        {
            string clause = $"Id = \"{locationId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(locationTableName, clause);
            while (sqlite_datareader.Read())
            {
                string latitude = sqlite_datareader.GetString(1);
                string longitude = sqlite_datareader.GetString(2);
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Location
                {
                    Id = locationId,
                    Latitude = latitude,
                    Longitude = longitude
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;
        }

        public static List<Location> GetAllLocation()
        {
            var allLocation = new List<Location>();
            var sqlite_datareader = SQLTableManagement.ReadData(locationTableName, null);
            while (sqlite_datareader.Read())
            {
                string id = sqlite_datareader.GetString(0);
                string latitude = sqlite_datareader.GetString(1);
                string longitude = sqlite_datareader.GetString(2);
                allLocation.Add(new Location
                {
                    Id = id,
                    Latitude = latitude,
                    Longitude = longitude
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allLocation;
        }

        public static void UpdateLocationById(string id, string? latitude, string? longitude)
        {
            var setName = "";
            var clause = $"Id = \"{id}\"";

            if (!(latitude == null))
            { setName += $"Latitude = \"{latitude}\""; }
            if (!(longitude == null))
            { setName += $"Longitude = \"{longitude}\""; }

            SQLTableManagement.UpdateData(locationTableName, setName, clause);
        }

        public static void DeleteLocationById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(locationTableName, clause);
        }
    }
}
