import { Book } from './Book.js';

const user1 = new Book ("Born A Crime", "Trevor Noah", 400, "Biography", 400, true);
const user2 = new Book("Becoming", "Michelle Obama", 350, "Biography", 1, false);
const user3 = new Book("Everything, Everything", "Nicola Yoon", 380, "Family", 1, true);
const user4 = new Book("The Sun is Also A Star", "Nicola Yoon", 440, "Love", 1, true);

let bookList = [user1, user2, user3, user4];

export { bookList };
