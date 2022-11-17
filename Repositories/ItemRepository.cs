using Geonote.Models;

namespace Geonote.Repositories
{
    public class ItemRepository
    {
        private static readonly string stringItem = "Item";

        public static void AddNewItem(string itemName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(stringItem, "Id, Name",
                                          $"\"{id}\", \"{itemName}\"");
        }
    }
}
