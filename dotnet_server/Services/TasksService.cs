using dotnet_server.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
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

        public async Task<ToDoTask?> GetAsync(string id) =>
            await _tasksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(ToDoTask task) => 
            await _tasksCollection.InsertOneAsync(task); 

        public async Task UpdateAsync(string id, ToDoTask updastedToDoTask) =>
            await _tasksCollection.ReplaceOneAsync(x => x.Id == id, updastedToDoTask); 

        public async Task RemoveAsync(string id) => 
            await _tasksCollection.DeleteOneAsync(x => x.Id == id);

    }
}