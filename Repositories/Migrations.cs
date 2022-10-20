using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class Migrations
    {

        public Migrations()
        {

        }

        public static void run(SQLiteConnection conn) // TA: Create a checkup if this method has been already run to avoid trying to make duplicates and crushing the app
        {
            SQLTableManagement.CreateTable("CREATE TABLE Topic (SEQ INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Id VARCHAR(20), Name TEXT NOT NULL)");
            SQLTableManagement.CreateTable("CREATE TABLE GeonoteItem (SEQ INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Id VARCHAR(20), Name TEXT NOT NULL, Address VARCHAR(200), Comments TEXT, TopicId VARCHAR(20))"); // TA: the last one  - creating connections between the tables - is the same info as the Id VARCHAR(20) of the Topic table right one line above - should be equal
            SQLTableManagement.CreateTable("CREATE TABLE UsefulLink (SEQ INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Id VARCHAR(20), SequenceNum INT, Name TEXT NOT NULL, Address VARCHAR(200), GeonoteItemID VARCHAR(20))"); //TA: same - the last one is to connect the link to a specific item. Does it work for one-to-many? - Seems like not - We need another linking structure


        }
    }
}
