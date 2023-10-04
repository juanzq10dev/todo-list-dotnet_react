using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace dotnet_server.Models
{
    public class ToDoTask
    {
        [BsonId]
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public bool Completed { get; set; } = false;
    }
}