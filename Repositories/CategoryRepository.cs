using System;
namespace Geonote.Repositories
{
    public class CategoryRepository
    {
        private static readonly string Category = "Category";

        public static void AddNewCategory(string categoryName)
        {
            var id = Guid.NewGuid();   
            SQLTableManagement.InsertData(Category, "Id, Name", $"\" {id}\", \"{categoryName}\"");
        }
        public CategoryRepository()
        {
        }
    }
}

