using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class SQLTableManagement
    {
        public static SQLiteConnection conn;
        public SQLTableManagement()
        {

        }
        
        public static void CreateTable(string Createsql)
        {

            SQLiteCommand sqlite_cmd = GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = Createsql;
            sqlite_cmd.ExecuteNonQuery();
        }

        public static void InsertData(string tableName, string columnNames, string values)
        {
            SQLiteCommand sqlite_cmd = GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = $"INSERT INTO {tableName} ({columnNames}) VALUES({values}); "; //TA: the strings columnNames and values (and smth else?) should be replaces by an object (class?)
            sqlite_cmd.ExecuteNonQuery();

        }

        public static void ReadData(string tableName)
        {
            SQLiteDataReader sqlite_datareader;
            SQLiteCommand sqlite_cmd;
            sqlite_cmd = GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = $"SELECT * FROM {tableName}";

            sqlite_datareader = sqlite_cmd.ExecuteReader();
            while (sqlite_datareader.Read())
            {
                string myreader = sqlite_datareader.GetString(0);
                Console.WriteLine(myreader);
            }
            GetSQLiteConnection().Close();
        }

        private static SQLiteConnection GetSQLiteConnection()
        {
            if(conn == null)
            { conn = SQLiteConnect.CreateConnection();
            }
            return conn;
        }
    }
}
