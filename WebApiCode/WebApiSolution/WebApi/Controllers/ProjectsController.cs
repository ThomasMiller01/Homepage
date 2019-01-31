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

        [HttpGet, Route("getby/{item}/{data}"), Authorize]
        public ProjectModel[] getbyid(string _item, string _data)
        {
            var data = mysqldatabase.readRowFromTableWhereString("projects", _item, _data);
            ProjectModel[] projects = new ProjectModel[data.Count()];
            for (int i = 0; i < data.Count(); i++)
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
       

        [HttpGet, Route("getpublic")]
        public ProjectModel[] getpublic()
        {
            var data = mysqldatabase.readRowFromTableWhereString("projects", "private", "false");            
            ProjectModel[] projects = new ProjectModel[data.Count()];
            for (int i = 0; i < data.Count(); i++)
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

        [HttpPost, Route("add"), Authorize]
        public string add([FromBody]ProjectModel project)
        {            
            string insertRowString = "name, githubRepo, description, thumbnail, headerImg, images, pubDate, favourite, private";
            string preparedImages = "{}";
            string insertDataString = "'" + project._name + "', '" + project._githubRepo + "', '" + project._description + "', '" + project._thumbnail + "', '" + project._headerImg + "', '" + preparedImages + "', '" + project._pubDate + "', '" + project._favourite + "', '" + project._private + "'";
            mysqldatabase.insertStringRow("Projects", insertRowString, insertDataString);
            return "Project: " + project + "added";
        }

        [HttpDelete, Route("delete/{id}"), Authorize]
        public string delete(int id)
        {
            mysqldatabase.deleterowstring("Projects", "ID", id.ToString());
            return "Project deletet with id: " + id;
        }

        [HttpPost, Route("change/{id}"), Authorize]
        public string change([FromBody]ProjectModel project, int id)
        {
            string preparedImages = "{}";
            string columnData = "name='" + project._name + "', " + 
                "githubRepo='" + project._githubRepo + "', " + 
                "description='" + project._description + "', " + 
                "thumbnail='" + project._thumbnail + "', " + 
                "headerImg='" + project._headerImg + "', " + 
                "images='" + preparedImages + "', " + 
                "pubDate='" + project._pubDate + "', " +
                "favourite='" + project._favourite.ToString() + "', " + 
                "private='" + project._private.ToString() + "'";
            mysqldatabase.updateValueToTableWhere("Projects", columnData, "ID", id.ToString());                      
            return "Project with id: " + id + " updated with value: " + project;
        }
    }
}