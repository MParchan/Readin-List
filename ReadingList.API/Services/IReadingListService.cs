using ReadingList.DAL.Models;

namespace ReadingList.API.Services
{
    public interface IReadingListService
    {
        public Book GetBookById(int id);
        public List<Book> GetBooks();
        public void AddBook(Book book);
        public void RemoveBook(Book book);
    }
}
