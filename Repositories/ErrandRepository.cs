using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;
using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string ErrandTableName = "Errand";
        
        public static void AddNewErrand(string errandName, string? comment, string? categoryId, string? locationId, string? placeId)
        {
            var id = Guid.NewGuid();
            var columnNames = "Id, Name";
            var columnValues = $"\"{id}\", \"{errandName}\"";

            if (comment != null) 
            { columnNames += ", Comment"; columnValues += $", \"{comment}\""; }

            if (categoryId != null)
            { columnNames += ", CategoryId"; columnValues += $", \"{categoryId}\""; }
            
            if (locationId != null)
            { columnNames += ", LocationId"; columnValues += $", \"{locationId}\""; }

            if (placeId != null)
            { columnNames += ", PlaceId"; columnValues += $", \"{placeId}\""; }

            SQLTableManagement.InsertData(ErrandTableName, columnNames, columnValues);
        }

        public static Errand? GetErrand(string errandId)
        {
            string clause = $"Id = \"{errandId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(ErrandTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);
                string comment = sqlite_datareader.GetString(2);
                SQLiteConnect.CoseConnections(sqlite_datareader);
                return new Errand
                {
                    Id = errandId,
                    Name = name,
                    Comment = comment
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
                string comment = sqlite_datareader.GetString(2);
                allTopics.Add(new Errand
                {
                    Id = id,
                    Name = name,
                    Comment = comment
                });
            }
            SQLiteConnect.CoseConnections(sqlite_datareader);
            return allTopics;
        }

        /*
        public static Errand? GetTopicWithAllItems(string errandIdForSelect)
        {
            string statement = "SELECT Errand.Id AS ErrandId, Errand.Name, Errand.Comment, " +
                "Item.Id AS ItemId, Item.Name, " +
                "Category.Id AS CatgoryId, Category.Name, " +
                "Location.Id AS LocationId, Location.Latitude, Location.Longitude\n" +
                "FROM Errand\n" +
                "LEFT JOIN Category ON Errand.CategoryId = Category.Id\n" +
                "LEFT JOIN Item ON Errand.Id = Item.ErrandId\n" +
                "LEFT JOIN Location ON Errand.LocationId = Location.Id\n" +
                "LEFT JOIN Place ON Errand.PlaceId = Place.Id\n" +
                $"WHERE Errand.Id = \"{errandIdForSelect}\";";
            SQLiteDataReader sqlite_datareader = SQLTableManagement.ReadCustomData(statement);
            Errand errand = null;
            var items = new List<Item>();

            while (sqlite_datareader.Read())
            {
                var errandId = sqlite_datareader.GetString(0);
                var errandName = sqlite_datareader.GetString(1);
                var comment = sqlite_datareader.GetString(2);
                if (errand == null)
                {
                    errand = new Errand
                    {
                        Id = errandId,
                        Name = errandName,
                        Comment = comment
                    };
                }

                Item item = null;
            }
        }
        */

        public static void UpdateErrandNameById(string id, string? name, string? comment)
        {
            if(!(name == null) || !(comment == null))
            {
                var setName = "";
                var clause = $"Id = \"{id}\"";

                if(!(name == null))
                { setName += $"Name = \"{name}\""; }
                if (!(comment == null))
                { setName += $"Comment = \"{comment}\""; }
                
                SQLTableManagement.UpdateData(ErrandTableName, setName, clause);
            }
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
