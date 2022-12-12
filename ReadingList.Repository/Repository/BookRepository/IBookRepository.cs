using ReadingList.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadingList.Repository.Repository.BookRepository
{
    public interface IBookRepository
    {
        public Book GetById(int id);
        public IEnumerable<Book> GetAll();
        public void Add(Book book);
        public void Remove(Book book);
        public void Update(Book book);
        public IEnumerable<Book> GetAllToRead();
        public IEnumerable<Book> GetAllAlreadyRead();
        public bool Exists(int id);
    }
}
