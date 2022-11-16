using System.Security.Cryptography.X509Certificates;

namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }
        
        public string Name { get; set; }
        
        public List<ErrandsCategory> Categories { get; set; }
        
        public List<Location> Locations { get; set; }


        public Errand()
        {
            Categories = new List<ErrandsCategory>();

            Locations = new List<Location>();
        }
    }
}
