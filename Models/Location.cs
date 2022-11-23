namespace Geonote.Models
{
    public class Location
    {
        public string Id { get; set; }

        public string Latitude { get; set; }

        public string Longitude { get; set; }

        public Place Place { get; set; }

        public Location()
        {
        }
    }
}
