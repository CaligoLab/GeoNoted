using Geonote.DTO_s.User;
using Geonote.Interfaces;
using Geonote.Migrations;
using Geonote.Models;
using SQLitePCL;

namespace Geonote.Repositories
{
    public class AuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;
        }
        private static readonly string UserTableName = "User";

        public static ServiceResponce<string> Login(string username, string password)
        {
          throw new NotImplementedException();
        }

        public static ServiceResponce<string> Register(UserRegisterDTO newUserDTO)
        {

            var responce = new ServiceResponce<string>();

            var newUser = new Models.User();

            if (UserExists(newUserDTO.Username))
            {
                responce.Success = false;
                responce.Message = "User already exists.";
                return responce;
            }

            newUser.Id = Guid.NewGuid().ToString();

           CreatePasswordHash (newUserDTO.Password, out byte[] passwordHash, out byte[] passordSalt);

            newUser.PasswordHash = passwordHash;
            newUser.PasswordSalt = passordSalt;

            var columnNames = "Id, Username, PasswordHash, PasswordSalt";
            var columnValues = $"\"{newUser.Id}\", \"{newUserDTO.Username}\", \"{newUser.PasswordHash}\", \"{newUser.PasswordSalt}\"";

          /*  if (newUserDTO.Country != null)
            { columnNames += ", Country"; columnValues += $", \"{newUserDTO.Country}\""; }

            if (newUserDTO.Email != null)
            { columnNames += ", Email"; columnValues += $", \"{newUserDTO.Email}\""; }

            if (newUserDTO.Name != null)
            { columnNames += ", Name"; columnValues += $", \"{newUserDTO.Name}\""; }

            if (newUserDTO.Surname != null)
            { columnNames += ", Surname"; columnValues += $", \"{newUserDTO.Surname}\""; }*/


            SQLTableManagement.InsertData(UserTableName, columnNames, columnValues);

            responce.Message = $"{newUser.Username}, welcome to GeoNoted! Let's start! Would you like to set up your Account just as you like it?";
            return responce;
        }

        private static bool UserExists(string providedUsername)
        {
            var clause = $"Username = \"{providedUsername}\""; //how to operate the Username? Say, I wanted to compare both .ToLower()
            var sqlite_datareader = SQLTableManagement.ReadData(UserTableName, clause);
            
            while (sqlite_datareader.Read())
            {
                SQLiteConnect.CloseConnections(sqlite_datareader);
                return true;
            }

            SQLiteConnect.CloseConnections(sqlite_datareader);
            return false;
        }
        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}
