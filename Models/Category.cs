using System;
namespace Geonote.Models
{
    public class Categorу
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public Categorу()
        {

        }

        public Categorу(string Id)
        {
            this.Id = Id;
        }
    }
}

