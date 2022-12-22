using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore.Sqlite;
using System.Xml.Linq;

namespace Geonote.Repositories
{
    public class AddressRepository
    {
        private static readonly string addressTableName = "Address";

        public static void AddNewAddress(string street, string? postcode, string? country, string? county, 
                string? settlement, string? buildingNumber, string? officeNumber, string? poBox, string? placeId, string? locationId)
        {
            var id = Guid.NewGuid();
            var columnNames = "Id, Street";
            var columnValues = $"\"{id}\", \"{street}\"";

            if (postcode != null)
            { columnNames += ", Postcode"; columnValues += $", \"{postcode}\""; }
            
            if (country != null)
            { columnNames += ", Country"; columnValues += $", \"{country}\""; }

            if (county != null)
            { columnNames += ", County"; columnValues += $", \"{county}\""; }

            if (buildingNumber != null)
            { columnNames += ", Building"; columnValues += $", \"{buildingNumber}\""; }
            
            if (officeNumber != null)
            { columnNames += ", Office"; columnValues += $", \"{officeNumber}\""; }

            if (poBox != null)
            { columnNames += ", POBox"; columnValues += $", \"{poBox}\""; }

            if (placeId != null)
            { columnNames += ", PlaceId"; columnValues += $", \"{placeId}\""; }

            if (locationId != null)
            { columnNames += ", LocationId"; columnValues += $", \"{locationId}\""; }


            SQLTableManagement.InsertData(addressTableName, columnNames, columnValues);
        }
    }
}
