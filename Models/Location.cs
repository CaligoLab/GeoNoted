namespace Geonote.Models
{
    public class Location
    {
        public string Id { get; set; }

        public string Latitude { get; set; }

        public string Longitude { get; set; }

        public List <Place>? Place { get; set; }
        public Location()
        {
            Place = new List<Place>();
        }

    }
}
