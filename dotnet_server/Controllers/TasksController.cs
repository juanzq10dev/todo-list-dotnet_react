using dotnet_server.Models;
using dotnet_server.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace dotnet_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly TasksService _tasksService; 

        public TasksController(TasksService tasksService) =>
            _tasksService = tasksService; 

            [HttpGet]
            public async Task<List<ToDoTask>> Get() =>
                await _tasksService.GetAsync();

        [HttpPost]
        public async Task<IActionResult> Post(ToDoTask task)
        {
            await _tasksService.CreateAsync(task);
            return CreatedAtAction(nameof(Get), new { id = task.Id }, task);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoTask>> Get(string id)
        {
            var toDoTask = await _tasksService.GetAsync(id); 

            if (toDoTask is null)
            {
                return NotFound();
            }

            return toDoTask; 
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, ToDoTask updatedTask)
        {
            var todoTask = await _tasksService.GetAsync(id); 

            if (todoTask is null) 
            {
                return NotFound();
            }

            updatedTask.Id = todoTask.Id; 

            await _tasksService.UpdateAsync(id, updatedTask);

            return NoContent(); 
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete (string id)
        {
            var task = await _tasksService.GetAsync(id); 

            if (task is null)
            {
                return NotFound(); 
            }

            await _tasksService.RemoveAsync(id); 

            return NoContent();
        }

    }
}