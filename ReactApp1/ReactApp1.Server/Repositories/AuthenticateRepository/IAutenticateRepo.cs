using ReactApp1.Server.Models;

namespace ReactApp1.Server.Repositories.AuthenticateRepository
{
    public interface IAutenticateRepo
    {
        Task<bool> RegisterOwner(User user);
    }
}
