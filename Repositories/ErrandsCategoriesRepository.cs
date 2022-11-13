using System;
namespace Geonote.Repositories
{
    public class ErrandsCategoriesRepository
    {
        private static readonly string ErrandCategory = "Category";

        public static void AddNewErrandCategory(string categoryName)
        {
            var id = Guid.NewGuid();   
            SQLTableManagement.InsertData(ErrandCategory, "ID, Name", $"\" {id}\", \"{categoryName}\"");
        }
        public ErrandsCategoriesRepository()
        {
        }
    }
}

