using dotnet_server.Models;
using dotnet_server.Services;

var mySpecificOrigins = "_mySpecificOrigins";

var builder = WebApplication.CreateBuilder(args);
//cors 
builder.Services.AddCors(options => 
{
    options.AddPolicy( name: mySpecificOrigins,
        policy => {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});
// Add services to the container.
builder.Services.Configure<TasksDatabaseSettings>(builder.Configuration.GetSection("TaskDatabase"));
builder.Services.AddControllers();
builder.Services.AddSingleton<TasksService>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(mySpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
