using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReadingList.Service.Services;
using ReadingList.Service.DTOs;
using ReadingList.API.ViewModels;
using AutoMapper;

namespace ReadingList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IReadingListService _readingListService;
        private readonly IMapper _mapper;

        public BooksController(IReadingListService readingListService, IMapper mapper)
        {
            _readingListService = readingListService;
            _mapper = mapper;
        }

        // GET: api/Books
        [HttpGet]
        public ActionResult<IEnumerable<BookViewModel>> GetBooks()
        {
            var results = _readingListService.GetBooks();
            return _mapper.Map<List<BookViewModel>>(results);
        }

        [HttpGet("AlreadyRead")]
        public ActionResult<IEnumerable<BookViewModel>> GetBooksAlreadyRead()
        {
            var results = _readingListService.GetBooksAlreadyRead();
            return _mapper.Map<List<BookViewModel>>(results);
        }
        [HttpGet("ToRead")]
        public ActionResult<IEnumerable<BookViewModel>> GetBooksToRead()
        {
            var results = _readingListService.GetBooksToRead();
            return _mapper.Map<List<BookViewModel>>(results);
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public ActionResult<BookViewModel> GetBook(int id)
        {
            var book = _readingListService.GetBookById(id);

            if (book == null)
            {
                return NotFound();
            }

            return _mapper.Map<BookViewModel>(book);
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult PutBook(int id, BookViewModel book)
        {
            if (id != book.BookId)
            {
                return BadRequest();
            }
            try
            {
                _readingListService.UpdateBook(_mapper.Map<BookDto>(book));
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
        public ActionResult<BookViewModel> PostBook(BookViewModel book)
        {
            _readingListService.AddBook(_mapper.Map<BookDto>(book));

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

            _readingListService.RemoveBook(id);

            return NoContent();
        }

        private bool BookExists(int id)
        {
            return _readingListService.BookExists(id);
        }
    }
}
