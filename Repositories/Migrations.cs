using Microsoft.Data.Sqlite;

namespace Geonote.Repositories
{
    public class Migrations
    {

        public Migrations()
        {

        }

        public static void Run(SqliteConnection sqliteConnection) // TA: Create a checkup if this method has been already run to avoid trying to make duplicates and crushing the app
        {
            SQLTableManagement.CreateTable("CREATE TABLE Errand (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, Comment VARCHAR(200), CategoryId VARCHAR(20), LocationId VARCHAR(20), PlaceId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Category (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Item (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, ErrandId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Location (Id VARCHAR(20) NOT NULL, Longitude VARCHAR(200) NOT NULL, Latitude VARCHAR(200) NOT NULL, PlaceId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Place (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, AddressName VARCHAR(200), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Type (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, Recurring INT, JustHint INT, PRIMARY KEY(Id))"); //Comment VARCHAR(200) ?
            SQLTableManagement.CreateTable("CREATE TABLE Hint (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, CategoryId VARCHAR(20), LocationId VARCHAR(20), PRIMARY KEY(Id))");
        }
    }
}
