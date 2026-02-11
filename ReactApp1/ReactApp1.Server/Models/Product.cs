namespace ReactApp1.Server.Models
{
    public class Product
    {
        public string? Name { get; set; }
        public string? Category { get; set; }
        public decimal? Price { get; set; }
        public string? Status { get; set; }
        public int? Quantity { get; set; }
        public IFormFile? Image { get; set; }
        public string? ImageUrl { get; set; } // <-- MUST be string
    }
}
