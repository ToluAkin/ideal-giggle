import { bookList } from "./database";

class Book {
    constructor(title, author, pages, description, currentPage, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = 1;
        this.read = true or false;
    }

    readBook (currentPage) {
        if (currentPage > pages) {
            console.log('This is the default value');
        } else {
            console.log(bookList.currentPage);
        } 
        if (currentPage == pages) {
            return this.read == true; 
        } 
    }
}

export { Book };