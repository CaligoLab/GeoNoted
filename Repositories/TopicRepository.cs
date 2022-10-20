namespace Geonote.Repositories
{
    public class TopicRepository
    {
        public TopicRepository()
        {

        }

        public static void AddNewTopic(string topicName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData("Topic", "ID, Name", $"\" {id}\", \"{topicName}\"");
        }

    }
}
