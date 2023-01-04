using Geonote.Models;
using Geonote.Repositories;
using Microsoft.Data.Sqlite;
using System.Runtime.ExceptionServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

//Geonote.Repositories.Migrations.Run();
//var sqliteConnection = Geonote.Repositories.SQLiteConnect.CreateConnection();
//Geonote.Repositories.Migrations.run(sqliteConnection);
/*var errand = new Geonote.Models.Errand()
{
    Name = "second",
    Comment = "smth"
};
Geonote.Repositories.ErrandRepository.AddNewErrand(errand);*/


var errandTest = new Errand
{
    Name = "treat the dog",
    Comment = "at 12-00",
    /*ItemsList = new List<Item>() { new Item { Name = "test1"},
                                   new Item { Name = "test2"},
                                   new Item { Name = "test3"}},*/
    Category = null,
    Location = new Location("f0356fe4-cdbe-485c-8dd1-5ff258db3d0c"),
    //Address = new Address("Test Street")
    /*PlacesList = new List<Place>() { new Place { Id = "055c6084-4747-4137-9b11-fc6aa4208df2", Name = "School"},
                                     new Place{ Name = "Job"}}*/
};
Geonote.Repositories.ErrandRepository.AddNewErrand(errandTest);
/*
var allErrands = Geonote.Repositories.ErrandRepository.GetAllErrands();

var errand_with_all_filds = Geonote.Repositories.ErrandRepository.GetErrandWithAllFields("b6621fa5-7b6b-47c7-bd60-339b245a792a");
*/
//Geonote.Repositories.CategoryRepository.UpdateCategoryNameById("WomanBeauty", "b50f69b5-b878-485b-a794-2de48808123b");
//Geonote.Repositories.CategoryRepository.AddNewCategory("AutoService");
//Geonote.Repositories.CategoryRepository.AddNewCategory("Beauty");
//var categoryById = Geonote.Repositories.CategoryRepository.GetCategory("2badb9c6-a0ad-40ac-8f17-8eeda659633f");
//var getAllCategories = Geonote.Repositories.CategoryRepository.GetAllCategories();
//var getCategory = Geonote.Repositories.CategoryRepository.GetCategory(getAllCategories[2].Id);

//Geonote.Repositories.LocationRepository.AddNewLocation("0.700", "5.00", null);
/*var newPlace = new Geonote.Models.Place()
{
    Name = "Clinic",
    Category = "Vet",
    LocationId = "f0356fe4-cdbe-485c-8dd1-5ff258db3d0c"
}; 
Geonote.Repositories.PlaceRepository.AddNewPlace(newPlace);
*/
//var locationWithAllPlaces = Geonote.Repositories.LocationRepository.GetLocationWithAllPlaces("5eaef813-bb70-49f8-b5e4-9ff6bae01c64");
app.Run();
