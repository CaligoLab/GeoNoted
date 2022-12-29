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

        public static ServiceResponce<Place> AddNewPlace(Place place)
        {
           var serviceResponce = new ServiceResponce<Place>();
            // if (place.Id == null)
            //{
            place.Id = Guid.NewGuid().ToString(); 
        //}

            var columnNames = "Id, Name";
            var columnValues = $"\"{place.Id}\", \"{place.Name}\"";

            if (place.AddressId != null)
            { columnNames += ", AddressId"; columnValues += $", \"{place.AddressId}\""; }

            if (place.PhoneNumber != null)
            { columnNames += ", PhoneNumber"; columnValues += $", \"{place.PhoneNumber}\""; }

            if (place.Category != null)
            { columnNames += ", Category"; columnValues += $", \"{place.Category}\""; }

            if (place.Comment != null)
            { columnNames += ", Comment"; columnValues += $", \"{place.Comment}\""; }

            if (place.LocationId != null)
            { columnNames += ", LocationId"; columnValues += $", \"{place.LocationId}\""; }

            SQLTableManagement.InsertData(PlaceTableName, columnNames, columnValues);

            serviceResponce.Message = "The Place has been created successfully";

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
                string? phoneNumber = null;
                string? category = null;
                string? comment = null;
                string? locationId = null;


                if (sqlite_datareader[2] != DBNull.Value) { addressId = sqlite_datareader.GetString(2); }
                if (sqlite_datareader[3] != DBNull.Value) { phoneNumber = sqlite_datareader.GetString(3); }
                if (sqlite_datareader[4] != DBNull.Value) { category = sqlite_datareader.GetString(4); }
                if (sqlite_datareader[5] != DBNull.Value) { comment = sqlite_datareader.GetString(5); }
                if (sqlite_datareader[6] != DBNull.Value) { locationId = sqlite_datareader.GetString(6); }

                allPlaces.Add(new Place
                {
                    Id = id,
                    Name = name,
                    AddressId = addressId,
                    PhoneNumber = phoneNumber,
                    Category = category,
                    Comment = comment,
                    LocationId = locationId,

                }); ;
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);

            serviceResponce.Data = allPlaces;
            serviceResponce.Message = $"Total number of Places: {allPlaces.Count}";

            return serviceResponce;
        }

        public static ServiceResponce<Place> GetPlaceById(string placeId)
        {
            var serviceResponce = new ServiceResponce<Place>();

            var clause = $"Id = \"{placeId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(PlaceTableName, clause);
            while (sqlite_datareader.Read())
            {
                string placeName = sqlite_datareader.GetString(1);
                string? addressId = null;
                string? phoneNumber = null;
                string? category = null;
                string? comment = null;
                string? locationId = null;


                if (sqlite_datareader[2] != DBNull.Value) { addressId = sqlite_datareader.GetString(2); }
                if (sqlite_datareader[3] != DBNull.Value) { phoneNumber = sqlite_datareader.GetString(3); }
                if (sqlite_datareader[4] != DBNull.Value) { category = sqlite_datareader.GetString(4); }
                if (sqlite_datareader[5] != DBNull.Value) { comment = sqlite_datareader.GetString(5); }
                if (sqlite_datareader[6] != DBNull.Value) { locationId = sqlite_datareader.GetString(6); }

                SQLiteConnect.CloseConnections(sqlite_datareader);

                var returnedPlace = new Place
                {
                    Id = placeId,
                    Name = placeName,
                    AddressId = addressId,
                    PhoneNumber = phoneNumber,
                    Category = category, 
                    Comment = comment,
                    LocationId = locationId,

                };

                serviceResponce.Data = returnedPlace;
                serviceResponce.Message = "Here's some success message";

                return serviceResponce;
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);

            serviceResponce.Success = false;
            serviceResponce.Message = "There's no such Place in your Organizer";

            return serviceResponce;

        }

        public static ServiceResponce<Place> UpdatePlaceById(string id, Place place)
        {
            var serviceResponce = new ServiceResponce<Place>();

            var columnValues = new List<string>();
            var columnNames = new List<string>();
            var clause = $"Id = \"{id}\"";
            var setValues = "";

            if (place.Name != null && place.Name != string.Empty)
            { columnNames.Add("Name"); columnValues.Add(place.Name); }

            if (place.AddressId != null)
            { columnNames.Add("AddressId"); columnValues.Add(place.AddressId); }

            if (place.PhoneNumber != null)
            { columnNames.Add("PhoneNumber"); columnValues.Add(place.PhoneNumber); }

            if (place.Category != null)
            { columnNames.Add("Category"); columnValues.Add(place.Category); }

            if (place.Comment != null)
            { columnNames.Add("Comment"); columnValues.Add(place.Comment); }

            if (place.LocationId != null)
            { columnNames.Add("LocationId"); columnValues.Add(place.LocationId); }

            int valuesCounter = 0;
            foreach (string columnName in columnNames)
            {
                string currentValue = columnValues[valuesCounter];
                if (valuesCounter == columnNames.Count - 1)
                    { setValues += $"{columnName}='{currentValue}'"; }
                else
                { setValues += $"{columnName}='{currentValue}', "; }
                valuesCounter += 1 ;
            }

            SQLTableManagement.UpdateData(PlaceTableName, setValues, clause);
            
            serviceResponce.Data = GetPlaceById(id).Data;

            return serviceResponce;
        }

        public static ServiceResponce<Place> DeletePlaceById(string id)
        {
            var serviceResponce = new ServiceResponce<Place>();

            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);

            var checkDeleteResult = GetPlaceById(id);
            if (checkDeleteResult.Success == true)
            {
                serviceResponce.Success = false;
                serviceResponce.Message = "Sorry, something went wrong, please, try again";
                return serviceResponce;
            }

            else
            { serviceResponce.Message = "The Place has been successfully deleted";
            return serviceResponce;
            }
        }

        public static ServiceResponce<Place> DeletePlaceByName(string name)
        {
            var serviceResponce = new ServiceResponce<Place>();

            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(PlaceTableName, clause);

            return serviceResponce;
        }

    }
}
