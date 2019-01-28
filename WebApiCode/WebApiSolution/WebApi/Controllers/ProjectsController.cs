using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.CustomClasses;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : Controller
    {
        CustomMySqlDatabase mysqldatabase = new CustomMySqlDatabase();

        [HttpGet, Route("getall")]
        public ProjectModel getall()
        {
            ProjectModel project = new ProjectModel();
            return project;
        }

        [HttpGet, Route("getbyid")]
        public string getbyid(int id)
        {
            return "Project with id: " + id;
        }

        [HttpGet, Route("getbyname")]
        public string getbyname(int name)
        {
            return "Project with name: " + name;
        }
    }
}