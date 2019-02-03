using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using WebApi.CustomClasses;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        CustomMySqlDatabase mysqldatabase = new CustomMySqlDatabase();
        CustomEncoding encoding = new CustomEncoding();

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }
            try
            {
                string[] data = mysqldatabase.readRowFromTableWhereString("user", "Name", user.UserName)[0];
                string passhash = data[2];                
                if (encoding.validatePass(user.Password, passhash))
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKeyHerePls"));
                    var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);                    

                    var tokeOptions = new JwtSecurityToken(
                        issuer: "https://localhost:41970",
                        audience: "https://localhost:41970",                        
                        expires: DateTime.Now.AddMinutes(5000),
                        signingCredentials: signinCredentials
                    );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                    return Ok(new { Token = tokenString });
                }
                else
                {
                    return Unauthorized();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("Exception-Message: " + e.Message);
                return Unauthorized();
            }
        }
    }
}