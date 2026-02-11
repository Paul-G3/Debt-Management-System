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


    }
}
