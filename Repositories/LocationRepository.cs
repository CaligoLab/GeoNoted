using Geonote.Models;

namespace Geonote.Repositories
{
    public class LocationRepository
    {
        private static readonly string locationTableName = "Location";
        
        public static void AddNewLocation(string latitude, string longitude)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Latitude, Longitude";
            var columnValues = $"\"{id}\", \"{latitude}\", \"{longitude}\"";

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

        public static List<Location> GetAllLocations()
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

        public static Location? GetLocationWithAllPlaces(string locationIdForPlaces)
        {
            var statement = $"SELECT Location.Id AS LocationId, Location.Latitude, Location.Longitude, "+
                "Place.Id AS PlaceId, Place.Name AS PlaceName, Place.AddressId, Category AS PlaceCategory, "+
                "Place.Comment AS PlaceComment"+
                "\r\nFROM Location"+
                "\r\nLEFT JOIN Place on Location.Id = Place.LocationId "+
                $"WHERE Location.Id = \"{locationIdForPlaces}\";";
            var sqlite_datareader = SQLTableManagement.ReadCustomData(statement);


            Location location = null;
            var places = new LinkedList<Place>();

            while (sqlite_datareader.Read())
            {
                var locationId = sqlite_datareader.GetString(0);
                var latitude = sqlite_datareader.GetString(1); 
                var longitude = sqlite_datareader.GetString(2);

                Place? place = null;
                if (sqlite_datareader[3] != DBNull.Value)
                {
                    var placeId = sqlite_datareader.GetString(3);
                    if (places.Where(i => i.Id == placeId).Count() > 0) 
                    {
                        place = places.Where(i => i.Id == placeId).First();
                    }
                    else
                    {
                        string? addressId = null;
                        string? placeCategory = null;
                        string? placeComment = null;
                        var placeName = sqlite_datareader.GetString(4); 

                        if (sqlite_datareader[5] != DBNull.Value)
                        { addressId = sqlite_datareader.GetString(5);}
                        if (sqlite_datareader[6] != DBNull.Value)
                        { placeCategory = sqlite_datareader.GetString(6);}
                        if (sqlite_datareader[7] != DBNull.Value)
                        { placeComment = sqlite_datareader.GetString(7);}
                        place = new Place
                        {
                            Id = placeId,        
                            Name = placeName,
                            AddressId = addressId,
                            PlaceCategory = placeCategory,
                            Comment = placeComment
                        };
                        places.AddLast(place);
                    }
                }

                if (location == null)
                {
                    location = new Location
                    {
                        Id = locationId,
                        Latitude = latitude,
                        Longitude = longitude
                    };
                }
                if (place != null)
                {
                    if (!location.Place.Contains(place))
                    {
                        location.Place.Add(place);
                    }
                }
            }
            return location;
        }

        public static void UpdateLocationById(string id, Location location)
        {
            var clause = $"Id = \"{id}\"";
            var setName = $"Latitude = \"{location.Latitude}\", Longitude = \"{location.Longitude}\"";
   
            SQLTableManagement.UpdateData(locationTableName, setName, clause);
        }

        public static void DeleteLocationById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(locationTableName, clause);
        }
    }
}
