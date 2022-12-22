
namespace Geonote.Repositories
{
    public class SQLiteConnect
    {
        private static SqliteConnection _conn;


        public static SqliteConnection CreateConnection()
        {

            SqliteConnection sqlite_conn = new SqliteConnection("Data Source=database.db; Version = 3; New = True; Compress = True;");
            // Open the connection:
            try
            {
                sqlite_conn.Open();
            }
            catch (Exception ex)
            {

            }
            return sqlite_conn;
        }

        public static SqliteConnection GetSQLiteConnection()
        {
            if (_conn == null)
            {
                _conn = SQLiteConnect.CreateConnection();
            }
            if (_conn.State == System.Data.ConnectionState.Closed)
            {
                _conn.Open();
            }
            return _conn;
        }

        public static void CloseConnections(SqliteDataReader sqlite_datareader)
        {
            sqlite_datareader.Close();
            GetSQLiteConnection().Close();
        }
    }
}
