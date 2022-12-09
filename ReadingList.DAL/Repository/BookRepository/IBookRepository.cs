﻿using ReadingList.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReadingList.DAL.Repository.BookRepository
{
    public interface IBookRepository
    {
        public Book GetById(int id);
        public IEnumerable<Book> GetAll();
        public void Add(Book book);
        public void Remove(Book book);
    }
}
