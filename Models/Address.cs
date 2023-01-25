﻿namespace Geonote.Models
{
    public class Address
    {
        public string Id { get; set; }

        public string? Postcode { get; set; } //may it be Null?

        public string? Country { get; set; }
        public string? County { get; set; }
        public string? Settlement { get; set; }
        public string Street { get; set; }
        public string? BuildingNumber { get; set; }
        public string? OfficeNumber { get; set; }
        public List<Place>? PlacesList { get; set; }
        public string? LocationId { get; set; } //autofill from the maps?


        public Address()
        {
            PlacesList = new List<Place>();
        }

    }


}
