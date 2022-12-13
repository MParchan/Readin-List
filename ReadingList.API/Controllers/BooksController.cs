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
        private readonly IWebHostEnvironment _webHostEnvironment;

        public BooksController(IReadingListService readingListService, IMapper mapper, IWebHostEnvironment webHostEnvironment)
        {
            _readingListService = readingListService;
            _mapper = mapper;
            _webHostEnvironment = webHostEnvironment;
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
        [HttpPost]
        public ActionResult<BookViewModel> PostBook(BookViewModel book)
        {
            if (book.ImageFile != null)
            {
                book.ImageName = SaveImage(book.ImageFile);
            }
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

        [NonAction]
        public string SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(" ", "_");
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var controllersPath = Path.Combine(Directory.GetParent(Environment.CurrentDirectory)+"");
            var imagePath = Path.Combine(Directory.GetParent(controllersPath) + "/ReadingList.Repository/Data/Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                imageFile.CopyTo(fileStream);
            }
            return imageName;
        }
    }
}
