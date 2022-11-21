using Geonote.Models;

namespace Geonote.Repositories
{
    public class ItemRepository
    {
        private static readonly string ItemTableName = "Item";

        public static void AddNewItem(string itemName, string? errandId)
        {
            var id = Guid.NewGuid();

            var columnNames = "Id, Name";
            var columnValues = $"\"{id}\", \"{itemName}\"";

            if (errandId != null)
            { columnNames += ", ErrandId"; columnValues += $", \"{errandId}\""; }

            SQLTableManagement.InsertData(ItemTableName, columnNames, columnValues);
        }
    }
}
