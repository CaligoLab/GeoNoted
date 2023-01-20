using System.Security.Cryptography.X509Certificates;

namespace Geonote.Models
{
    public class Errand
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string? Comment { get; set; }

        public List<Item>? ItemsList { get; set; }

        public Topic? Topic { get; set; }

        public Location? Location { get; set; }

        public Address? Address { get; set; }

        public List<Place>? PlacesList { get; set; }

        public Errand()
        {
            ItemsList = new List<Item>();
            PlacesList = new List<Place>();
        }
    }
}
