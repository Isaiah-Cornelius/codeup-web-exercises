(function() {
    "use strict";

    // /**
    //  * TODO:
    //  * Create an object with firstName and lastName properties that are strings
    //  * with your first and last name. Store this object in a variable named
    //  * `person`.
    //  *
    //  * Example:
    //  *  > console.log(person.firstName) // "Rick"
    //  *  > console.log(person.lastName) // "Sanchez"
    //  */
    let person = {
        firstName : 'Isaiah',
        lastName : 'Cornelius'
    }
    console.log(person.firstName);
    console.log(person.lastName);
    //
    // /**
    //  * TODO:
    //  * Add a sayHello method to the person object that returns a greeting using
    //  * the firstName and lastName properties.
    //  * console.log the returned message to check your work
    //  *
    //  * Example
    //  * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
    //  */
    person.sayHello = function (){
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    }
    console.log(person.sayHello());
    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */
    //
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper){
        let discount = .12;
        console.log("Hello " + shopper.name + "! Thank you for shopping at HEB! Your current amount is $" + shopper.amount.toFixed(2) + ".")
        if (shopper.amount <= 200){
            console.log("To receive your " + (discount * 100) + "% discount, you must spend an additional $" + (200.01 - shopper.amount).toFixed(2) + "." );
        } else {
            shopper.amount -= shopper.amount * discount;
            console.log("Your " + (discount * 100) + "% discount has been applied!")
        }
        console.log("Your total amount is $" + shopper.amount.toFixed(2) + "!");
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // let books = [
    //     {
    //         title : "Dune",
    //         author : {
    //             firstName : "Frank",
    //             lastName : "Herbert"
    //         }
    //     },
    //     {
    //         title: "Hyperion",
    //         author: {
    //             firstName: "Dan",
    //             lastName: "Simmons"
    //         }
    //     },
    //     {
    //         title: "Oliver Twist",
    //         author: {
    //             firstName: "Charles",
    //             lastName: "Dickens"
    //         }
    //     },
    //     {
    //         title: "The Hobbit",
    //         author: {
    //             firstName: "J. R. R.",
    //             lastName: "Tolkien"
    //         }
    //     },
    //     {
    //         title: "The Alchemist",
    //         author: {
    //             firstName: "Paulo",
    //             lastName: "Coelho"
    //         }
    //     }
    // ]
    // console.log(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // function showBookInfo() {
    //     books.forEach(function (book, index) {
    //         console.log("Book # " + (index + 1));
    //         console.log("Title: " + book.title);
    //         console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    //         console.log("---");
    //     })
    // }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */
    let books = []
    function createBook(bookTitle, authorFirstName, authorLastName) {
        let newBook = {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
        books.push(newBook);
    }
    createBook("Dune", "Frank", "Herbert");
    createBook("Hyperion", "Dan", "Simmons");
    createBook("Oliver Twist", "Charles", "Dickens");
    createBook("The Hobbit", "J. R. R.", "Tolkien");
    createBook("The Alchemist", "Paulo", "Coelho");

    /** - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function showBookInfo(){
        books.forEach(function (book, index) {
            console.log("Book # " + (index + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---");
        })
    }
    showBookInfo();
})();