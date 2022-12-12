using ReadingList.Service.DTOs;

namespace ReadingList.Service.Services
{
    public interface IReadingListService
    {
        public BookDto GetBookById(int id);
        public List<BookDto> GetBooks();
        public List<BookDto> GetBooksToRead();
        public List<BookDto> GetBooksAlreadyRead();
        public void AddBook(BookDto book);
        public void RemoveBook(int id);
        public void UpdateBook(BookDto book);
        public bool BookExists(int id);
    }
}
