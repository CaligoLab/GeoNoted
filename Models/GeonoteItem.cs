namespace Geonote.Models
{
    public class GeonoteItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Comments { get; set; }
        public List<UsefulLink> Links { get; set; }



        public GeonoteItem()
        {

        }
    }
}
