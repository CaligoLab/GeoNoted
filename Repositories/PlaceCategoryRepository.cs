using Geonote.Models;
using Microsoft.CodeAnalysis.VisualBasic;
using System;
using Microsoft.Data.Sqlite;
using System.Net.NetworkInformation;

namespace Geonote.Repositories
{
    public class PlaceCategoryRepository
    {
        private static readonly string PlaceCategoryTableName = "PlaceCategory";

        public static void AddNewPlaceCategory(string placeCategoryName)
        {
            var id = Guid.NewGuid();
            SQLTableManagement.InsertData(PlaceCategoryTableName, "Id, Name", $"\"{id}\", \"{placeCategoryName}\"");
        }

        public static List<PlaceCategorу> GetAllPlaceCategories()
        {
            SQLiteConnect.GetSQLiteConnection();
            var allPlaceCategories = new List<PlaceCategorу>();
            var sqlite_datareader = SQLTableManagement.ReadData(PlaceCategoryTableName, null);
            while (sqlite_datareader.Read())
            {
                string placeCategoryId = sqlite_datareader.GetString(0);
                string placeCategoryName = sqlite_datareader.GetString(1);
                allPlaceCategories.Add(new PlaceCategorу
                {
                    Id = placeCategoryId,
                    Name = placeCategoryName
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allPlaceCategories;
        }


        public static PlaceCategorу? GetPlaceCategory(string placeCategoryId)
        {
            SQLiteConnect.GetSQLiteConnection();
            var clause = $"Id = \"{placeCategoryId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(PlaceCategoryTableName, clause);
            while (sqlite_datareader.Read())
            {
                string placeCategoryName = sqlite_datareader.GetString(1);
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new PlaceCategorу
                {
                    Id = placeCategoryId,
                    Name = placeCategoryName
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;
        }


        public static void UpdatePlaceCategoryNameById(string name, string id)
        {
            var clause = $"Id = \"{id}\"";
            var setName = $"Name = \"{name}\"";
            SQLTableManagement.UpdateData(PlaceCategoryTableName, setName, clause);
        }

        public static void DeletePlaceCategoryById(string id)
        {
            var clause = $"Id = \"{id}\"";
            SQLTableManagement.DeleteData(PlaceCategoryTableName, clause);
        }

        public static void DeletePlaceCategoryByName(string name)
        {
            var clause = $"Name = \"{name}\"";
            SQLTableManagement.DeleteData(PlaceCategoryTableName, clause);
        }

        public PlaceCategoryRepository()
        {
        }
    }
}

