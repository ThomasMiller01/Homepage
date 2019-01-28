using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApi.CustomClasses;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : Controller
    {
        CustomMySqlDatabase mysqldatabase = new CustomMySqlDatabase();

        [HttpGet, Route("getall"), Authorize]
        public ProjectModel[] getall()
        {            
            var data = mysqldatabase.readEverythingFromTable("projects");
            ProjectModel[] projects = new ProjectModel[data.Count()];
            for(int i = 0; i < data.Count(); i++)
            {
                ProjectModel project = new ProjectModel();
                project._id = int.Parse(data[i][0]);
                project._name = data[i][1];
                project._githubRepo = data[i][2];
                project._description = data[i][3];
                project._thumbnail = data[i][4];
                project._headerImg = data[i][5];                
                project._images = JsonConvert.DeserializeObject<Dictionary<string, string>>(data[i][6]);
                project._pubDate = data[i][7];
                project._favourite = bool.Parse(data[i][8]);
                project._private = bool.Parse(data[i][9]);
                projects[i] = project;
            }
            return projects;
        }

        [HttpGet, Route("getbyid/{id}"), Authorize]
        public ProjectModel getbyid(int id)
        {
            var data = mysqldatabase.readRowFromTableWhereString("projects", "ID", id.ToString());
            ProjectModel project = new ProjectModel();
            if (data.Count() == 0)
            {
                project = null;
            }
            else
            {
                project._id = int.Parse(data[0][0]);
                project._name = data[0][1];
                project._githubRepo = data[0][2];
                project._description = data[0][3];
                project._thumbnail = data[0][4];
                project._headerImg = data[0][5];
                project._images = JsonConvert.DeserializeObject<Dictionary<string, string>>(data[0][6]);
                project._pubDate = data[0][7];
                project._favourite = bool.Parse(data[0][8]);
                project._private = bool.Parse(data[0][9]);
            }
            return project;
        }

        [HttpGet, Route("getbyname/{name}"), Authorize]
        public ProjectModel getbyname(string name)
        {
            var data = mysqldatabase.readRowFromTableWhereString("projects", "name", name);
            ProjectModel project = new ProjectModel();
            if (data.Count() == 0)
            {
                project = null;             
            }
            else
            {                
                project._id = int.Parse(data[0][0]);
                project._name = data[0][1];
                project._githubRepo = data[0][2];
                project._description = data[0][3];
                project._thumbnail = data[0][4];
                project._headerImg = data[0][5];
                project._images = JsonConvert.DeserializeObject<Dictionary<string, string>>(data[0][6]);
                project._pubDate = data[0][7];
                project._favourite = bool.Parse(data[0][8]);
                project._private = bool.Parse(data[0][9]);
            }            
            return project;
        }

        [HttpPost, Route("add"), Authorize]
        public string add([FromBody]ProjectModel project)
        {
            return "Project added: " + project;
        }

        [HttpDelete, Route("delete/{id}"), Authorize]
        public string delete(int id)
        {
            return "Project deletet: " + id;
        }

        [HttpPost, Route("change/{id}"), Authorize]
        public string change([FromBody]ProjectModel project, int id)
        {
            return "Project changed: " + id + " " + project;
        }
    }
}