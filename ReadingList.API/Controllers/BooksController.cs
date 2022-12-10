using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadingList.API.Services;
using ReadingList.DAL.Models;

namespace ReadingList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IReadingListService _readingListService;

        public BooksController(IReadingListService readingListService)
        {
            _readingListService = readingListService;
        }

        // GET: api/Books
        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetBooks()
        {
            return _readingListService.GetBooks();
        }

        [HttpGet("AlreadyRead")]
        public ActionResult<IEnumerable<Book>> GetBooksAlreadyRead()
        {
            return _readingListService.GetBooksAlreadyRead();
        }
        [HttpGet("ToRead")]
        public ActionResult<IEnumerable<Book>> GetBooksToRead()
        {
            return _readingListService.GetBooksToRead();
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public ActionResult<Book> GetBook(int id)
        {
            var book = _readingListService.GetBookById(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutBook(int id, Book book)
        {
            if (id != book.BookId)
            {
                return BadRequest();
            }
            try
            {
                _readingListService.UpdateBook(book);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Books
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Book> PostBook(Book book)
        {
            _readingListService.AddBook(book);

            return CreatedAtAction("GetBook", new { id = book.BookId }, book);
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = _readingListService.GetBookById(id);
            if (book == null)
            {
                return NotFound();
            }

            _readingListService.RemoveBook(book);

            return NoContent();
        }

        private bool BookExists(int id)
        {
            return _readingListService.BookExists(id);
        }
    }
}
