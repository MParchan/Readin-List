using ReadingList.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ReadingList.DAL.Repository.BookRepository
{
    public class BookRepository: IBookRepository
    {
        protected readonly ReadingListDbContext _context;
        public BookRepository(ReadingListDbContext context)
        {
            _context = context;
        }

        public Book GetById(int id)
        {
            return _context.Books.Find(id);
        }
        public IEnumerable<Book> GetAll()
        {
            return _context.Books.ToList();
        }
        public void Add(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
        }
        public void Remove(Book book)
        {
            _context.Books.Remove(book);
            _context.SaveChanges();
        }
    }
}
