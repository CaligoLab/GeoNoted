using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;
using System.Data;
using System.Linq;
using System.Xml.Linq;

namespace Geonote.Repositories
{
    public class PlaceRepository
    {
        private static readonly string PlaceTableName = "Place";

        public static void AddNewPlace(Place place)
        {
           // if (place.Id == null)
            //{
            place.Id = Guid.NewGuid().ToString(); 
        //}

            var columnNames = "Id, Name";
            var columnValues = $"\"{place.Id}\", \"{place.Name}\"";

            if (place.Comment != null)
            { columnNames += ", Comment"; columnValues += $", \"{place.Comment}\""; }

           //columnNames += ", Comment"; columnValues += $", \"{place.Comment}\"";
           
            if (place.AddressId != null)
            { columnNames += ", AddressId"; columnValues += $", \"{place.AddressId}\""; }

            if (place.Category != null)
            { columnNames += ", Category"; columnValues += $", \"{place.Category}\""; }

            if (place.LocationId != null)
            { columnNames += ", LocationId"; columnValues += $", \"{place.LocationId}\""; }

            SQLTableManagement.InsertData(PlaceTableName, columnNames, columnValues);
        }

        // GetPlaceByType(string placeType)
        // GetPlaceByName(string placeName)

        public static List<Place> GetAllPlaces()
        {

            var allPlaces = new List<Place>();
            var sqlite_datareader = SQLTableManagement.ReadData(PlaceTableName, null);

            while (sqlite_datareader.Read())
            {
                string id = sqlite_datareader.GetString(0);
                string name = sqlite_datareader.GetString(1);
                string? addressId = null;
                string? category = null;
                string? comment = null;
                string? locationId = null;


                if (sqlite_datareader[2] != DBNull.Value) { addressId = sqlite_datareader.GetString(2); }
                if (sqlite_datareader[3] != DBNull.Value) { category = sqlite_datareader.GetString(3); }
                if (sqlite_datareader[4] != DBNull.Value) { comment = sqlite_datareader.GetString(4); }
                if (sqlite_datareader[5] != DBNull.Value) { locationId = sqlite_datareader.GetString(5); }

                allPlaces.Add(new Place
                {
                    Id = id,
                    Name = name,
                    AddressId = addressId,
                    Category = category,
                    Comment = comment,
                    LocationId = locationId,

                }); ;
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allPlaces;
        }

        public static Place? GetPlaceById(string placeId)
        {
            var clause = $"Id = \"{placeId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(PlaceTableName, clause);
            while (sqlite_datareader.Read())
            {
                string placeName = sqlite_datareader.GetString(1);
                string? addressId = null;
                string? category = null;
                string? comment = null;
                string? locationId = null;


                if (sqlite_datareader[2] != DBNull.Value) { addressId = sqlite_datareader.GetString(2); }
                if (sqlite_datareader[3] != DBNull.Value) { category = sqlite_datareader.GetString(3); }
                if (sqlite_datareader[4] != DBNull.Value) { comment = sqlite_datareader.GetString(4); }
                if (sqlite_datareader[5] != DBNull.Value) { locationId = sqlite_datareader.GetString(5); }

                SQLiteConnect.CloseConnections(sqlite_datareader);

                return new Place
                {
                    Id = placeId,
                    Name = placeName,
                    AddressId = addressId,
                    Category = category, 
                    Comment = comment,
                    LocationId = locationId,

                };
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;

        }

        public static void UpdatePlaceById(string id, Place place)
        {
            var setValues = "";
            var clause = $"Id = \"{id}\"";

            setValues += $"Name = \"{place.Name}\"";
            setValues += $", AddressId = \"{place.AddressId}\"";
            setValues += $", Category = \"{place.Category}\"";
            setValues += $", Comment = \"{place.Comment}\"";
            setValues += $", LocationId = \"{place.LocationId}\"";

            SQLTableManagement.UpdateData(PlaceTableName, setValues, clause);
        }

        public static void DeletePlaceById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);
        }

        public static void DeletePlaceByName(string name)
        {
            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);
        }

    }
}
