using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class ProjectModel
    {
        public int _id { get; set; }
        public string _name { get; set; }
        public string _githubRepo { get; set; }
        public string _description { get; set; }
        public string _thumbnail { get; set; }
        public string _headerImg { get; set; }
        public Dictionary<string, string> _images { get; set; }
        public string _pubDate { get; set; }
        public bool _favourite { get; set; }
        public bool _private { get; set; }
    }
}
