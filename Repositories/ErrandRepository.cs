using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string stringErrand = "Errand";
        
        public static void AddNewErrand(string errandName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(stringErrand, "Id, Name", 
                                          $"\"{id}\", \"{errandName}\"");
        }

    }
}
