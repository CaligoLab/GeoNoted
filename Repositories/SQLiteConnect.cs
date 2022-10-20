using System.Data.Entity;
using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class SQLiteConnect
    {
        public SQLiteConnect()
        {

        }

       public static SQLiteConnection CreateConnection()
        {

            // TT: Create a new database connection:
            SQLiteConnection sqlite_conn = new SQLiteConnection("Data Source=database.db; Version = 3; New = True; Compress = True; ");
         // TT: Open the connection:
         try
            {
                sqlite_conn.Open();
            }
            catch (Exception ex)
            {

            }
            return sqlite_conn;
        }
    }
}
