using ReadingList.Service.DTOs;
using ReadingList.Repository.Repository.BookRepository;
using ReadingList.Repository.Entities;
using AutoMapper;

namespace ReadingList.Service.Services
{
    public class ReadingListService : IReadingListService
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public ReadingListService(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public BookDto GetBookById(int id)
        {
            
            var results = _bookRepository.GetById(id);
            return _mapper.Map<BookDto>(results);
        }
        public List<BookDto> GetBooks()
        {
            var results = _bookRepository.GetAll().ToList();
            return _mapper.Map<List<BookDto>>(results);
        }
        public List<BookDto> GetBooksToRead()
        {
            var results = _bookRepository.GetAllToRead().ToList();
            return _mapper.Map<List<BookDto>>(results);
        }
        public List<BookDto> GetBooksAlreadyRead()
        {
            var results = _bookRepository.GetAllAlreadyRead().ToList();
            return _mapper.Map<List<BookDto>>(results);
        }
        public void AddBook(BookDto book)
        {
            _bookRepository.Add(_mapper.Map<Book>(book));
        }
        public void RemoveBook(int id)
        {
            var results = _bookRepository.GetById(id);
            _bookRepository.Remove(_mapper.Map<Book>(results));
        }
        public void UpdateBook(BookDto book)
        {
            _bookRepository.Update(_mapper.Map<Book>(book));
        }
        public bool BookExists(int id)
        {
            return _bookRepository.Exists(id);
        }
    }
}
