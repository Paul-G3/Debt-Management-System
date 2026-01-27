using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Passwords;
using ReactApp1.Server.Repositories.AuthenticateRepository;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {

        private IAutenticateRepo autenticate;
        private PasswordGenerator Generator;
        public AuthenticateController(IAutenticateRepo autenticateRepo, PasswordGenerator passwordGenerator)
        {
            autenticate = autenticateRepo;
            Generator = passwordGenerator;
        }

        [HttpPost("register-owner")]
        public async Task<IActionResult> CreateAccountOwner([FromBody] User Login)
        {
            Login.Password = Generator.GeneratePassword();
            await autenticate.RegisterOwner(Login);
            return Ok();
        }

        [HttpPost("login-user")]
        public async Task<IActionResult> Login([FromBody] User Login)
        {
            return Ok();
        }
    }
}
