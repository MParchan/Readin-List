using System.ComponentModel.DataAnnotations.Schema;

namespace ReadingList.API.ViewModels
{
    public class BookViewModel
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public bool AlreadyRead { get; set; }
        public bool ToRead { get; set; }
        public int Priority { get; set; }
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }
    }
}
