using System;
namespace Geonote.Models
{
    public class Hint
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public Topic? Topic { get; set; }

        public Location? Location { get; set; }

        public Hint()
        {
        }
    }
}

