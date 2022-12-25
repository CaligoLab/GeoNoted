using Geonote.Interfaces;
using Geonote.Models;

namespace Geonote.Repositories
{
    public class AuthRepository : IAuthRepository
    {
        public AuthRepository()
        {
        }

        public ServiceResponce<string> Login(string username, string password)
        {
            return new ServiceResponce<string>();
        }

        public ServiceResponce<string> Register(User user, string password)
        {
            return new ServiceResponce<string>();
        }

        public bool Login(string password)
        {
            return true;
        }
    }
}
