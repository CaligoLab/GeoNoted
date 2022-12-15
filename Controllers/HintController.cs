using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Geonote.Models;
using Geonote.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Geonote.Controllers
{
    [Route("api/hint")]

    public class HintController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]

        public List<Hint> GetAllHints()
        {
            return HintRepository.AllHints;
        }


        [HttpGet ("{hintId}")]
        public Hint? GetHintsWithDetails(string hintId)
        {
            return HintRepository.GetHint(hintId);
        }

        [HttpPost]
        public void CreateNewHint([FromBody] Hint hint)
        {
            HintRepository.AddNewHint(hint.Name, hint.Id, hint.Category, hint.Location);
        }

        [HttpDelete("{hintId}")]
        public void DeleteHint(string hintId)
        {
            HintRepository.DeleteHintById(hintId);
        }


        [HttpPut("{hintId}")]
        public Hint? UpdateHint(string hintId, [FromBody] string hintName)
        {

            HintRepository.UpdateHintNameById(hintId, hintName);
            return HintRepository.GetHint(hintId);
        }
    }
}