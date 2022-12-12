using AutoMapper;
using ReadingList.Repository.Entities;
using ReadingList.Service.DTOs;

namespace ReadingList.API.ViewModels
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<BookDto, Book>();
            CreateMap<BookViewModel, BookDto>();
            CreateMap<BookDto, BookViewModel>();
        }
    }
}
