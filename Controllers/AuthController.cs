using Geonote.DTO_s.User;
using Geonote.Interfaces;
using Geonote.Models;
using Geonote.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Geonote.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Register")]
        public ServiceResponce<string> Register([FromBody] UserRegisterDTO newUserDTO)
        {
            return AuthRepository.Register(newUserDTO);
        }
    }
}
 