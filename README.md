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
## Database (MS SQL Server)
![readinlist](https://user-images.githubusercontent.com/85680066/207297893-d54ed119-fcac-4c88-aa0d-7cfa6973b8cc.png)
## Architecture
* ASP.NET Core Web API
* React
* Repository-Service pattern
* Entity Framework Core
* Microsoft SQL Server
