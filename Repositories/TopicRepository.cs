using Geonote.Models;

namespace Geonote.Repositories
{
    public class TopicRepository
    {
        private static readonly string TopicTableName = "Topic";
        
        public static void AddNewTopic(string name)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(TopicTableName, "Id, Name", $"\"{id}\",\"{name}\"");
        }
        
        public static void UpdateTopicById(string id, string name)
        {
            string clause = $"Id = \"{id}\"";
            string setName = $"Id = \"{name}\"";
            SQLTableManagement.UpdateData(TopicTableName, setName, clause);
        }

        public static void DeleteTopicById(string id)
        {
            string clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(TopicTableName, clause);
        }
        public static void DeleteTopicByName(string name)
        {
            string clause = $"Id = \"{name}\"";
            SQLTableManagement.DeleteData(TopicTableName, clause);
        }


        public TopicRepository()
        {

        }
    }
}
