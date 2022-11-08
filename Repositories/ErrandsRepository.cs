namespace Geonote.Repositories
{
    public class ErrandsRepository
    {
        public static void AddNewTopic(string errandName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData("Errand", "ID, Name, Categorie, Location, Place", $"\" {id}\", \"{errandName}\"");
        }

    }
}
