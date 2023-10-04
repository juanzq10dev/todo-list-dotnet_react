using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_server.Models;
using dotnet_server.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver.Core.Authentication;

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

    }
}