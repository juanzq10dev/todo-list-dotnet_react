using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet_server.Models
{
    public class TasksDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!; 

        public string DatabaseName { get; set; } = null!; 

        public string TasksCollectionName { get; set; } = null!; 
    }
}