namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }
        
        public string Name { get; set; }
        
        public ErrandsCategory Category { get; set; }
        
        public Location Location { get; set; }


        public Errand()
        {

        }
    }
}
