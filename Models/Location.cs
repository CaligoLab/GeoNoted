namespace Geonote.Models
{
    public class Location
    {
        public string Id { get; set; }
        
        public Place Places { get; set; }

        public string Longitude { get; set; }
        
        public string Latitude { get; set; }

        public Location()
        {
        }
    }
}
