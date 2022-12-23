using Microsoft.Data.Sqlite;

namespace Geonote.Repositories
{
    public class SQLTableManagement
    {
        public static void CreateTable(string Createsql)
        {

            SqliteCommand sqlite_cmd = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = Createsql;
            sqlite_cmd.ExecuteNonQuery();

        }

        public static void InsertData(string tableName, string columnNames, string values)
        {
            SqliteCommand sqlite_cmd = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = $"INSERT INTO {tableName} ({columnNames}) VALUES({values}); ";
            sqlite_cmd.ExecuteNonQuery();

        }

        public static void UpdateData(string tableName, string setValues, string clause)
        {
            SqliteCommand sqlite_cmd = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = $"UPDATE {tableName} SET {setValues} WHERE {clause}; ";
            sqlite_cmd.ExecuteNonQuery();

        }

        public static void DeleteData(string tableName, string clause)
        {
            SqliteCommand sqlite_cmd = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            sqlite_cmd.CommandText = $"DELETE FROM {tableName} WHERE {clause}; ";
            sqlite_cmd.ExecuteNonQuery();

        }

        public static SqliteDataReader ReadData(string tableName, string? clause)
        {
            SqliteCommand sqlite_cmd = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            if (clause == null)
            {
                sqlite_cmd.CommandText = $"SELECT * FROM {tableName}";
            }
            else
            {
                sqlite_cmd.CommandText = $"SELECT * FROM {tableName} WHERE {clause}";

            }
            return sqlite_cmd.ExecuteReader();
        }

        public static SqliteDataReader ReadCustomData(string customSelectStatement)
        {
            SqliteCommand sqliteCommand = SQLiteConnect.GetSQLiteConnection().CreateCommand();
            sqliteCommand.CommandText = customSelectStatement;
            return sqliteCommand.ExecuteReader();
        }
    }
}
