# GeoNoted
Errand-running organizer with location- and time-dependent reminders

## About GeoNoted idea

GeoNoted is a mobile application that reminds users about tasks and errands linked to certain places on the map. 

It will be helpful if you don`t want to forget to do something when you arrive at some location. 

For example, with this app, you can receive a push notification about buying batteries when you drive passing by a hardware store. You can receive notifications every time you find yourself near a door with a digital lock, the password for which you cannot remember.

## About contributors

Four junior developers are working on this application as a final project of the C# course kindly provided by Lena Shervarly (https://github.com/LenaShervarly/) with the team of CodeEasy (https://codeeasy.io/). The project is not finished, and we don`t know if we can finalise it sometimes, but this project is our inspiration and hope for real future projects in cool development teams.

## About technology

We are developing this app to learn how C# works with SQL databases.

Project GeoNoted was created as a Rest API ASP.NET MVC project.
Database connection: Microsoft.Data.SQLite.

## About structure

Errand and Hint are the types of tasks users want to be informed about when they are getting to a certain location.

As you can see in Models, "Location" consists of Latitude and Longitude. It has a primary key - Id (string). One Location can have several Places. Thus, places are included as a List.

Errand and Hint have a Location and a List of places as well.
The Place has a Location Id.

### PlaceCategory
PlaceCategory includes Name.Id as a PrimaryKey. PlaceCategory is responsible for merging different places on a map based on their purpose. For instance: Autoservices, ATMs, Hotels, Patrol stations, Hair salons, Stores, Clinics etc.

PlaceCategory is visible in Place. It has to be choosable on the map and has a list of Places, depending on each category.
 
### Topic
Topic is a type of person's duties depending on which sphere of life it is connected with. Whether home/kids/work/travelling etc.

Errand and Hint have a Topic to choose from and to view.

All these models have Repositories and Controllers.

### Repositories have methods: Add, Update (by Id/Name), Delete, GetById, and GetAll.

Controllers have HTTP requests: Get, Post, Put, and Delete.
