namespace Geonote.Models
{
    public class Location
    {
        public string Id { get; set; }
        
        public List<Place> Places { get; set; }

        public string Longitude { get; set; }
        
        public string Latitude { get; set; }

        public Location()
        {
            Places = new List<Place>();
        }
    }
}
