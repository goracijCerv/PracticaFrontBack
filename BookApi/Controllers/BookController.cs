using BookApi.Data;
using BookApi.Entitys;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace BookApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly DataContext _context;

        public BookController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBooks()
        {
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return BadRequest("El libro no existe");
            return Ok(book);
        }

        [HttpPost("add-book")]
        public async Task<ActionResult<List<Book>>> AddBook(Book book)
        {
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Book>>> UpdateBook(Book book)
        {
            var booko =  await _context.Books.FindAsync(book.id);
            if (booko == null)
                return BadRequest("No existe este libro");
            booko.title = book.title;
            booko.author = book.author;
            booko.datePublication = book.datePublication;
            booko.sales = book.sales;

            await _context.SaveChangesAsync();
            return Ok(await _context.Books.ToListAsync());
        }

        [HttpDelete("d/{id}")]
        public async Task<ActionResult<List<Book>>> DelateBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null)
                return BadRequest("No existe este libro");
            
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();

            return Ok(await _context.Books.ToListAsync());
        }
    }
}
