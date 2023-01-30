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
    Name = "second",
    Comment = "smth"
};
Geonote.Repositories.ErrandRepository.AddNewErrand(errand);*/
//>>>>>>> Stashed changes
/*
 * 
var allErrands = Geonote.Repositories.ErrandRepository.GetAllErrands();

var errand_with_all_filds = Geonote.Repositories.ErrandRepository.GetErrandWithAllFields("b6621fa5-7b6b-47c7-bd60-339b245a792a");
*/

///var icaMaxi = new Place("IcaMaxi");

//Geonote.Repositories.CategoryRepository.AddNewCategory("AutoService");
//Geonote.Repositories.CategoryRepository.AddNewCategory("Beauty");
//Geonote.Repositories.PlaceRepository.AddNewPlace(icaMaxi);

//var categories = Geonote.Repositories.CategoryRepository.GetAllCategories();
//Console.WriteLine(categories);

//var categoryById = Geonote.Repositories.CategoryRepository.GetCategory("2badb9c6-a0ad-40ac-8f17-8eeda659633f");
//var getAllCategoties = Geonote.Repositories.CategoryRepository.GetAllCategories();
//var getCategory = Geonote.Repositories.CategoryRepository.GetCategory(getAllCategoties[0].Id);
Geonote.Repositories.PlaceCategoryRepository.GetPlaceCategory("9a3fceff-b9ca-4779-b8eb-e65a24900417");
app.Run();
