using BookApi.Entitys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            return new List<Book>
            {
                new Book
                {
                    id =1,
                    title="Las aventuras flipantes de vegeta",
                    author="Vegata 777",
                    sales=4001
                }
            };
        }
    }
}
