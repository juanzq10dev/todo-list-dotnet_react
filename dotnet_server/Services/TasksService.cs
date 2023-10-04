using dotnet_server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace dotnet_server.Services
{
    public class TasksService
    {
        private readonly IMongoCollection<ToDoTask> _tasksCollection; 

        public TasksService (
            IOptions<TasksDatabaseSettings> taskDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                taskDatabaseSettings.Value.ConnectionString);
            
            var mongoDatabase = mongoClient.GetDatabase(
                taskDatabaseSettings.Value.DatabaseName);
            
            _tasksCollection = mongoDatabase.GetCollection<ToDoTask>(
                taskDatabaseSettings.Value.TasksCollectionName);
        }

        public async Task<List<ToDoTask>> GetAsync() =>
            await _tasksCollection.Find(_ => true).ToListAsync();

        public async Task CreateAsync(ToDoTask task) => 
            await _tasksCollection.InsertOneAsync(task); 

    }
}