namespace Geonote.Models
{
    public class Place
    {
        public string Id { get; set; }

        public string placeName { get; set; }
        public string? placeAddressId { get; set; }
        public string? placeType { get; set; } // type or category? 
        public string? placeComment { get; set; }
        public string? placeLocationId { get; set; }

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
