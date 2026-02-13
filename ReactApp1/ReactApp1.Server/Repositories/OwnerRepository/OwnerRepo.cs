using ReactApp1.Server.DataAccess;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Repositories.OwnerRepository
{
    public class OwnerRepo:IOwnerRepo
    {
        private ISqlDataAccess dataAccess;

        public OwnerRepo(ISqlDataAccess sqlDataAccess)
        {
            dataAccess = sqlDataAccess;
        }
        public async Task<bool> AddProduct(Product product)
        {
            try
            {

                await dataAccess.SaveData("sp_AddProduct", new {product.Name,product.ImageUrl, product.Quantity, product.Price});
                return true; 
            }
            catch(Exception) 
            {
             return false;
            }
        }

       public async Task<IEnumerable<Product>> GetAllProducts(int ShopId)
        {
            try
            {
                return await dataAccess.GetData<Product, dynamic>("sp_GetAllProducts", new { ShopId });

            }

            catch (Exception ex)
            {
                return null;
            }
       }

        public async Task<bool> DeleteProduct(int productId)
        {
            try
            {
                await dataAccess.SaveData("sp_DeleteProduct", new { ProductId = productId });
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public async Task<bool> EditProductDetails(Product product)
        {
            try
            {
                await dataAccess.SaveData("sp_EditProductDetails", new {product.ProductID,product.Name,product.Quantity,product.Price,product.Category});
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

       public async Task<bool> CreateCustomer(User user)
        {
            try
            {
                await dataAccess.SaveData("sp_CreateCustomer", new {user.UserName,user.Surname,user.IDNumber,user.Email,user.Title,user.PhoneNumber });
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}
