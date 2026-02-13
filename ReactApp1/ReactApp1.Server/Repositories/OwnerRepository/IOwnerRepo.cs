using ReactApp1.Server.Models;

namespace ReactApp1.Server.Repositories.OwnerRepository
{
    public interface IOwnerRepo
    {
        Task<bool> AddProduct(Product product);
        Task<bool> EditProductDetails(Product product);
        Task<bool> DeleteProduct(int productId);
        Task<bool> CreateCustomer(User user);
        Task<IEnumerable<Product>> GetAllProducts(int ShopId);
    }
}
