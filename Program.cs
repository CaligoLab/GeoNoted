using Geonote.Models;
using Geonote.Repositories;
using System.Data.SQLite;

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

//var sqliteConnection = Geonote.Repositories.SQLiteConnect.CreateConnection();
//Geonote.Repositories.Migrations.run(sqliteConnection);

/*
var category = new ErrandsCategory
{ Name = null};

Geonote.Repositories.ErrandsCategoriesRepository.AddNewErrandCategory("grosseries");

Geonote.Repositories.ItemRepository.AddNewItem("milk", null);
Geonote.Repositories.ItemRepository.AddNewItem("eggs", null);
Geonote.Repositories.ItemRepository.AddNewItem("bread", null);
Geonote.Repositories.ItemRepository.AddNewItem("butter", null);
Geonote.Repositories.ItemRepository.AddNewItem("sugar and salt", null);

*/

SQLTableManagement.CreateTable("CREATE TABLE Location (Id VARCHAR(20), Longitude VARCHAR(200), Latitude VARCHAR(200), PlaceId VARCHAR(20))");
SQLTableManagement.CreateTable("CREATE TABLE Place (Id VARCHAR(20), Name VARCHAR(200))");


app.Run();
