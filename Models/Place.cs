namespace Geonote.Models
{
    public class Place
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string? AddressId { get; set; }
        public string? Category { get; set; } 
        public string? Comment { get; set; }
        public string? LocationId { get; set; }

        public Place()
        {

        }
    }
}
