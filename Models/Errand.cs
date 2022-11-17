using System.Security.Cryptography.X509Certificates;

namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }
        
        public string Name { get; set; }

        public List<Item>? ItemsList { get; set; }
        
        public ErrandsCategory? Category { get; set; }
        
        public Location? Locations { get; set; }


        public Errand()
        {
            ItemsList = new List<Item>();
        }
    }
}
