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
            return HintRepository.GetAllHints();
        }


        [HttpGet ("{hintId}")]
        public Hint? GetHintsWithDetails(string hintId)
        {
            return HintRepository.GetHint(hintId);
        }
    }
}