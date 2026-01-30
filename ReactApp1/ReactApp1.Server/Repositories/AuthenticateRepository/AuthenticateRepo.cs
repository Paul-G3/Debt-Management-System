using ReactApp1.Server.DataAccess;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Repositories.AuthenticateRepository
{
    public class AuthenticateRepo:IAutenticateRepo
    {
        private readonly ISqlDataAccess dataAccess;

        public AuthenticateRepo(ISqlDataAccess sqlDataAccess)
        {
            dataAccess = sqlDataAccess;
        }

        public async Task<bool> RegisterOwner(User user)
        {
            try
            {
                await dataAccess.SaveData("sp_RegisterOwner", new {user.Role,user.Email,user.Status,user.IDNumber,
                                                              user.Surname,user.UserName,user.Title,user.StoreName,
                                                              user.TelPhone, user.PhoneNumber,user.Password});
                return true;
            }
            catch(Exception)
            {
                return false;
            }
        }

        public async Task<dynamic> Login(User user)
        {
            try
            {
                return await dataAccess.GetData<dynamic, dynamic>("Sp_Login", new { user.Password, user.UserName });
            }
            catch (Exception)
            {
                return "";
            }
        }
        

    }
}
