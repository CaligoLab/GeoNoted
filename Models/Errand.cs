namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }
        
        public string Name { get; set; }
        
        public string CategorieId { get; set; }
        
        public string LocationId { get; set; }
        
        public string PlaceId { get; set; }

        public Errand()
        {

        }
    }
}
