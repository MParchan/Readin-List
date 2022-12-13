# Readin List
#### Web application that stores a list of books. It allows you to mark books you have read and add books to read with the option of setting a priority.
## Configuration
* Change database ConnectingString in [appsettings.json](ReadingList.API/appsettings.json)
````json
"ConnectionStrings": {
    "ReadingListConnection": "Server=(localdb)\\mssqllocaldb;Database=ReadingListDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
````
* In Package Manager Console run `update-database` command
* Run the program to load sample data to the database and start the server
* Navigate in the terminal to the folder "reading-list-frontend"
* Run two commands: `npm install` and `npm start`
## User manual
After launching the application, the home page with the list of books will be displayed. Hovering the mouse over a book will display three additional buttons: 
* in the upper right corner, the X button for deleting a book from the database
* "Mark book as read" button for adding a book to the list of read books
* "Add the book to read" button for adding a book to the list of books to read
The "Add book" page allows you to add a new book to the database. After completing the title, author and description of the book, click on the "Add book" button.
The "Books read" page displays a list of books marked as read. You can remove a book from the list by hovering over it with the mouse and clicking "remove from read books".
The "Books to read" page displays a list of books you have added to read. You can change the order of books in the list by dragging them to the appropriate position. It works on a drag and drop list.
## Problems encountered 
The initial idea was to be able to add an image when creating a new book. Unfortunately, due to the problems encountered, this idea was abandoned. Currently, only books added at database initialization have an image, and books added through the application don't have the ability to add an image. The problem is that when executing axios post there was an error with status 415 (Unsupported Media Type). I searched for answers on the internet but none of the options helped. In the future I will probably find a solution, but currently I ran out of time to do it in this application.
## Database (MS SQL Server)
![readinlist](https://user-images.githubusercontent.com/85680066/207297893-d54ed119-fcac-4c88-aa0d-7cfa6973b8cc.png)
## Architecture
* ASP.NET Core Web API
* React
* Repository-Service pattern
* Entity Framework Core
* Microsoft SQL Server
