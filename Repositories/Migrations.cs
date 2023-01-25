﻿using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore.Sqlite;

namespace Geonote.Repositories
{
    public class Migrations
    {

        public Migrations()
        {

        }

        public static void Run() // TA: Create a checkup if this method has been already run to avoid trying to make duplicates and crushing the app
        {
            SQLTableManagement.CreateTable("CREATE TABLE Errand (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, Comment VARCHAR(200), CategoryId VARCHAR(20), LocationId VARCHAR(20), AddressId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE PlaceCategory (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Item (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, ErrandId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Location (Id VARCHAR(20) NOT NULL, Longitude VARCHAR(200) NOT NULL, Latitude VARCHAR(200) NOT NULL, PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Place (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, AddressId VARCHAR(300), Category VARCHAR(30), Comment VARCHAR(300), LocationId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Type (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, Recurring INT, JustHint INT, PRIMARY KEY(Id))"); //Comment VARCHAR(200) ?
            SQLTableManagement.CreateTable("CREATE TABLE Hint (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, CategoryId VARCHAR(20), LocationId VARCHAR(20), PRIMARY KEY(Id))");
            SQLTableManagement.CreateTable("CREATE TABLE Topic (Id VARCHAR(20) NOT NULL, Name VARCHAR(200) NOT NULL, PRIMARY KEY(Id))");
            
            SQLTableManagement.CreateTable("CREATE TABLE Address (Id VARCHAR(20) NOT NULL, Building VARCHAR(20), Street VARCHAR(200) NOT NULL, Office VARCHAR(20), County VARCHAR(200), Country VARCHAR(200), Postcode VARCHAR(15), POBox VARCHAR(40), LocationId VARCHAR(20), PRIMARY KEY(Id))");
        }
    }
}
