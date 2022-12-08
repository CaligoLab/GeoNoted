namespace Geonote.Models
{
    public class Place
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string? AddressId { get; set; }
        public string? Type { get; set; } // type or category? 
        public string? Comment { get; set; }
        public string? LocationId { get; set; }

        public Place(string placeName, string? placeAddressId, string? placeType, string? placeComment, string? placeLocationId)
        {
            Id = Guid.NewGuid().ToString();
            Name = placeName;
            AddressId = placeAddressId;
            Type = placeType;
            Comment = placeComment;
            LocationId = placeLocationId;

        }
    }
}
