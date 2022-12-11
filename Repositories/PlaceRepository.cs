using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Xml.Linq;

namespace Geonote.Repositories
{
    public class PlaceRepository
    {
        private static readonly string placeTableName = "Place";

        public static void AddNewPlace(Place place)
        {
            
            var columnNames = "Id, Name";
            var columnValues = $"\"{place.Id}\", \"{place.Name}\"";

            if (place.comment != null)
            { columnNames += ", Comment"; columnValues += $", \"{place.Comment}\""; }
            
            if (place.addressId != null)
            { columnNames += ", AddressId"; columnValues += $", \"{place.AddressId}\""; }

            if (place.type != null)
            { columnNames += ", Category"; columnValues += $", \"{place.Category}\""; }

            if (place.locationId != null)
            { columnNames += ", LocationId"; columnValues += $", \"{place.LocationId}\""; }


            SQLTableManagement.InsertData(placeTableName, columnNames, columnValues);
        }
/* 
        public static List<Place>? GetPlaceById(string placeId)
        {
           var newConnection = SQLiteConnect.CreateConnection();
            var output = newConnection.Query<Place>($"SELECT * FROM {placeTableName} WHERE id = \"{placeId}\" "); //check syntax for parametres in Dapper
            return output.ToList();
           string clause = $"id = \"{placeIdOrig}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(placeTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);
                string addressId = sqlite_datareader.GetString(2);
                string type = sqlite_datareader.GetString(3);
                string comment = sqlite_datareader.GetString(4);
                string locationId = sqlite_datareader.GetString(5);

                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Place(name, addressId, type, comment, locationId) //By creating a new entity, we are changing the id. Good - security, bad - ??
                {
                    id = placeIdOrig,
                    name = name,
                    addressId= addressId,
                    type = type,
                    comment = comment,
                    locationId = locationId, 
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;*/
        }

        // GetPlaceByType(string placeType)
        // GetPlaceByName(string placeName)

        public static void UpdatePlaceById(string id, Place place)
        {
            var setValues = "";
            var clause = $"Id = \"{id}\"";

            setValues += $"Name = \"{place.Name}\"";
            setValues += $", AddressId = \"{place.AddressId}\"";
            setValues += $", Category = \"{place.Category}\"";
            setValues += $", Comment = \"{place.Comment}\"";
            setValues += $", LocationId = \"{place.LocationId}\"";

            SQLTableManagement.UpdateData(placeTableName, setValues, clause);
        }

        public static void DeletePlaceById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(placeTableName, clause);
        }

        public static void DeletePlaceByName(string name)
        {
            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(placeTableName, clause);
        }

    }
}
