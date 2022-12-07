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
            SQLTableManagement.CreateTable("CREATE TABLE Errand (Id VARCHAR(20), Name VARCHAR(200), Comment VARCHAR(200), CategoryId VARCHAR(20), LocationId VARCHAR(20))");
            SQLTableManagement.CreateTable("CREATE TABLE Category (Id VARCHAR(20), Name VARCHAR(200))");
            SQLTableManagement.CreateTable("CREATE TABLE Item (Id VARCHAR(20), Name VARCHAR(200), ErrandId VARCHAR(20))");
            SQLTableManagement.CreateTable("CREATE TABLE Location (Id VARCHAR(20), Longitude VARCHAR(200), Latitude VARCHAR(200), PlaceId VARCHAR(20))");
            SQLTableManagement.CreateTable("CREATE TABLE Place (Id VARCHAR(20), Name VARCHAR(200), AddressId VARCHAR(300), Type VARCHAR(30), Comment VARCHAR(300), LocationId VARCHAR(20))");
            SQLTableManagement.CreateTable("CREATE TABLE Address (Id VARCHAR(20), Building VARCHAR(20), Street VARCHAR(200), Office VARCHAR(20), County VARCHAR(200), Country VARCHAR(200), Postcode VARCHAR(15), POBox VARCHAR(40), PlaceId VARCHAR(20), LocationId VARCHAR(20))");
            SQLTableManagement.CreateTable("CREATE TABLE Type (Id VARCHAR(20), Name VARCHAR(200), Recurring INT, JustHint INT)"); //Comment VARCHAR(200) ?
            SQLTableManagement.CreateTable("CREATE TABLE Hint (Id VARCHAR(20), Name VARCHAR(200), CategoryId VARCHAR(20), LocationId VARCHAR(20))");
        }
    }
}
