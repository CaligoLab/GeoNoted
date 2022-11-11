namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string stringErrand = "Errand";
        
        public static void AddNewErrand(string errandName, string categorieId, string locationId, string placeId)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData("Errand", "ID, Name, CategorieId, LocationId, PlaceId", 
                                          $"\" {id}\", \"{errandName}\", \"{categorieId}\", \"{locationId}\", \"{placeId}\"");
        }

    }
}
