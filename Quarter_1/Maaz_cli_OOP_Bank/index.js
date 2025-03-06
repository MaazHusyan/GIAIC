import inquirer from 'inquirer';
class Library {
    books;
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(index) {
        if (index >= 0 && index < this.books.length) {
            this.books.splice(index, 1);
        }
    }
    displayBooks() {
        console.log("Library Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
        });
    }
}
async function main() {
    const library = new Library();
    while (true) {
        const response = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Add Book', 'Remove Book', 'Display Books', 'Exit']
        });
        switch (response.action) {
            case 'Add Book':
                const adBook = await inquirer.prompt({
                    type: 'input',
                    name: 'book',
                    message: 'Enter book title:'
                });
                library.addBook(adBook.book);
                console.log("Book added successfully!");
                break;
            case 'Remove Book':
                const bookInd = await inquirer.prompt({
                    type: 'number',
                    name: 'index',
                    message: 'Enter book number to remove:'
                });
                library.removeBook(bookInd.index - 1);
                console.log("Book removed successfully!");
                break;
            case 'Display Books':
                library.displayBooks();
                break;
            case 'Exit':
                console.log("Exiting...");
                return;
        }
    }
}
main();
