using Geonote.Models;
using System;
using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class CategoryRepository
    {
        private static readonly string CategoryTableName = "Category";

        public static void AddNewCategory(string categoryName)
        {
            var id = Guid.NewGuid();   
            SQLTableManagement.InsertData(CategoryTableName, "Id, Name", $"\" {id}\", \"{categoryName}\"");
        }

        public static List<Categorу> GetAllCategories()
        {
            SQLiteConnect.GetSQLiteConnection();
            var allCategories = new List<Categorу>();
            var sqlite_datareader = SQLTableManagement.ReadData(CategoryTableName, null);
            while (sqlite_datareader.Read())
            {
                string categoryId = sqlite_datareader.GetString(0);
                string categoryName = sqlite_datareader.GetString(1);
                allCategories.Add(new Categorу
                {
                    Id = categoryId,
                    Name = categoryName
                });
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return allCategories;
        }


        public static Categorу? GetCategory(string categoryId)
        {
            SQLiteConnect.GetSQLiteConnection();
            var clause = $"Id = \"{categoryId}\"";
            var sqlite_datareader = SQLTableManagement.ReadData(CategoryTableName, null);
            while (sqlite_datareader.Read())
            {
                string categoryName = sqlite_datareader.GetString(1);
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return new Categorу
                {
                    Id = categoryId,
                    Name = categoryName
                };
            }
            SQLiteConnect.CloseConnections(sqlite_datareader);
            return null;
        }

        public CategoryRepository()
        {
        }
    }
}

