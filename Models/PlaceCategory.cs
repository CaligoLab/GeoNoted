using System;
using System.ComponentModel;

namespace Geonote.Models
{
    public class PlaceCategorу
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public PlaceCategorу()
        {

        }

        public Categorу(string Id)
        {
            this.Id = Id;
        }

    }
}

