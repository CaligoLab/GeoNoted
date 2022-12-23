using Geonote.Models;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore.Sqlite;

namespace Geonote.Repositories
{
    public class ErrandRepository
    {
        private static readonly string ErrandTableName = "Errand";
        
        public static void AddNewErrand(Errand errand)
        {
            if(errand.Id == null) { errand.Id = Guid.NewGuid().ToString(); }

            var columnNames = "Id, Name";
            var columnValues = $"\"{errand.Id}\", \"{errand.Name}\"";

            if (errand.Comment != null) 
            { columnNames += ", Comment"; columnValues += $", \"{errand.Comment}\""; }

            if (errand.Category != null)
            { columnNames += ", CategoryId"; columnValues += $", \"{errand.Category.Id}\""; }
            
            if (errand.Location != null)
            { columnNames += ", LocationId"; columnValues += $", \"{errand.Location.Id}\""; }

            if (errand.Address != null)
            { columnNames += ", AddressId"; columnValues += $", \"{errand.Address.Id}\""; }

            if (errand.Place != null)
            { columnNames += ", PlaceId"; columnValues += $", \"{errand.Place.Id}\""; }

            SQLTableManagement.InsertData(ErrandTableName, columnNames, columnValues);
        }

        public static Errand? GetErrand(string errandId)
        {
            string clause = $"Id = \"{errandId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(ErrandTableName, clause);
            while (sqlite_datareader.Read())
            {
                string name = sqlite_datareader.GetString(1);
                string? comment = null;
                if (sqlite_datareader[2] != DBNull.Value) { comment = sqlite_datareader.GetString(2); }
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Errand
                {
                    Id = errandId,
                    Name = name,
                    Comment = comment
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
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
                string? comment = null;
                if (sqlite_datareader[2] != DBNull.Value) { comment = sqlite_datareader.GetString(2); }
                allTopics.Add(new Errand
                {
                    Id = id,
                    Name = name,
                    Comment = comment
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allTopics;
        }

        
        public static Errand? GetErrandWithAllFields(string errandIdForSelect)
        {
            string statement = "SELECT Errand.Id AS ErrandId, Errand.Name, Errand.Comment, " +
                "Item.Id AS ItemId, Item.Name, " +
                "Category.Id AS CatgoryId, Category.Name, " +
                "Location.Id AS LocationId, Location.Latitude, Location.Longitude, " +
                "Place.Id AS PlaceId, Place.Name\n" +
                "FROM Errand\n" +
                "LEFT JOIN Category ON Errand.CategoryId = Category.Id\n" +
                "LEFT JOIN Item ON Errand.Id = Item.ErrandId\n" +
                "LEFT JOIN Location ON Errand.LocationId = Location.Id\n" +
                //"LEFT JOIN Address ON Errand.AddressId = Address.Id\n" + //I need full address obj?
                "LEFT JOIN Place ON Errand.PlaceId = Place.Id\n" +
                $"WHERE Errand.Id = \"{errandIdForSelect}\";";
            SqliteDataReader sqlite_datareader = SQLTableManagement.ReadCustomData(statement);
            Errand errand = null;
            Categorу category = null;
            Location location = null;
            Place place = null;
            var items = new List<Item>();

            while (sqlite_datareader.Read())
            {
                var errandId = sqlite_datareader.GetString(0);
                var errandName = sqlite_datareader.GetString(1);
                string? comment = null;
                if (sqlite_datareader[2] != DBNull.Value) {comment = sqlite_datareader.GetString(2);}
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

                if (sqlite_datareader[3] != DBNull.Value)
                {
                    var itemId = sqlite_datareader.GetString(3);

                    if (items.Where(i => i.Id == itemId).Count() > 0)
                    {
                        item = items.Where(i => i.Id == itemId).First();
                    }
                    else
                    {
                        var itemName = sqlite_datareader.GetString(4);
                        item = new Item
                        {
                            Id = itemId,
                            Name = itemName
                        };
                        items.Add(item);
                    }

                    if (!errand.ItemsList.Contains(item))
                    {
                        errand.ItemsList.Add(item);
                    }
                }

                if (sqlite_datareader[5] != DBNull.Value)
                {
                    var categoryId = sqlite_datareader.GetString(5);
                    var categoryName = sqlite_datareader.GetString(6);
                    if(category == null)
                    category = new Categorу
                    {
                        Id = categoryId,
                        Name = categoryName
                    };
                    errand.Category = category;
                }

                if (sqlite_datareader[7] != DBNull.Value)
                {
                    var locationId = sqlite_datareader.GetString(7);
                    var latitude = sqlite_datareader.GetString(8);
                    var longitude = sqlite_datareader.GetString(9);
                    if(location == null)
                    {
                        location = new Location
                        {
                            Id = locationId,
                            Latitude = latitude,
                            Longitude = longitude
                        };
                        errand.Location = location;
                    }
                }

                if (sqlite_datareader[10] != DBNull.Value)
                {
                    var placeId = sqlite_datareader.GetString(10);
                    var placeName = sqlite_datareader.GetString(11);
                    if(place == null)
                    place = new Place ("")
                    {
                        Id = placeId,
                        Name = placeName
                    };
                    location.Place = place;
                }
            }
            return errand;
        }
        

        public static void UpdateErrandById(string id, Errand errand)
        {
            var setName = "";
            var clause = $"Id = \"{id}\"";

            if(!(errand.Name == null))
            { setName += $"Name = \"{errand.Name}\""; }

            if(errand.Name != null && errand.Comment != null) 
            { setName += ", "; }

            if (!(errand.Comment == null))
            { setName += $"Comment = \"{errand.Comment}\""; }
                
            SQLTableManagement.UpdateData(ErrandTableName, setName, clause);
        }// do need i to add Location, Place, Address

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
