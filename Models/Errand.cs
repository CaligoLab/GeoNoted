using System.Security.Cryptography.X509Certificates;

namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }
        
        public string Name { get; set; }
        
        public string Comment { get; set; }

        public List<Item>? ItemsList { get; set; }
        
        public Categorу? Category { get; set; }
        
        public Location? Location { get; set; }

        //add optional Address?
        //add optional Place?


        public Errand()
        {
            ItemsList = new List<Item>();
        }
    }
}
