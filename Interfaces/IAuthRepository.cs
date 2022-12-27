using Geonote.DTO_s.User;
using Geonote.Models;

namespace Geonote.Interfaces
{
    public interface IAuthRepository
    {

        ServiceResponce<string> Register(Models.User user, UserRegisterDTO newUserDTO);
        ServiceResponce<string> Login(string username, string password);
        bool UserExists(string registeredUsername, string providedUsername);


    }
}
