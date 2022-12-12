using Microsoft.EntityFrameworkCore;
using ReadingList.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ReadingList.Repository.Repository.BookRepository
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
        public void Update(Book book)
        {
            _context.Entry(book).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public IEnumerable<Book> GetAllToRead()
        {
            return _context.Books.Where(b => b.ToRead == true).ToList();
        }
        public IEnumerable<Book> GetAllAlreadyRead()
        {
            return _context.Books.Where(b => b.AlreadyRead == true).ToList();
        }
        public bool Exists(int id)
        {
            return _context.Books.Any(e => e.BookId == id);
        }
    }
}
