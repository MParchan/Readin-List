using Microsoft.EntityFrameworkCore;

namespace ReadingList.DAL.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public bool AlreadyRead { get; set; }
        public bool ToRead { get; set; }
        public int Priority { get; set; }
        public string Image { get; set; }
    }
}
