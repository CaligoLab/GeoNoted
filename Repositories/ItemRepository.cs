namespace Geonote.Repositories
{
    public class ItemRepository
    {

        public ItemRepository()
        {

        }

        public static void AddNewItem(string itemName, string itemAddress, string itemComments)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData("GeonoteItem", "ID, Name, Address, Comments", $"\" {id}\", \"{itemName}\", \"{itemAddress}\", \"{itemComments}\"");
        }
    }
}
