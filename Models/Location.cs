namespace Geonote.Models
{
    public class Location
    {
        public string Id { get; set; }

        public string Latitude { get; set; }

        public string Longitude { get; set; }

        public Place Place { get; set; } //Mari: if we have locationId in Pace, do we also need place obj here? //We actually need a List of Places here. Cause the same Address can have several Places sharing it (like a big mall with grocery shops and all kind of services etc)

        public Location()
        {
        }
    }
}
