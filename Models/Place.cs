namespace Geonote.Models
{
    public class Place
    {
        public string id { get; set; }

        public string name { get; set; }
        public string? addressId { get; set; }
        public string? type { get; set; }
        public string? comment { get; set; }
        public string? locationId { get; set; }

        public Place(string placeName, string? placeAddressId, string? placeType, string? placeComment, string? placeLocationId)
        {
            id = Guid.NewGuid().ToString();
            name = placeName;
            addressId = placeAddressId;
            type = placeType;
            comment = placeComment;
            locationId = placeLocationId;

        }
    }
}
