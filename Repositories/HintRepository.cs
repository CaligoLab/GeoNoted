using System;
using Geonote.Models;

namespace Geonote.Repositories
{
    public class HintRepository
    {
        private static readonly string HintTableName = "Hint";

        public static void AddNewHint(Hint hint, string? topicId)
        {
            if (hint.Id == null) { hint.Id = Guid.NewGuid().ToString(); }

            var columnNames = "Id, Name";
            var columnValues = $"\"{hint.Id}\", \"{hint.Name}\"";

        
            if (topicId != null)
            { columnNames += ", TopicId"; columnValues += $", \"{topicId}\""; }

            if (hint.Location != null)
            { columnNames += ", LocationId"; columnValues += $", \"{hint.Location.Id}\""; }          

            SQLTableManagement.InsertData(HintTableName, columnNames, columnValues);
        }

        public static Hint? GetHint(string hintId)
        {
            string clause = $"Id = \"{hintId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(HintTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);

                string topicId = string.Empty;

                if (sqlite_datareader.GetValue(2) != DBNull.Value)
                    topicId = sqlite_datareader.GetString(2);

                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Hint
                {
                    Id = hintId,
                    Name = name,
                    Topic = new Topic(topicId)

                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;
        }

        public static List<Hint> GetAllHints()
        {
            var allHints = new List<Hint>();
            var sqlite_datareader = SQLTableManagement.ReadData(HintTableName, null);
            while (sqlite_datareader.Read())
            {
                string id = sqlite_datareader.GetString(0);
                string name = sqlite_datareader.GetString(1);
                string topicId = string.Empty;

                if (sqlite_datareader.GetValue(2) != DBNull.Value)
                    topicId = sqlite_datareader.GetString(2);
                allHints.Add(new Hint
                {
                    Id = id,
                    Name = name,
                    Topic = new Topic(topicId)
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allHints;
        }

        public static void UpdateHintNameById(string id, string name)
        {
            var clause = $"Id = \"{id}\"";
            var setName = $"Name = \"{name}\"";
            SQLTableManagement.UpdateData(HintTableName, setName, clause);
        }

        public static void DeleteHintById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(HintTableName, clause);
        }

        public static void DeleteHintByName(string name)
        {
            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(HintTableName, clause);
        }
    }
}
