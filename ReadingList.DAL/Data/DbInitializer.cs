using ReadingList.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace ReadingList.DAL.Data
{
    public class DbInitializer
    {
        public static void Initialize(ReadingListDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Books.Any())
            {
                return;
            }

            var books = new Book[]
            {
                new Book{
                    Title="Harry Potter and the Philosopher's Stone",
                    Author="J. K. Rowling",
                    Description="It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he's a wizard.",
                    AlreadyRead=false,
                    ToRead=false,
                    Priority=0,
                    Image="Harry_Potter_and_the_Philosopher's_Stone.png"
                },
                new Book{
                    Title="The Fellowship of the Ring",
                    Author="J. R. R. Tolkien",
                    Description="A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. An ancient Ring thought lost for centuries has been found, and through a strange twist of fate has been given to a small Hobbit named Frodo.",
                    AlreadyRead=false,
                    ToRead=false,
                    Priority=0,
                    Image="The_Fellowship_of_the_Ring.png"
                },
                new Book{
                    Title="The Da Vinci Code",
                    Author="Dan Brown",
                    Description="A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.",
                    AlreadyRead=false,
                    ToRead=false,
                    Priority=0,
                    Image="The_Da_Vinci_Code.png"
                },
                new Book{
                    Title="The Godfather",
                    Author="Mario Puzo",
                    Description="It details the story of a fictitious Sicilian Mafia family based in New York City and headed by Don Vito Corleone, who became synonymous with the Italian Mafia. The novel covers the years 1945 to 1955, and also provides the back story of Vito Corleone from early childhood to adulthood.",
                    AlreadyRead=false,
                    ToRead=false,
                    Priority=0,
                    Image="The_Godfather.png"
                },
                new Book{
                    Title="Fifty Shades of Grey",
                    Author="E. L. James",
                    Description="It is the story of a 21-year-old college student, Anastasia, who begins a relationship with a 27-year-old successful, powerful businessman named Christian Grey. They meet when she interviews him for her college newspaper.",
                    AlreadyRead=false,
                    ToRead=false,
                    Priority=0,
                    Image="Fifty_Shades_of_Grey.png"
                }
            };
            foreach (Book b in books)
            {
                context.Books.Add(b);
            }

            context.SaveChanges();
        }
    }
}
