namespace Geonote.Models
{
    public class Place
    {
        public string Id { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;
        public string? AddressId { get; set; }

        public string? PhoneNumber { get; set; }
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

        public Place()
        {
            
        }
    }
}
