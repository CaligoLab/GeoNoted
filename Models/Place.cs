namespace Geonote.Models
{
    public class Place
    {
        public string Id { get; set; }

        public string Name { get; set; }
        public string? AddressId { get; set; } //Mari: adressId here and placeId in Address class
        public string? Category { get; set; } 
        public string? Comment { get; set; }
        public string? LocationId { get; set; } //Mari: do we need lication id in both address and place classes //TA: I think we do as there's sometimes no "normal" Address assigned to the point on the Map we need. And the User might not fill in the Address manually (to be able to link the Address.LocationId) - IF I am thinking straight now.

       /* public Place(string placeName, string? placeAddressId, string? placeCategory, string? placeComment, string? placeLocationId)
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

        public Place(string placeName)
        {
            this.Name = placeName;
        }
    }
}
