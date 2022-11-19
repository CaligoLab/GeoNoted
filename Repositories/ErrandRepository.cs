using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string ErrandTableName = "Errand";
        
        public static void AddNewErrand(string errandName, ErrandsCategory? category, Location? location, string? comment)
        {
            var id = Guid.NewGuid();
            var columnNames = "Id, Name";
            var columnValues = $"\"{id}\", \"{errandName}\"";

            if (category != null)
            {
                if (category.Id != null)
                { columnNames += ", CategoryId"; columnValues += $", \"{category.Id}\""; }
            }
            
            if (location != null)
            {
                if (location.Id != null)
                { columnNames += ", LocationId"; columnValues += $", \"{location.Id}\""; }
            }
            
            if (comment != null) { columnNames += ", Comment"; columnValues += $", \"{comment}\""; }
            
            SQLTableManagement.InsertData(ErrandTableName, columnNames, columnValues);
        }

    }
}
