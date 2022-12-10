using ReadingList.DAL.Models;
using ReadingList.DAL.Repository.BookRepository;

namespace ReadingList.API.Services
{
    public class ReadingListService : IReadingListService
    {
        private readonly IBookRepository _bookRepository;

        public ReadingListService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public Book GetBookById(int id)
        {
            return _bookRepository.GetById(id);
        }
        public List<Book> GetBooks()
        {
            return _bookRepository.GetAll().ToList();
        }
        public List<Book> GetBooksToRead()
        {
            return _bookRepository.GetAllToRead().ToList();
        }
        public List<Book> GetBooksAlreadyRead()
        {
            return _bookRepository.GetAllAlreadyRead().ToList();
        }
        public void AddBook(Book book)
        {
            _bookRepository.Add(book);
        }
        public void RemoveBook(Book book)
        {
            _bookRepository.Remove(book);
        }
        public void UpdateBook(Book book)
        {
            _bookRepository.Update(book);
        }
        public bool BookExists(int id)
        {
            return _bookRepository.Exists(id);
        }
    }
}
