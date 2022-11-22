using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string ErrandTableName = "Errand";
        
        public static void AddNewErrand(string errandName, ErrandsCategory? category, Location? location, string? comment)
        {
            var id = Guid.NewGuid();
            var columnNames = "Id, Name";
            var columnValues = $"\"{id}\", \"{errandName}\"";

            if (category != null)
            {
                if (category.Id != null)
                { columnNames += ", CategoryId"; columnValues += $", \"{category.Id}\""; }
            }
            
            if (location != null)
            {
                if (location.Id != null)
                { columnNames += ", LocationId"; columnValues += $", \"{location.Id}\""; }
            }
            
            if (comment != null) { columnNames += ", Comment"; columnValues += $", \"{comment}\""; }
            
            SQLTableManagement.InsertData(ErrandTableName, columnNames, columnValues);
        }

        public static Errand? GetErrand(string errandId)
        {
            string clause = $"Id = \"{errandId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(ErrandTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);
                SQLiteConnect.CoseConnections(sqlite_datareader);
                return new Errand
                {
                    Id = errandId,
                    Name = name
                };
            }
            SQLiteConnect.CoseConnections(sqlite_datareader);
            return null;
        }

        public static List<Errand> GetAllErrands()
        {
            var allTopics = new List<Errand>();
            var sqlite_datareader = SQLTableManagement.ReadData(ErrandTableName, null);
            while (sqlite_datareader.Read())
            {
                string id = sqlite_datareader.GetString(0);
                string name = sqlite_datareader.GetString(1);
                allTopics.Add(new Errand
                {
                    Id = id,
                    Name = name
                });
            }
            SQLiteConnect.CoseConnections(sqlite_datareader);
            return allTopics;
        }

        public static void UpdateErrandNameById(string id, string name)
        {
            var setName = $"Name = \"{name}\"";
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.UpdateData(ErrandTableName, setName, clause);
        }

        public static void DeleteErrandById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(ErrandTableName, clause);
        }

        public static void DeleteErrandByName(string name)
        {
            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(ErrandTableName, clause);
        }
    }
}
