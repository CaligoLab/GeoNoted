namespace Geonote.Models
{
    public class User
    {
        public string Id { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string Username { get; set; }
        public string? Email { get; set; }
        public string? Country { get; set; }
        public byte[] PasswordHash { get; set; } = new byte[0];
        public byte[] PasswordSalt { get; set; } = new byte[0];
        
        public User() 
        { 
        
        }
        
    }
}
