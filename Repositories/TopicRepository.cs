using Geonote.Models;
using System.Net.NetworkInformation;

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
            string setName = $"Name = \"{name}\"";
            SQLTableManagement.UpdateData(TopicTableName, setName, clause);
        }

        public static void DeleteTopicById(string id)
        {
            string clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(TopicTableName, clause);
        }
        public static void DeleteTopicByName(string name)
        {
            string clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(TopicTableName, clause);
        }

        public static Topic? GetTopic(string id)
        {
            SQLiteConnect.GetSQLiteConnection();
            string clause = $"Id = \"{id}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(TopicTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Topic
                {
                    Id = id,
                    Name = name
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;
        }
        public static List<Topic> GetAllTopics()
        {
            SQLiteConnect.GetSQLiteConnection();
            var allTopics = new List<Topic>();
            var sqlite_datareader = SQLTableManagement.ReadData(TopicTableName, null);
            while (sqlite_datareader.Read())
            {
                string id = sqlite_datareader.GetString(0);
                string name = sqlite_datareader.GetString(1);
                SQLiteConnect.CloseConnections(sqlite_datareader);
                allTopics.Add(new Topic
                {
                    Id = id,
                    Name = name
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allTopics;

        }


        public TopicRepository()
        {

        }
    }
}
