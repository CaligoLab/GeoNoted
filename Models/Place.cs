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

        /*public Place(string placeName, string? placeAddressId, string? placeCategory, string? placeComment, string? placeLocationId)
        {
            Id = Guid.NewGuid().ToString();
            Name = placeName;
            AddressId = placeAddressId;
            Category = placeCategory;
            Comment = placeComment;
            LocationId = placeLocationId;

        }*/

        public Place(string v)
        {
            this.Name = v;
        }
    }
}
