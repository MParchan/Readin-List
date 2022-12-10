using ReadingList.DAL.Models;

namespace ReadingList.API.Services
{
    public interface IReadingListService
    {
        public Book GetBookById(int id);
        public List<Book> GetBooks();
        public List<Book> GetBooksToRead();
        public List<Book> GetBooksAlreadyRead();
        public void AddBook(Book book);
        public void RemoveBook(Book book);
        public void UpdateBook(Book book);
        public bool BookExists(int id);
    }
}
