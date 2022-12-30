using Geonote.Models;
using Geonote.Repositories;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore.Sqlite;
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
/*<<<<<<< Updated upstream


=======
/*var errand = new Geonote.Models.Errand()
{
    Name = "first",
    Comment = "smth"
};
Geonote.Repositories.ErrandRepository.AddNewErrand(errand);*/
//>>>>>>> Stashed changes
/*
var allErrands = Geonote.Repositories.ErrandRepository.GetAllErrands();

var errand_with_all_filds = Geonote.Repositories.ErrandRepository.GetErrandWithAllFields("b6621fa5-7b6b-47c7-bd60-339b245a792a");

Geonote.Repositories.HintRepository.UpdateHintNameById("adfcb3f2-b8b0-4be6-b15a-c389e51a774d", "förskola" );

var errandTest = new Errand
{
    Name = "Test Name",
    Comment = "Test Comment",
    ItemsList = new List<Item>() { new Item { Name = "test1"},
                                   new Item { Name = "test2"},
                                   new Item { Name = "test3"}},
    Category = new Categorу("Test Categoty"),
    Location = new Location("0.00000", "0.000000"),
    Address = new Address("Test Street"),
    Place = new Place("Place Name for Test")
};
*/

///var icaMaxi = new Place("IcaMaxi");

//Geonote.Repositories.CategoryRepository.AddNewCategory("AutoService");
//Geonote.Repositories.CategoryRepository.AddNewCategory("Beauty");
//Geonote.Repositories.PlaceRepository.AddNewPlace(icaMaxi);

//var categories = Geonote.Repositories.CategoryRepository.GetAllCategories();
//Console.WriteLine(categories);

//var categoryById = Geonote.Repositories.CategoryRepository.GetCategory("2badb9c6-a0ad-40ac-8f17-8eeda659633f");
//var getAllCategoties = Geonote.Repositories.CategoryRepository.GetAllCategories();
//var getCategory = Geonote.Repositories.CategoryRepository.GetCategory(getAllCategories[0].Id);

var category = Geonote.Repositories.CategoryRepository.GetCategory("16599a95-88ca-43ff-a408-a8e7473ec426");
Geonote.Repositories.ErrandRepository.UpdateErrandCategoryByErrandId("f4a2d1c4-54a2-4e36-8383-d49397df161c", category);

app.Run();
