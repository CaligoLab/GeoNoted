namespace Geonote.Models
{
    public class Topic
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public Topic(string topicId)
        {
            this.Id = topicId;
        }
		public Topic()
		{
		}
	}
}
