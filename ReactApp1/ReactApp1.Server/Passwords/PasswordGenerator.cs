using System.Text;

namespace ReactApp1.Server.Passwords
{
    public class PasswordGenerator
    {
        private static readonly string _chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
      "abcdefghijklmnopqrstuvwxyz" +
      "0123456789" +
      "!@#$%^&*";

        public string GeneratePassword()
        {
            var random = new Random();
            var password = new StringBuilder();

            for (int i = 0; i < 8; i++)
            {
                int index = random.Next(_chars.Length);
                password.Append(_chars[index]);
            }

            return password.ToString();
        }
    }
}
