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

var sqliteConnection = Geonote.Repositories.SQLiteConnect.CreateConnection();
Geonote.Repositories.Migrations.run(sqliteConnection);


Geonote.Repositories.TopicRepository.AddNewTopic("Grocery Stores");
Geonote.Repositories.ItemRepository.AddNewItem("ICA Maxi", "Per Hallströms väg 15, 131 39 Nacka", "The biggest in the ICA chain, has the widest variety of items, including clothes, cutlery, and gardening/grilling supplies");
Geonote.Repositories.LinkRepository.AddNewLink("ICA online shopping", "https://www.ica.se/handla/maxi-ica-stormarknad-koping-id_01014/", 1);

app.Run();
