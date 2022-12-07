namespace Geonote.Models
{
    public class Address
    {
        public string id { get; set; }

        public string? postcode { get; set; }

        public string? country { get; set; }
        public string? county { get; set; }
        public string? settlement { get; set; }
        public string street { get; set; }
        public string? buildingNumber { get; set; }
        public string? officeNumber { get; set; }
        public string? placeId { get; set; }
        public string? locationId { get; set; } //autofill from the maps?

    }
}
