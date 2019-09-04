import { bookList } from "./database";

class Book {
    constructor(title, author, pages, description, currentPage, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = 1;
        this.read = false;
    }

    readBook(page) {
        if (page <= 0 || page > this.pages) {
          alert('Incorrect number of pages!');
        } else {
          this.currentPage = page;
          if (page == this.pages) {
            this.read = true;
            }
        }    
    }
}

export { Book };