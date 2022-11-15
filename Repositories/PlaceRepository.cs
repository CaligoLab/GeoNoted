namespace Geonote.Repositories
{
    public class PlaceRepository
    {
        private static readonly string stringPlace = "Place";

        public static void AddNewErrand(string placeName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(stringPlace, "Id, Name",
                                          $"\"{id}\", \"{placeName}\"");
        }
    }
}
