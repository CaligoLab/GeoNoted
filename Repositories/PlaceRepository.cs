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

        public static ServiceResponce<Place?> AddNewPlace(Place place)
        {
           var serviceResponce = new ServiceResponce<Place?>();
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

            serviceResponce.Message = "The Place have been created successfully";

            return serviceResponce;
        }

        // GetPlaceByType(string placeType)
        // GetPlaceByName(string placeName)

        public static ServiceResponce<List<Place>> GetAllPlaces()
        {
            var serviceResponce = new ServiceResponce<List<Place>>();

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

            serviceResponce.Data = allPlaces;
            serviceResponce.Message = "Here are all your Places";

            return serviceResponce;
        }

        public static ServiceResponce<Place?> GetPlaceById(string placeId)
        {
            var serviceResponce = new ServiceResponce<Place?>();

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

                var returnedPlace = new Place
                {
                    Id = placeId,
                    Name = placeName,
                    AddressId = addressId,
                    Category = category, 
                    Comment = comment,
                    LocationId = locationId,

                };

                serviceResponce.Data = returnedPlace;
                serviceResponce.Message = "Here's the Place you asked for";

                return serviceResponce;
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);

            serviceResponce.Success = false;
            serviceResponce.Message = "There's no such Place in your Organizer";

            return serviceResponce;

        }

        public static ServiceResponce<Place?> UpdatePlaceById(string id, Place place)
        {
            var serviceResponce = new ServiceResponce<Place?>();

            var setValues = "";
            var clause = $"Id = \"{id}\"";

            setValues += $"Name = \"{place.Name}\"";
            setValues += $", AddressId = \"{place.AddressId}\"";
            setValues += $", Category = \"{place.Category}\"";
            setValues += $", Comment = \"{place.Comment}\"";
            setValues += $", LocationId = \"{place.LocationId}\"";

            SQLTableManagement.UpdateData(PlaceTableName, setValues, clause);

            return serviceResponce;
        }

        public static ServiceResponce<Place?> DeletePlaceById(string id)
        {
            var serviceResponce = new ServiceResponce<Place?>();

            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);

            return serviceResponce;
        }

        public static ServiceResponce<Place?> DeletePlaceByName(string name)
        {
            var serviceResponce = new ServiceResponce<Place?>();

            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);

            return serviceResponce;
        }

    }
}
