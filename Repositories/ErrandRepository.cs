using Geonote.Models;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string stringErrand = "Errand";
        
        public static void AddNewErrand(string errandName, ErrandsCategory categorie, Location location)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(stringErrand, "Id, Name, Category, LocationId, Location", 
                                          $"\"{id}\", \"{errandName}\", \"{categorie}\", \"{location}\"");
        }

    }
}
