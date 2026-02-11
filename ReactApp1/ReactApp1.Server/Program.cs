using ReactApp1.Server.DataAccess;
using ReactApp1.Server.Passwords;
using ReactApp1.Server.Repositories.AuthenticateRepository;
using ReactApp1.Server.Repositories.OwnerRepository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddTransient<ISqlDataAccess, SqlDataAccess>();
builder.Services.AddTransient<IAutenticateRepo, AuthenticateRepo>();
builder.Services.AddTransient<IOwnerRepo, OwnerRepo>();
builder.Services.AddScoped<PasswordGenerator>();

//ADD CORS POLICY HERE
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            // Allow your React dev server origin
            policy.WithOrigins("https://localhost:62203")  // Your React port
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials();
        });
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// USE CORS MIDDLEWARE (Place it early in the pipeline)
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();