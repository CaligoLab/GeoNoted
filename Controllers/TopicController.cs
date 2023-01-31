using Microsoft.AspNetCore.Mvc;
using Geonote.Models;
using Geonote.Repositories;

namespace Geonote.Controllers
{
    [Route("api/Topic")]
    public class TopicController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public List<Topic> GetAllTopics()
        {
            return TopicRepository.GetAllTopics();
        }
        [HttpGet("{TopicId}")]
        public Topic? GetDetaledTopicData(string topicId)
        {
            return TopicRepository.GetTopic(topicId);
        }
        [HttpPost]
        public void CreateNewTopic([FromBody] Topic topic)
        {
            TopicRepository.AddNewTopic(topic.Name);
        }
        [HttpDelete("{id}")]
        public void DeleteTopic(string id)
        {
            TopicRepository.DeleteTopicById(id);
        }
        [HttpPut("{id}")]
        public Topic? UpdateTopicById(string id, [FromBody] Topic topic)
        {
            TopicRepository.UpdateTopicById(id, topic);
            return TopicRepository.GetTopic(id);
        }
    }
}
