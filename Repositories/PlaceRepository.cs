namespace Geonote.Repositories
{
    public class PlaceRepository
    {
        private static readonly string placeTableName = "Place";

        public static void AddNewErrand(string placeName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(placeTableName, "Id, Name",
                                          $"\"{id}\", \"{placeName}\"");
        }
    }
}
