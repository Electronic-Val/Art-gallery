# Picture gallery

A picture gallery that has likes and comment functionality. I have tried to use OOP concepts as much as I can. 

## Features 
* picture gallery 
* uploads
* likes
* comments
* login system

### File structure
1. All frontend pages(*pages with .php extension*) are placed in the root directory. 
2. CSS & javascript files are kept in *CSS* & *JS* folders respectively. 
3. Backend codes are stored in the *includes* folder and have the extension. *inc.php*
4. Classes are stored in the *classes* folder. 
5. Fonts are stored in the *fonts* folder.

**Note:-** *The class files contains classes which handle stuff that I use frequently. They include database, likes, and file uploads.*

### Installation 
1. Just download and unzip into the root directory of your server.
2. I've instantiated the classes in the class files to avoid repitition. you can change this if you want.
3. Stuff like database name have been passed in while instantiating the classes, change this to suit your database name.
4. To avoid complications, you leave the name as is. Then set the following:
 * dbName: valpoint
 * username: root
 * password: ""
5. In the above database create a the following tables:
 * users: with rows id, date, username, password, name and surname.
 * images: id, uploaded, filename, givenName, uploaded, description and likes.
 * likers: id, users and liked_pic.
 * opinion: id, user, word, pic\_id and pic\_table.
 
 

 
 


