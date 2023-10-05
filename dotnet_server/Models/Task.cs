using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace dotnet_server.Models
{
    public class ToDoTask
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        public string Name { get; set; } = null!;

        public bool Completed { get; set; } = false;
    }
}