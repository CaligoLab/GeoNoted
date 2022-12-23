namespace Geonote.Models
{
    public class Address
    {
        public string Id { get; set; }

        public string? Postcode { get; set; } //may it be Null? //Mari: i think postcode cant ne null  //TA: Even if we implement the auto-fill, this should be able to stay null - in case someone is adding an address when they have poor to no signal (later to be updated). Or if the place is just a set of coordinates (eg. not properly mapped by Google) - then the Address will be an optional descriptive way for directions

        public string? Country { get; set; } //Mari: i think country also cant be null // it could have an initial "by default" value? for example, taken from the Localization Settings. Eg.: public string? Country { get; set; } = Localization.Country; (Not changing the Model here not to mess the Migrations later)
        public string? County { get; set; }
        public string? Settlement { get; set; }
        public string Street { get; set; }
        public string? BuildingNumber { get; set; }
        public string? OfficeNumber { get; set; }
        public string? PlaceId { get; set; }
        public string? LocationId { get; set; } //autofill from the maps? // Either that or the User chooses the point on the maps (like in Uber app) - not filled in manually in any of the cases

    }
}
