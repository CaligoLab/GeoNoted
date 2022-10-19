using System.Data.SQLite;

namespace Geonote.Repositories
{
    public class Migrations
    {

        public Migrations()
        {

        }

        public void run(SQLiteConnection conn)
        {
            SQLTableManagement.CreateTable(conn, "CREATE TABLE Topic (Id VARCHAR(20), Name VARCHAR(200))");
            SQLTableManagement.CreateTable(conn, "CREATE TABLE GeonoteItem (Id VARCHAR(20), Name VARCHAR(200), CodeSnippet VARCHAR(200), Comments VARCHAR(200), TopicId VARCHAR(20))"); // the last one  - creating connections between the tables - is the same info as the Id VARCHAR(20) of the Topic table right one line above - should be equal
            SQLTableManagement.CreateTable(conn, "CREATE TABLE UsefulLink (Id VARCHAR(20), Name VARCHAR(200), LinkAddress VARCHAR(200), SequenceNum INT, GeonoteItem (Id VARCHAR(20))"); //same - the last one is to connect the link to a specific item. Does it work for one-to-many?


        }
    }
}
