# Readin List
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
* Run two commands: npm -i, npm start
