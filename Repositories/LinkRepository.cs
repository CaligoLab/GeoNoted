namespace Geonote.Repositories
{
    public class LinkRepository
    {
        public LinkRepository()
        {

        }

        public static void AddNewLink(string linkName, string linkAddress, int linkSequenceNum)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData("UsefulLink", "ID, SequenceNum, Name, Address", $"\" {id}\", \"{linkSequenceNum}\", \"{linkName}\", \"{linkAddress}\"");
        }
    }
}
