using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Repositories.OwnerRepository;
using System.Reflection.Emit;

namespace ReactApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private IOwnerRepo repo;
        public OwnerController(IOwnerRepo ownerRepo)
        {
            repo = ownerRepo;
        }
        [HttpPost("add-product")]
        public async Task<IActionResult> AddProduct([FromForm] Product product)
        {
            var fileName = Guid.NewGuid() + Path.GetExtension(product.Image.FileName);
            var path = Path.Combine("wwwroot/images", fileName);


            try
            {
                using var stream = new FileStream(path, FileMode.Create);
                await product.Image.CopyToAsync(stream);

                var Product = new Product
                {
                    Name = product.Name,
                    Category = product.Category,
                    Price = product.Price,
                    Quantity = product.Quantity,
                    ImageUrl = "/images/" + fileName
                };
                await repo.AddProduct(Product);

            }
            catch(Exception ex)
            {
                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                return StatusCode(500, "Failed to save product: " + ex.Message);
            }



            return Ok();
        }

        [HttpGet("get-products")]
        public async Task<IActionResult> GetProducts([FromForm] Product product)
        {

            var data = await repo.GetAllProducts(1);
            return Ok(data);
        } 
        
        [HttpPost("delete-product")]
        public async Task<IActionResult> DeleteProduct([FromBody] int productId)
        {

            var data = await repo.DeleteProduct(productId);
            return Ok(data);
        } 
        
        [HttpPost("edit-product-details")]
        public async Task<IActionResult> EditProdcutDetails([FromBody] Product product)
        {
            await repo.EditProductDetails(product);

            return Ok();
        }
    }
}
