using System;
namespace Geonote.Models
{
    public class ErrandsTypes
    {
        public string id { get; set; }
        public string name { get; set; }
        public bool recurring { get; set; }
        public bool justHint { get; set; }

        public ErrandsTypes()
        {
        }
    }
}
