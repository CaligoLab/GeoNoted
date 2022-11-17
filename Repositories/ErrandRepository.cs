using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string stringErrand = "Errand";
        
        public static void AddNewErrand(string errandName, ErrandsCategory? category, Location? location)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(stringErrand, "Id, Name, CategoryId, LocationId", 
                                          $"\"{id}\", \"{errandName}\", \"{category.Id}\", \"{location.Id}\"");
        }

    }
}
