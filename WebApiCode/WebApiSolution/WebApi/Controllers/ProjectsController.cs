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
                project._description_big = data[i][4];
                project._thumbnail = data[i][5];
                project._headerImg = data[i][6];
                project._images = new List<string[]>();
                if (data[i][7] != "none")
                {
                    string[] imgTmp = data[i][7].Split(';');
                    foreach (var img in imgTmp)
                    {
                        string[] imgTmp2 = img.Split(',');
                        project._images.Add(imgTmp2);
                    }
                }
                project._pubDate = data[i][8];
                project._favourite = bool.Parse(data[i][9]);
                project._private = bool.Parse(data[i][10]);
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
                project._description_big = data[i][4];
                project._thumbnail = data[i][5];
                project._headerImg = data[i][6];
                project._images = new List<string[]>();
                if (data[i][7] != "none")
                {
                    string[] imgTmp = data[i][7].Split(';');
                    foreach (var img in imgTmp)
                    {
                        string[] imgTmp2 = img.Split(',');
                        project._images.Add(imgTmp2);
                    }
                }
                project._pubDate = data[i][8];
                project._favourite = bool.Parse(data[i][9]);
                project._private = bool.Parse(data[i][10]);
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
                project._description_big = data[i][4];
                project._thumbnail = data[i][5];
                project._headerImg = data[i][6];
                project._images = new List<string[]>();
                if (data[i][7] != "none")
                {
                    string[] imgTmp = data[i][7].Split(';');
                    foreach (var img in imgTmp)
                    {
                        string[] imgTmp2 = img.Split(',');
                        project._images.Add(imgTmp2);
                    }
                }
                project._pubDate = data[i][8];
                project._favourite = bool.Parse(data[i][9]);
                project._private = bool.Parse(data[i][10]);
                projects[i] = project;
            }
            return projects;
        }

        [HttpPost, Route("add"), Authorize]
        public string add([FromBody]ProjectModel project)
        {
            string preparedImages = "";
            if (project._images != null)
            {                
                for (int i = 0; i < project._images.Count(); i++)
                {
                    for (int j = 0; j < project._images[i].Count(); j++)
                    {
                        preparedImages += project._images[i][j];
                        if (j != project._images[i].Count() - 1)
                        {
                            preparedImages += ",";
                        }
                    }
                    if (i != project._images.Count() - 1)
                    {
                        preparedImages += ";";
                    }
                }
                preparedImages = preparedImages.Replace("\r", "").Replace("\n", "");
            }
            else
            {
                preparedImages = "none";
            }
            string insertRowString = "name, githubRepo, description, description_big, thumbnail, headerImg, images, favourite, private";            
            string insertDataString = "'" + project._name + "', '" + project._githubRepo + "', '" + project._description + "', '" + project._description_big + "', '" + project._thumbnail + "', '" + project._headerImg + "', '" + preparedImages + "', '" + project._favourite.ToString().ToLower() + "', '" + project._private.ToString().ToLower() + "'";
            mysqldatabase.insertStringRow("projects", insertRowString, insertDataString);
            return "Project Name:" + project._name + " added";
        }

        [HttpDelete, Route("delete/{id}"), Authorize]
        public string delete(int id)
        {
            mysqldatabase.deleterowstring("projects", "ID", id.ToString());
            return "Project deletet with id: " + id;
        }

        [HttpPost, Route("change/{id}"), Authorize]
        public string change([FromBody]ProjectModel project, int id)
        {
            string preparedImages = "";
            for(int i = 0; i < project._images.Count(); i++)
            {
                for(int j = 0; j < project._images[i].Count(); j++)
                {
                    preparedImages += project._images[i][j];
                    if(j != project._images[i].Count() - 1)
                    {
                        preparedImages += ",";
                    }
                }
                if (i != project._images.Count() - 1)
                {
                    preparedImages += ";";
                }
            }
            preparedImages = preparedImages.Replace("\r", "").Replace("\n", "");
            string columnData = "name='" + project._name + "', " + 
                "githubRepo='" + project._githubRepo + "', " + 
                "description='" + project._description + "', " + 
                "description_big='" + project._description_big + "', " + 
                "thumbnail='" + project._thumbnail + "', " + 
                "headerImg='" + project._headerImg + "', " + 
                "images='" + preparedImages + "', " +                 
                "favourite='" + project._favourite.ToString().ToLower() + "', " + 
                "private='" + project._private.ToString().ToLower() + "'";
            mysqldatabase.updateValueToTableWhere("projects", columnData, "ID", id.ToString());                      
            return "Project with id: " + id + " updated";
        }
    }
}